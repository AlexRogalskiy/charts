import { NowRequest, NowResponse } from '@vercel/node'
import { IncomingForm } from 'formidable'

import { ResourceOptions } from '../../typings/domain-types'

import * as templateService from '../services/template.service'

import { requestError, responseError } from '../errors/errors'

import { sendResponse, setHeaders } from '../utils/requests'
import { serialize } from '../utils/serializers'
import { single, toInt } from '../utils/commons'
import { profile } from '../utils/profiles'

import {
    IMAGE_CONTENT,
    IMAGE_ENCODING,
    LOCATION_OPTIONS,
    RESOURCE_OPTIONS,
    RESPONSE_HEADERS,
} from '../constants/constants'

export const withHeaders = (res: NowResponse, resources: ResourceOptions): NowResponse => {
    const { locationOptions, resourceOptions } = profile

    const name = locationOptions?.name || LOCATION_OPTIONS.name
    const contentType = resources.type || resourceOptions?.type || RESOURCE_OPTIONS.type
    const contentEncoding = resources.encoding || resourceOptions?.encoding || RESOURCE_OPTIONS.encoding

    return setHeaders(res, {
        ...RESPONSE_HEADERS,
        ...{
            'Content-Type': `image/${contentType}+xml`,
            'Content-Transfer-Encoding': `${contentEncoding}`,
            'Content-Disposition': `attachment; filename="${name}.${contentType}"`,
        },
    })
}

export async function rawController(req: NowRequest, res: NowResponse): Promise<NowResponse | void> {
    const form = new IncomingForm()

    form.parse(
        req,
        async (err, fields): Promise<NowResponse> => {
            setHeaders(res)

            if (err) {
                return sendResponse(res, responseError(err.message))
            }

            if (fields.data) {
                const buff = Buffer.from(fields.data.toString(), 'base64')
                const data = buff.toString()

                const width = toInt(single(req.query.width))
                const height = toInt(single(req.query.height))

                const type = IMAGE_CONTENT[single(req.query.type)]
                const encoding = IMAGE_ENCODING[single(req.query.encoding)]

                const routeOptions = { data }
                const imageOptions = { width, height }
                const resourceOptions = { type, encoding }

                const imageBuffer = await templateService.templateRenderer({
                    routeOptions,
                    imageOptions,
                    resourceOptions,
                })

                if (!imageBuffer) {
                    return sendResponse(res, responseError(`Invalid image data: ${serialize(imageBuffer)}`))
                }

                return res.json(imageBuffer.toString('base64'))
            }

            return sendResponse(res, requestError(`Cannot process input fields data: ${serialize(fields)}`))
        }
    )
}
