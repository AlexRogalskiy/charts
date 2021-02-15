import { NowRequest, NowResponse, VercelResponse } from '@vercel/node/dist'

import { chartRenderer } from '../utils/chart'
import { requireValidUrl, toInt, toString } from '../utils/commons'

export default async function render(req: NowRequest, res: NowResponse): Promise<VercelResponse> {
    try {
        const url = requireValidUrl(toString(req.query.url))
        const width = toInt(toString(req.query.width))
        const height = toInt(toString(req.query.height))

        const options = {width, height}

        const chart = await chartRenderer({
            url,
            options
        })

        res.setHeader('Cache-Control', 'no-cache,max-age=0,no-store,s-maxage=0,proxy-revalidate')
        res.setHeader('Pragma', 'no-cache')
        res.setHeader('Expires', '-1')
        res.setHeader('Content-type', 'image/svg+xml')
        res.setHeader('X-Powered-By', 'Vercel')

        return res.send(chart)
    } catch (error) {
        return res.send({
            status: 'Error',
            name: error.name,
            message: error.message
        })
    }
}
