import { NowRequest, NowResponse } from '@vercel/node'

import * as templateService from '../services/template.service'

import { single, toInt } from '../utils/commons'
import { withHeaders } from '../utils/requests'
import { requireValidUrl } from '../utils/validators'

import { IMAGE_CONTENT, IMAGE_ENCODING } from '../constants/constants'

export async function defaultController(req: NowRequest, res: NowResponse): Promise<NowResponse> {
    const url = requireValidUrl(single(req.query.url))

    const width = toInt(single(req.query.width))
    const height = toInt(single(req.query.height))

    const type = IMAGE_CONTENT[single(req.query.type)]
    const encoding = IMAGE_ENCODING[single(req.query.encoding)]

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
