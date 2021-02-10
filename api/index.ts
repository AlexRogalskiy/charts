import { NowRequest, NowResponse } from '@vercel/node/dist'
import { chartRenderer } from '../utils/chart'
import { toInt, toString } from '../utils/commons'
import { CONFIG } from '../utils/config'

export default async function render(req: NowRequest, res: NowResponse) {
  try {
    const url = toString(req.query.url)
    const width = toInt(toString(req.query.width), CONFIG.options.width)
    const height = toInt(toString(req.query.height), CONFIG.options.height)

    const chart = await chartRenderer({
      url,
      width,
      height
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
