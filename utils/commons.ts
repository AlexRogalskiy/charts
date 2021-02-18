import fetch from 'isomorphic-unfetch'
import _ from 'lodash'

export const toBase64ImageUrl = async (imgUrl): Promise<string> => {
    const fetchImageUrl = await fetch(imgUrl)
    const responseArrBuffer = await fetchImageUrl.arrayBuffer()

    return `data:${fetchImageUrl.headers.get('Content-Type') || 'image/png'};base64,${Buffer.from(
        responseArrBuffer
    ).toString('base64')}`
}

export const isValidUrl = (str: string): boolean => {
    try {
        new URL(str)
        return true
    } catch (e) {
        return false
    }
}

export const requireValidUrl = (str: string): string => {
    if (isValidUrl(str)) {
        return str
    }
    throw new Error(`Invalid URL: ${str}`)
}

export const fetchJsonUrl = async (url: RequestInfo): Promise<string> => {
    return await fetch(url)
        .then(async response => response.json())
        .then(value => {
            if ('layout' in value) {
                if ('height' in value.layout) {
                    value.layout.height = null
                }
                if ('width' in value.layout) {
                    value.layout.width = null
                }
            }
            return value
        })
}

export const isNonEmptyString = (str: string): boolean => {
    return str !== undefined && str.length > 0
}

export const isBlankString = (str: string): boolean => {
    return !str || /^\s*$/.test(str)
}

export const toJsonUrl = (str: string): string => {
    if (isBlankString(str)) throw Error('Source URL should not be blank or empty')
    str = withHttpUrl(str)
    str = withJsonUrl(str)
    return str
}

export const withHttpUrl = (url: string): string => (!!url && !/^https?:\/\//i.test(url)) ? `http://${url}` : url;

export const withJsonUrl = (url: string): string => (!!url && !/\.json$/i.test(url)) ? `${url}.json` : url;

export const toFormatString = (obj): string => {
    return `(${objToString(obj)})`
}

const objToString = (obj): string => {
    let str = ''
    for (const p in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, p)) {
            str += `${p} => ${typeof obj[p] === 'object' ? `[${objToString(obj[p])}]` : `${obj[p]},`}`
        }
    }
    return str
}

export const notBlankOrElse = (str: string, defaultValue: string): string => {
    return isBlankString(str) ? defaultValue : str
}

export const toString = (str: string | string[]): string => {
    return Array.isArray(str) ? str[0] : str
}

export const toInt = (str: string, defaultValue?: number): number | undefined => {
    try {
        return parseInt(str) || defaultValue
    } catch (e) {
        return defaultValue
    }
}

export const pluck = <T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] => {
    return propertyNames.map(n => o[n])
}

export const mergeProps = <T>(...obj: unknown[]): T => {
    return _.mergeWith({}, ...obj, (o, s) => (_.isNull(s) ? o : s))
}

export const wait = async (ms: number, ...args: unknown[]): Promise<void> => {
    new Promise(resolve => setTimeout(resolve, ms, args))
}

export const composeAsync = async (...funcs) => async x =>
    await funcs.reduce((acc, val) => acc.then(val), Promise.resolve(x))
