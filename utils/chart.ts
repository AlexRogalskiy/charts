import { JSDOM, VirtualConsole } from 'jsdom'
import { ParsedRequest } from '../typings/types'
import { toJsonUrl, toUrl } from './commons'
import { CONFIG } from './config'

export async function chartRenderer(parsedRequest: ParsedRequest) {
  const options = {...CONFIG.options, ...parsedRequest};
  const data = await toJsonUrl(toUrl(options.url)).catch(console.error)

  const virtualConsole = new VirtualConsole()
  virtualConsole.sendTo(console)
  virtualConsole.on('log', message => console.log('console.log called ->', message));
  virtualConsole.on('jsdomError', message => console.error('Error ->', message));

  const w = new JSDOM('', {runScripts: 'dangerously', virtualConsole}).window
  w.HTMLCanvasElement.prototype.getContext = () => null
  w.URL.createObjectURL = () => null

  const fs = require('fs');
  const pathToPlotly = require.resolve('plotly.js-dist')
  return fs.promises.readFile(pathToPlotly, 'utf-8')
    .then(w.eval)
    .then(() => w.Plotly.toImage(data, options))
    .catch(console.error)
}
