import fetch from 'isomorphic-unfetch'

export const randomElement = (arr: Array<any>) => arr[Math.floor(Math.random() * arr.length)]

export const toBase64ImageUrl = async (imgUrl: any): Promise<string> => {
  const fetchImageUrl = await fetch(imgUrl)
  const responseArrBuffer = await fetchImageUrl.arrayBuffer()

  return `data:${fetchImageUrl.headers.get('Content-Type') || 'image/png'};base64,${Buffer.from(responseArrBuffer).toString('base64')}`
}

export const toJsonUrl = async (url: any): Promise<string> => {
  return await fetch(url)
    .then((response) => response.json())
    .then((newJSON) => {
      if ('layout' in newJSON) {
        if ('height' in newJSON.layout) {
          newJSON.layout.height = null;
        }
        if ('width' in newJSON.layout) {
          newJSON.layout.width = null;
        }
      }
      return newJSON;
    });
}

export const isNonEmptyString = (str: string): boolean => {
  return str && str.length > 0
}

export const isBlankString = (str: string): boolean => {
  return (!str || /^\s*$/.test(str))
}

export const toUrl = (str: string): string => {
  if (isBlankString(str)) throw Error("Source URL should not be blank or empty")
  str = str.startsWith('http') ? str : 'http://' + str
  str = str.endsWith('.json') ? str : str + '.json'
  return str
}

export const notBlankOrElse = (str: string, defaultValue: string): string => {
  return isBlankString(str) ? defaultValue : str
}

export const toString = (str: string | string[]): string => {
  return Array.isArray(str) ? str[0] : str
}

export const toInt = (str: string, defaultValue: number): number => {
  try {
    return parseInt(str) || defaultValue
  } catch (e) {
    return defaultValue
  }
}

// @ts-ignore
export const randomEnum = <T>(anEnum: T): T[keyof T] => {
  const enumValues = (Object.values(anEnum) as unknown) as T[keyof T][]
  const randomIndex = Math.floor(Math.random() * enumValues.length)
  return enumValues[randomIndex]
}
