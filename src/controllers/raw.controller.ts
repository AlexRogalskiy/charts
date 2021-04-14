import { NowRequest, NowResponse } from '@vercel/node'
import { IncomingForm } from 'formidable'

import * as templateService from '../services/template.service'

import { requestError, responseError } from '../errors/errors'

import { single, toInt } from '../utils/commons'
import { sendResponse, setHeaders, withHeaders } from '../utils/requests'
import { deserialize, serialize } from '../utils/serializers'

import { IMAGE_CONTENT, IMAGE_ENCODING } from '../constants/constants'

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
                const file = deserialize(buff.toString())

                const width = toInt(single(req.query.width))
                const height = toInt(single(req.query.height))

                const type = IMAGE_CONTENT[single(req.query.type)]
                const encoding = IMAGE_ENCODING[single(req.query.encoding)]

                const sourceOptions = { file }
                const imageOptions = { width, height }
                const resourceOptions = { type, encoding }

                const chart = await templateService.fileTemplateRenderer({
                    sourceOptions,
                    imageOptions,
                    resourceOptions,
                })

                if (!chart) {
                    return sendResponse(res, responseError(`Invalid image data: ${serialize(chart)}`))
                }

                return withHeaders(res, resourceOptions).send(chart)
            }

            return sendResponse(res, requestError(`Cannot process input fields data: ${serialize(fields)}`))
        }
    )
}
