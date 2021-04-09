import { NowRequest, NowResponse, VercelResponse } from '@vercel/node/dist'

import { RoutePattern } from '../typings/enum-types'

import { responseError } from '../src/errors/errors'
import { getRoute } from '../src/routes/routes'
import { sendResponse } from '../src/utils/requests'
import { single } from '../src/utils/commons'

export default async function render(req: NowRequest, res: NowResponse): Promise<VercelResponse> {
    try {
        const routePattern = RoutePattern[single(req.query.mode)]

        const route = getRoute(routePattern)

        return await route(req, res)
    } catch (error) {
        return sendResponse(res, responseError(error.message))
    }
}
