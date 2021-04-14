import {
    FileRequestOptions,
    ImageOptions,
    RequestData,
    ResourceOptions,
    UrlRequestOptions,
} from '../../typings/domain-types'

import * as chartClient from '../clients/chart.client'

import { fetchAsJson, toJsonUrl } from '../utils/requests'
import { mergeProps } from '../utils/commons'
import { serialize } from '../utils/serializers'
import { profile } from '../utils/profiles'
import { boxenLogs } from '../utils/loggers'

const templateRenderer = async ({ data, image, resource }): Promise<Buffer | string | void> => {
    const { imageOptions, resourceOptions } = profile

    const requestData: RequestData = {
        data,
        imageOptions: mergeProps<ImageOptions>(imageOptions, image),
        resourceOptions: mergeProps<ResourceOptions>(resourceOptions, resource),
    }

    return await chartClient.chartRenderer(requestData)
}

export async function fileTemplateRenderer(request: FileRequestOptions): Promise<Buffer | string | void> {
    boxenLogs(` >>> Generating chart with request parameters: ${serialize(request)}`)

    return await templateRenderer({
        data: request.sourceOptions.file,
        image: request.imageOptions,
        resource: request.resourceOptions,
    })
}

export async function urlTemplateRenderer(request: UrlRequestOptions): Promise<Buffer | string | void> {
    boxenLogs(` >>> Generating chart with request parameters: ${serialize(request)}`)

    return await templateRenderer({
        data: await fetchAsJson(toJsonUrl(request.sourceOptions.url)),
        image: request.imageOptions,
        resource: request.resourceOptions,
    })
}
