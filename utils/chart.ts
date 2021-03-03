import { JSDOM, VirtualConsole } from 'jsdom'
import { promises } from 'fs'

import { ImageOptions, ParsedRequest } from '../typings/types'
import { fetchJsonUrl, mergeProps, toFormatString, toJsonUrl } from './commons'
import { CONFIG } from './config'

const pathToPlotly = require.resolve('plotly.js-dist')

export async function chartRenderer(parsedRequest: ParsedRequest): Promise<string | void> {
    const url = await fetchJsonUrl(toJsonUrl(parsedRequest.url)).catch(console.error)
    const options: ImageOptions = mergeProps(CONFIG.imageOptions, parsedRequest.options)

    console.log(
        `
        >>> Generating chart with parameters:
        url=${parsedRequest.url},
        options=${toFormatString(options)}
        `
    )

    const virtualConsole: VirtualConsole = createVirtualConsole()
    const virtualWindow: JSDOM = createVirtualWindow(virtualConsole)

    return await createChart(url, options, virtualWindow).catch(console.error)
}

const createVirtualConsole = (): VirtualConsole => {
    const virtualConsole = new VirtualConsole()
    virtualConsole.sendTo(console)
    virtualConsole.on('log', message => console.log('console.log called -> ', message))
    virtualConsole.on('jsdomError', message => console.error('Error -> ', message))

    return virtualConsole
}

const createVirtualWindow = (virtualConsole: VirtualConsole): JSDOM => {
    const jsDomWindow = new JSDOM('', { runScripts: 'dangerously', virtualConsole }).window
    jsDomWindow.HTMLCanvasElement.prototype.getContext = () => null
    jsDomWindow.URL.createObjectURL = () => null

    return jsDomWindow
}

const createChart = async (url: unknown, options: ImageOptions, virtualWindow: JSDOM): Promise<string> => {
    return await promises
        .readFile(pathToPlotly, 'utf-8')
        .then(virtualWindow.eval)
        .then(() => virtualWindow.Plotly.toImage(url, options))
}
