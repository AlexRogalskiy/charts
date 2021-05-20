import { VercelRequest, VercelResponse } from '@vercel/node'

import { RouteFunction } from '../../typings/service-types'
import { RoutePattern } from '../../typings/enum-types'
import { Optional } from '../../typings/standard-types'

import { defaultController } from '../controllers/default.controller'
import { rawController } from '../controllers/raw.controller'

import { sendResponse, setHeaders } from '../utils/requests'

import { responseError } from '../errors/errors'

/**
 * RouteRecord
 * @desc Type representing route config options
 */
export type RouteRecord = Record<RoutePattern, RouteFunction>

/**
 * Route mappings
 * @desc Type representing supported route mappings
 */
const routes: Readonly<RouteRecord> = {
    [RoutePattern.default]: defaultController,
    [RoutePattern.raw]: rawController,
}

/**
 * Returns {@link RouteFunction} by input {@link RoutePattern} value
 * @param value initial input {@link RoutePattern} to fetch by
 */
export const getRoute = (value: Optional<RoutePattern>): RouteFunction => {
    return value ? routes[value] : routes[RoutePattern.default]
}

/**
 * Returns wrapped input {@link RouteFunction} with default error handler
 * @param route initial input {@link RouteFunction} to operate by
 */
export function withApiHandler(route: RouteFunction): RouteFunction {
    return async (req: VercelRequest, res: VercelResponse) => {
        setHeaders(res)

        if (req.method === 'OPTIONS') {
            return res.status(200).json({})
        }

        try {
            return await route(req, res)
        } catch (error) {
            return sendResponse(res, responseError(error.message))
        }
    }
}
