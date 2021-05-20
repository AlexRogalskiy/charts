import { VercelRequest, VercelResponse } from '@vercel/node'

import { RoutePattern } from '../typings/enum-types'

import { getRoute, withApiHandler } from '../src/routes/routes'
import { single } from '../src/utils/commons'

export default async function render(
    req: VercelRequest,
    res: VercelResponse
): Promise<VercelResponse | void> {
    const routePattern = RoutePattern[single(req.query.mode)]

    const route = getRoute(routePattern)

    return await withApiHandler(route)(req, res)
}
