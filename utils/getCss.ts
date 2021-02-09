import { readFileSync } from 'fs'

const monserrat700 = readFileSync(
  `${__dirname}/../fonts/montserrat-v15-latin-700.woff2`
).toString("base64")
const monserratRegular = readFileSync(
  `${__dirname}/../fonts/montserrat-v15-latin-regular.woff2`
).toString("base64")

// @ts-ignore
export const css = ({backgroundColor, fontColor}): string => {
  return `
      @font-face{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: normal;
        src: url(data:font/woff2;charset=utf-8;base64,${monserratRegular}) format('woff2');
      }
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: bold;
        src: url(data:font/woff2;charset=utf-8;base64,${monserrat700}) format('woff2');
      }
      .font-monserrat700 {
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        color: ${fontColor};
        text-align: right;
        margin: 3% 3% 0% 0%;
      }
      .font-monserratRegular {
        font-family: 'Montserrat', sans-serif;
        font-style: italic;
        color: ${fontColor};
      }
      .chart-wrapper {
        background: ${backgroundColor};
        margin: 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 5% 5%;
      }
      p{
        font-size: 1.0rem;
        margin: 10% 5%;
      }
      p.site {
        margin-top: 10px;
      }
      .chart-wrapper-desc {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      div.line{
        width: 0%;
        min-width: 100%;
        max-width: 100%;
        margin: 0 auto;
        border: none;
        border-bottom: 1px solid #666;
      }
    `
}
