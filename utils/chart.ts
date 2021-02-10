import { JSDOM, VirtualConsole } from 'jsdom'
import { ParsedRequest } from '../typings/types'
import { toJsonUrl, toUrl } from '../utils/commons'

export async function chartRenderer(parsedRequest: ParsedRequest) {
  const {
    link,
    heightSize,
    widthSize
  } = parsedRequest

  const layout = {
    yaxis2: {
      domain: [0.6, 0.95],
      anchor: 'x2'
    },
    xaxis2: {
      domain: [0.6, 0.95],
      anchor: 'y2'
    }
  };

  const layout2 = {
    plotBackground: '#f3f6fa',
    margin: {t: 0, r: 0, l: 20, b: 30},
  }

  const plotJSON = {
    data: [
      {
        x: [1, 2, 3, 4],
        y: [1, 3, 2, 6],
        type: 'bar',
        marker: {color: '#ab63fa'},
        name: 'Bar'
      }, {
        x: [1, 2, 3, 4],
        y: [3, 2, 7, 4],
        type: 'line',
        marker: {color: '#19d3f3'},
        name: 'Line'
      }
    ],
    layout: layout
  }

  const plotJSON2 = {
    data: [{
      x: [1, 2, 3],
      y: [2, 1, 2],
      mode: 'markers',
      marker: {
        size: 20,
        color: 'green'
      }
    }]
  }

  const plotJSON3 = {data: [{y: [1, 2, 1]}]}

  const trace1 = {
    x: [1, 2, 3],
    y: [4, 3, 2],
    type: 'scatter'
  };
  const trace2 = {
    x: [20, 30, 40],
    y: [30, 40, 50],
    xaxis: 'x2',
    yaxis: 'y2',
    type: 'scatter'
  };

  const plotJSON4 = [trace1, trace2];

  const opts = {
    format: 'svg',
    imageDataOnly: true,
    showLinks: true,
    height: 800,
    width: 800
  }

  const data = await toJsonUrl(toUrl(link)).catch(console.error)

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
    .then(() => w.Plotly.toImage(data, opts))
    //.then(img => fs.promises.writeFile('fig.svg', img))
    .catch(console.error)
}
