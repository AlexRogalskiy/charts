import { JSDOM, VirtualConsole } from 'jsdom'
import { promises } from 'fs'

import { ImageOptions, RequestData } from '../../typings/domain-types'

import { boxenLogs, errorLogs, logs } from '../utils/loggers'
import { serialize } from '../utils/serializers'

const pathToPlotly = require.resolve('plotly.js-dist')

const createVirtualConsole = (): VirtualConsole => {
    const console = new VirtualConsole()
    console.sendTo(console)
    console.on('log', message => logs('console.log called -> ', message))
    console.on('jsdomError', message => errorLogs('Error -> ', message))

    return console
}

const createVirtualWindow = (virtualConsole: VirtualConsole): JSDOM => {
    const window = new JSDOM('', { runScripts: 'dangerously', virtualConsole }).window
    window.HTMLCanvasElement.prototype.getContext = () => null
    window.URL.createObjectURL = () => null

    return window
}

const createChart = async (data: string, options: ImageOptions, virtualWindow: JSDOM): Promise<string> => {
    boxenLogs(`>>> Generating screenshot with parameters: ${serialize(options)}`)

    return await promises
        .readFile(pathToPlotly, 'utf-8')
        .then(virtualWindow.eval)
        .then(() => virtualWindow.Plotly.toImage(data, options))
}

export async function chartRenderer(request: RequestData): Promise<Buffer | string | void> {
    const { data, imageOptions } = request

    const virtualConsole: VirtualConsole = createVirtualConsole()
    const virtualWindow: JSDOM = createVirtualWindow(virtualConsole)

    return await createChart(data, imageOptions, virtualWindow)
}
