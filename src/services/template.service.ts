import { ImageOptions, RequestData, RequestOptions, ResourceOptions } from '../../typings/domain-types'

import * as chartClient from '../clients/chart.client'

import { fetchAsJson, toJsonUrl } from '../utils/requests'
import { mergeProps } from '../utils/commons'
import { serialize } from '../utils/serializers'
import { profile } from '../utils/profiles'
import { boxenLogs } from '../utils/loggers'

export async function templateRenderer(request: RequestOptions): Promise<Buffer | string | void> {
    boxenLogs(` >>> Generating chart with request parameters: ${serialize(request)}`)

    const { imageOptions, resourceOptions } = profile

    const data = await fetchAsJson(toJsonUrl(request.routeOptions.url))

    const requestData: RequestData = {
        data,
        imageOptions: mergeProps<ImageOptions>(imageOptions, request.imageOptions),
        resourceOptions: mergeProps<ResourceOptions>(resourceOptions, request.resourceOptions),
    }

    return await chartClient.chartRenderer(requestData)
}
