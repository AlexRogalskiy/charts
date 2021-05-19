import { VercelRequest, VercelResponse } from '@vercel/node'

import { ImageContentType, ImageEncodingType } from '../../typings/domain-types'

import * as templateService from '../services/template.service'

import { single, toInt } from '../utils/commons'
import { withHeaders } from '../utils/requests'
import { requireValidUrl } from '../utils/validators'

import { IMAGE_CONTENT, IMAGE_ENCODING } from '../constants/constants'

export async function defaultController(req: VercelRequest, res: VercelResponse): Promise<VercelResponse> {
    const url = requireValidUrl(single(req.query.url))

    const width = toInt(single(req.query.width))
    const height = toInt(single(req.query.height))

    const type: ImageContentType = IMAGE_CONTENT[single(req.query.type)]
    const encoding: ImageEncodingType = IMAGE_ENCODING[single(req.query.encoding)]

    const sourceOptions = { url }
    const imageOptions = { width, height }
    const resourceOptions = { type, encoding }

    const chart = await templateService.urlTemplateRenderer({
        sourceOptions,
        imageOptions,
        resourceOptions,
    })

    return withHeaders(res, resourceOptions).send(chart)
}
