import { ProfilePattern } from '../../typings/enum-types'
import { ProfileOptions } from '../../typings/domain-types'

import { IMAGE_OPTIONS, LOCATION_OPTIONS, OUTPUT_OPTIONS, RESOURCE_OPTIONS } from '../constants/constants'

/**
 * ProfileConfigOptions
 * @desc Type representing profile configuration options
 */
export type ProfileConfigOptions = Record<ProfilePattern, ProfileOptions>

/**
 * Configuration options
 */
export const CONFIG: Readonly<ProfileConfigOptions> = {
    dev: {
        imageOptions: IMAGE_OPTIONS,
        resourceOptions: RESOURCE_OPTIONS,
        locationOptions: LOCATION_OPTIONS,
        outputOptions: OUTPUT_OPTIONS,
    },
    prod: {
        imageOptions: IMAGE_OPTIONS,
        resourceOptions: RESOURCE_OPTIONS,
        locationOptions: LOCATION_OPTIONS,
        outputOptions: OUTPUT_OPTIONS,
    },
    test: {
        imageOptions: IMAGE_OPTIONS,
        resourceOptions: RESOURCE_OPTIONS,
        locationOptions: LOCATION_OPTIONS,
        outputOptions: OUTPUT_OPTIONS,
    },
}
