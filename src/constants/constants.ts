import boxen from 'boxen'

import { ImageContentType, ImageOptions, LocationOptions, ResourceOptions } from '../../typings/domain-types'
import { Headers, KeyRecord, StringRecord } from '../../typings/standard-types'

import { strToEnum } from '../utils/commons'

/**
 * Supported content image types
 * - 'jpeg'
 * - 'png'
 */
const IMAGE_TYPES = ['svg'] as const

/**
 * Supported content image encodings
 *  - 'base64'
 *  - 'binary'
 */
const IMAGE_ENCODINGS = ['base64', 'binary'] as const

/**
 * Image supported content types
 */
export const IMAGE_CONTENT: KeyRecord<typeof IMAGE_TYPES[number]> = strToEnum(Object.values(IMAGE_TYPES))

/**
 * Image supported content encoding types
 */
export const IMAGE_ENCODING: KeyRecord<typeof IMAGE_ENCODINGS[number]> = strToEnum(
    Object.values(IMAGE_ENCODINGS)
)

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
 * Content configuration options
 */
export const CONTENT_TYPE_OPTIONS: Readonly<StringRecord<ImageContentType>> = {
    svg: 'image/svg+xml',
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
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
    'Access-Control-Allow-Headers':
        'Origin, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
    'Cache-Control': 'no-cache,max-age=0,no-store,s-maxage=0,proxy-revalidate',
    'Pragma': 'no-cache',
    'Expires': '-1',
    'X-Powered-By': 'Vercel',
}
