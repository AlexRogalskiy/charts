import { NowRequest, NowResponse } from '@vercel/node/dist'
import { chartRenderer } from '../utils/chart'
import { toInt, toString } from '../utils/commons'

export default async function render(req: NowRequest, res: NowResponse) {
  try {
    const {
      url,
      category,
      width,
      height,
      backgroundColor,
      fontColor
    } = req.query

    const link = toString(url)
    const categoryType = toString(category)
    const widthSize = toInt(toString(width), 400)
    const heightSize = toInt(toString(height), 200)

    const chart = await chartRenderer({
      link,
      categoryType,
      widthSize,
      heightSize,
      backgroundColor,
      fontColor
    })

    res.setHeader(
      "Cache-Control",
      "no-cache,max-age=0,no-store,s-maxage=0,proxy-revalidate"
    )
    res.setHeader("Pragma", "no-cache")
    res.setHeader("Expires", "-1")
    res.setHeader('Content-type', 'image/svg+xml')

    return res.send(chart)
  } catch (error) {
    return res.send({
      status: 'Error',
      name: error.name,
      message: error.message
    })
  }
}
