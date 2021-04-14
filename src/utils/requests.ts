import { NowResponse } from '@vercel/node'

import fetch from 'isomorphic-unfetch'

import { Headers, Optional } from '../../typings/standard-types'
import { ResourceOptions } from '../../typings/domain-types'

import { ExtendableError, ResponseError } from '../errors/errors'

import { errorLogs } from './loggers'

import { isBlankString, isFunction } from './validators'

import { profile } from './profiles'

import {
    CONTENT_TYPE_OPTIONS,
    LOCATION_OPTIONS,
    RESOURCE_OPTIONS,
    RESPONSE_HEADERS,
} from '../constants/constants'

// eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires
require('https').globalAgent.options.rejectUnauthorized = false

export const getApiUrl = (baseUrl: string, query: string): string => `${baseUrl}?${query}`

export const withHeaders = (res: NowResponse, resources: ResourceOptions): NowResponse => {
    const { locationOptions, resourceOptions } = profile

    const name = locationOptions?.name || LOCATION_OPTIONS.name
    const type = resources.type || resourceOptions?.type || RESOURCE_OPTIONS.type
    const encoding = resources.encoding || resourceOptions?.encoding || RESOURCE_OPTIONS.encoding

    return setHeaders(res, {
        ...RESPONSE_HEADERS,
        ...{
            'Content-Type': `${CONTENT_TYPE_OPTIONS[type]}`,
            'Content-Transfer-Encoding': `${encoding}`,
            'Content-Disposition': `attachment; filename="${name}.${type}"`,
        },
    })
}

export const sendResponse = (
    res: NowResponse,
    { data, type, message, timestamp }: ExtendableError
): NowResponse => {
    return res.status(data.code).send({
        type,
        code: data.code,
        message,
        description: data.description,
        timestamp,
    })
}

export const setHeaders = <T>(res: T, headers: Headers = RESPONSE_HEADERS): T => {
    for (const [key, value] of Object.entries(headers)) {
        setHeader(res, key, value)
    }

    return res
}

export const setHeader = <T>(res: T, key: string, value: number | string | string[]): T => {
    if (Array.isArray(res)) {
        res.push([key, value])
    } else if (isFunction(res['setHeader'])) {
        res['setHeader'](key, value)
    } else {
        res[key] = value
    }

    return res
}

export const isResponseOk = (response: Response): boolean => {
    const statusCode = response.status
    const limitStatusCode = response.redirected ? 299 : 399

    return (statusCode >= 200 && statusCode <= limitStatusCode) || statusCode === 304
}

export const checkStatus = async (response: Response): Promise<Response> => {
    if (isResponseOk(response)) {
        return response
    }

    const error = new ResponseError(response.statusText, response)

    return Promise.reject(error)
}

export const fetchAsText = async (url: string, options: RequestInit = {}): Promise<string> => {
    try {
        const response = await fetch(url, options)
        const data = await checkStatus(response)

        return await data.text()
    } catch (error) {
        errorLogs(`Cannot fetch request by url: ${url}, message: ${error.message}`)
        throw error
    }
}

export const fetchAsJson = async (url: string, options: RequestInit = {}): Promise<any> => {
    try {
        const response = await fetch(url, options)
        const data = await checkStatus(response)

        return await data.json()
    } catch (error) {
        errorLogs(`Cannot fetch request by url: ${url}, message: ${error.message}`)
        throw error
    }
}

export const jsonFromURL = async (url: string, param: string): Promise<string> => {
    if (param) {
        url += encodeURIComponent(param)
    }

    const option = {
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const res = await fetch(url, option)

    return await res.json()
}

export const toBase64ImageUrl = async (request: RequestInfo): Promise<string> => {
    const fetchImageUrl = await fetch(request)
    const responseArrBuffer = await fetchImageUrl.arrayBuffer()

    return `data:${fetchImageUrl.headers.get('Content-Type') || 'image/png'};base64,${Buffer.from(
        responseArrBuffer
    ).toString('base64')}`
}

export const toFormatUrl = (value: string, prefix = 'http', suffix = '.json'): string => {
    if (isBlankString(value)) throw new Error('Source URL should not be blank or empty')
    value = value.startsWith(prefix) ? value : `${prefix}://${value}`
    value = value.endsWith(suffix) ? value : `${value}${suffix}`

    return value
}

export const toJsonUrl = (value: Optional<string>): string => {
    if (!value || isBlankString(value)) throw new Error('Source URL should not be blank or empty')
    value = withHttpUrl(value)
    value = withJsonUrl(value)

    return value
}

export const withHttpUrl = (url: string, prefix = 'http'): string =>
    !!url && !/^https?:\/\//i.test(url) ? `${prefix}://${url}` : url

export const withJsonUrl = (url: string, suffix = '.json'): string =>
    !!url && !/\.json$/i.test(url) ? `${url.replace(/\/$/, '')}.${suffix}` : url
