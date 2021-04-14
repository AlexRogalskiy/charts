/**
 * Optional
 * @desc Type representing [`Optional`] in TypeScript: `T | null | undefined`
 */
export type Optional<T> = T | null | undefined
//--------------------------------------------------------------------------------------------------
/**
 * Undef
 * @desc Type representing [`Undef`] in TypeScript: `T | undefined`
 */
export type Undef<T> = T | undefined
//--------------------------------------------------------------------------------------------------
/**
 * Keys
 * @desc Type representing [`Keys`] in TypeScript: `T`
 */
export type Keys<T> = keyof T
//--------------------------------------------------------------------------------------------------
/**
 * KeyRecord
 * @desc Type representing key record
 */
export type KeyRecord<T extends PropertyKey> = { [K in T]: K }
//--------------------------------------------------------------------------------------------------
/**
 * StringRecord
 * @desc Type representing string record
 */
export type StringRecord<T extends PropertyKey> = Record<T, string>
//--------------------------------------------------------------------------------------------------
/**
 * Headers
 * @desc Type representing headers
 */
export type Headers = Record<string, number | string | string[]>
//--------------------------------------------------------------------------------------------------
/**
 * Processor
 * @desc Type representing processor function type in TypeScript
 * @example
 *   type Processor = (v) => return new String(v)
 */
export type Processor<T, V> = (v: T) => V
//--------------------------------------------------------------------------------------------------
/**
 * BiConsumer
 * @desc Type representing binary consumer function type in TypeScript
 * @example
 *   type BiConsumer = (v1, v2) => console.log(v1 + ":" + v2)
 */
export type BiConsumer<T, V> = (v1: T, v2: V) => void
//--------------------------------------------------------------------------------------------------
