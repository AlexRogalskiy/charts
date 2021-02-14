export interface ImageOptions {
  readonly format: string
  readonly imageDataOnly: boolean
  readonly showLinks: boolean
  readonly width: number
  readonly height: number
}

export interface ParsedRequest {
  url: string
  options?: ParsedImageOptions
}

export interface ParsedImageOptions {
  imageDataOnly?: boolean
  showLinks?: boolean
  width?: number
  height?: number
}

export interface ConfigOptions {
  imageOptions: ImageOptions
}
