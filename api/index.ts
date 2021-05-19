import { VercelRequest, VercelResponse } from '@vercel/node'

import { RoutePattern } from '../typings/enum-types'

import { responseError } from '../src/errors/errors'
import { getRoute } from '../src/routes/routes'
import { sendResponse } from '../src/utils/requests'
import { single } from '../src/utils/commons'

export default async function render(
    req: VercelRequest,
    res: VercelResponse
): Promise<VercelResponse | void> {
    try {
        const routePattern = RoutePattern[single(req.query.mode)]

        const route = getRoute(routePattern)

        return await route(req, res)
    } catch (error) {
        return sendResponse(res, responseError(error.message))
    }
}
