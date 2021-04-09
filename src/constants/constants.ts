import boxen from 'boxen'

import { ImageOptions, LocationOptions, ResourceOptions } from '../../typings/domain-types'
import { Headers } from '../../typings/standard-types'

import { strToEnum } from '../utils/commons'

/**
 * Image supported content types
 */
export const IMAGE_CONTENT: Record<string, string> = strToEnum(['jpeg', 'png', 'svg'])

/**
 * Image supported content encoding types
 */
export const IMAGE_ENCODING: Record<string, string> = strToEnum(['base64', 'binary'])

/**
 * Output configuration options
 */
export const OUTPUT_OPTIONS: Readonly<boxen.Options> = {
    padding: 1,
    margin: 1,
    borderStyle: 'single',
    borderColor: 'yellow',
}

/**
 * Resource configuration options
 */
export const RESOURCE_OPTIONS: Readonly<ResourceOptions> = {
    type: 'svg',
    encoding: 'binary',
}

/**
 * Image configuration options
 */
export const IMAGE_OPTIONS: Readonly<ImageOptions> = {
    format: 'svg',
    imageDataOnly: true,
    showLinks: true,
    height: 800,
    width: 800,
}

/**
 * Location configuration options
 */
export const LOCATION_OPTIONS: Readonly<LocationOptions> = {
    name: 'screenshot',
    path: 'images',
}

/**
 * Response headers
 */
export const RESPONSE_HEADERS: Readonly<Headers> = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Cache-Control': 'no-cache,max-age=0,no-store,s-maxage=0,proxy-revalidate',
    'Content-Type': 'application/json',
    'Pragma': 'no-cache',
    'Expires': '-1',
    'X-Powered-By': 'Vercel',
}
