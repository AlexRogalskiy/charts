import boxen from 'boxen'

import { Keys } from './standard-types'

import { IMAGE_CONTENT, IMAGE_ENCODING } from '../src/constants/constants'

//--------------------------------------------------------------------------------------------------
/**
 * ImageContentType
 * @desc Type representing supported image contents
 */
export type ImageContentType = Keys<typeof IMAGE_CONTENT>

/**
 * ImageEncodingType
 * @desc Type representing supported image encodings
 */
export type ImageEncodingType = Keys<typeof IMAGE_ENCODING>
//--------------------------------------------------------------------------------------------------
/**
 * UrlDataOptions
 * @desc Type representing url data configuration options
 */
export type UrlDataOptions = {
    /**
     * Url data.
     */
    readonly url: string
}

/**
 * FileDataOptions
 * @desc Type representing file data configuration options
 */
export type FileDataOptions = {
    /**
     * File data.
     */
    readonly file: string
}

//--------------------------------------------------------------------------------------------------
/**
 * LocationOptions
 * @desc Type representing location configuration options
 */
export type LocationOptions = {
    /**
     * Image name.
     */
    readonly name: string
    /**
     * Image path.
     */
    readonly path: string
}

//--------------------------------------------------------------------------------------------------
/**
 * ImageOptions
 * @desc Type representing image configuration options
 */
export type ImageOptions = {
    /**
     * Image format type.
     */
    readonly format: ImageContentType
    /**
     * Enable/disable image data
     */
    readonly imageDataOnly: boolean
    /**
     * Enable/disable links
     */
    readonly showLinks: boolean
    /**
     * Page width in pixels.
     */
    readonly width: number
    /**
     * Page height in pixels.
     */
    readonly height: number
}
//--------------------------------------------------------------------------------------------------
/**
 * ResourceOptions
 * @desc Type representing resource configuration options
 */
export type ResourceOptions = {
    /**
     * Image content type.
     */
    readonly type: ImageContentType
    /**
     * Image content transfer encoding.
     */
    readonly encoding: ImageEncodingType
}

//--------------------------------------------------------------------------------------------------
/**
 * RequestData
 * @desc Type representing request data options
 */
export type RequestData = {
    /**
     * Request json data
     */
    readonly data: string
    /**
     * Image configuration options.
     */
    readonly imageOptions: ImageOptions
    /**
     * Resource configuration options.
     */
    readonly resourceOptions: ResourceOptions
}
//--------------------------------------------------------------------------------------------------
/**
 * RequestOptions
 * @desc Type representing request configuration options
 */
export type RequestOptions<T> = {
    /**
     * Source configuration options.
     */
    readonly sourceOptions: T
    /**
     * Image configuration options.
     */
    readonly imageOptions?: Partial<ImageOptions>
    /**
     * Resource configuration options.
     */
    readonly resourceOptions?: Partial<ResourceOptions>
}

/**
 * UrlRequestOptions
 * @desc Type representing url request configuration options
 */
export type UrlRequestOptions = RequestOptions<UrlDataOptions>

/**
 * FileRequestOptions
 * @desc Type representing file request configuration options
 */
export type FileRequestOptions = RequestOptions<FileDataOptions>

//--------------------------------------------------------------------------------------------------
/**
 * ProfileOptions
 * @desc Type representing profile configuration options
 */
export type ProfileOptions = {
    /**
     * Image configuration options.
     */
    readonly imageOptions?: Partial<ImageOptions>
    /**
     * Resource configuration options.
     */
    readonly resourceOptions?: Partial<ResourceOptions>
    /**
     * Location configuration options.
     */
    readonly locationOptions?: Partial<LocationOptions>
    /**
     * Logging configuration options
     */
    readonly outputOptions?: Partial<boxen.Options>
}
//--------------------------------------------------------------------------------------------------
