export interface ParsedRequest {
  url: string
  width: number
  height: number
}

export interface ParsedImageOptions {
  format: string
  imageDataOnly: boolean
  showLinks: boolean
  width: number
  height: number
}
