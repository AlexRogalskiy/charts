import { Plotly } from 'plotly.js-dist'
//import { PlotlyGeo } from 'plotly.js-geo-dist'
import { promises } from 'fs'
import { jsdom } from 'jsdom'

import { ParsedRequest } from '../typings/types'
import { css } from './getCss'

export async function chartRenderer(parsedRequest: ParsedRequest) {
  const {
    url,
    category,
    height,
    width,
    backgroundColor,
    fontColor
  } = parsedRequest

  // const trace1 = {
  //   x: [1, 2, 3],
  //   y: [4, 3, 2],
  //   type: 'scatter'
  // };
  // const trace2 = {
  //   x: [20, 30, 40],
  //   y: [30, 40, 50],
  //   xaxis: 'x2',
  //   yaxis: 'y2',
  //   type: 'scatter'
  // };
  // const data = [trace1, trace2];

  // const layout = {
  //   yaxis2: {
  //     domain: [0.6, 0.95],
  //     anchor: 'x2'
  //   },
  //   xaxis2: {
  //     domain: [0.6, 0.95],
  //     anchor: 'y2'
  //   }
  // };

  const fig = {data: [{y: [1, 2, 1]}]}
  const opts = {format: 'svg', imageDataOnly: true, height: 800, width: 800}

  const virtualConsole = new jsdom.VirtualConsole()
  virtualConsole.sendTo(console)

  const w = new jsdom.JSDOM('', {runScripts: 'dangerously', virtualConsole}).window
  // mock a few things that JSDOM doesn't support out-of-the-box
  w.HTMLCanvasElement.prototype.getContext = () => null
  w.URL.createObjectURL = () => null

  promises.readFile(Plotly, 'utf-8')
    .then(w.eval)
    .then(() => w.Plotly.toImage(fig, opts))
    .then(img => promises.writeFile('fig.svg', img))
    .catch(console.warn)

  return `
      <svg
        width="580"
        height="100%"
        viewBox="0 0 580 100%"
        xmlns="http://www.w3.org/2000/svg">
        <foreignObject x="0" y="0" width="580" height="100%">
            <div xmlns="http://www.w3.org/1999/xhtml">
              <div class="chart-wrapper">
                <div class="chart-wrapper-desc">
                  <div class="line"></div>
                  <p class="font-monserratRegular">test</p>
                  <div class="line"></div>
                  <h3 class="font-monserrat700">test</h3>
                </div>
              </div>
            </div>
        </foreignObject>
        <style>${css({backgroundColor, fontColor})}</style>
      </svg>
  `
}
