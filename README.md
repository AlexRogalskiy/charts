# _Styled charts_

<div align="center">
<p>Create your styled charts dynamically</p>

![type definitions](https://img.shields.io/npm/types/typescript?style=flat-square)
![code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://raw.githubusercontent.com/alexrogalskiy/charts/master/LICENSE?token=AH44ZFH7IF2KSEDK7LSIW3C7YOFYC)
[![Issue](https://img.shields.io/github/issues/alexrogalskiy/charts)](https://img.shields.io/github/issues/alexrogalskiy/charts)
[![Forks](https://img.shields.io/github/forks/alexrogalskiy/charts)](https://img.shields.io/github/forks/alexrogalskiy/charts)
[![Stars](https://img.shields.io/github/stars/alexrogalskiy/charts)](https://img.shields.io/github/stars/alexrogalskiy/charts)

</div>

## _Table of contents_

<!--ts-->
   * [<em>Styled charts</em>](#styled-charts)
      * [<em>Table of contents</em>](#table-of-contents)
      * [<em>Description</em>](#description)
      * [<em>How to use</em>](#how-to-use)
      * [<em>Example</em>](#example)
      * [<em>Contribution</em>](#contribution)

<!-- Added by: runner, at: Sat Feb 13 16:30:31 UTC 2021 -->

<!--te-->

## _Description_

Charts is a serverless dynamically function that generates styled graph images based on SVG (Scalable Vector Graphics).
For the tech stack, _**Styled Charts**_ using Typescript and serverless function from Vercel as this project had been deployed on Vercel stack.

## _How to use_

It's simple, you can copy paste this markdown content, like this one:

```
![Styled Charts](https://styled-charts.alexrogalskiy.vercel.app/api?category=[category])
```

There are several options you can use from the list:

|  Options  | Description               |   Type                           | Example                | Query Params          | 
| --------- | ------------------------- | -------------------------------- | ---------------------- | --------------------- |
| Url       | Json data source url      | String url in json data format   | https://host/data.json | ```?url=[value]```    |
| Width     | Chart graph image width   | Numeric image width              | 400                    | ```&width=[value]```  |
| Height    | Chart graph image height  | Numeric image height             | 400                    | ```&height=[value]``` |

## _Example_

This is example of using _**Styled Charts**_:

```
![Styled Charts](https://styled-charts.vercel.app/api?url=https://raw.githubusercontent.com/plotly/plotly.js/master/test/image/mocks/0.json&width=400&height=400)
```

Result:

![Styled Charts](https://styled-charts.vercel.app/api?url=https://raw.githubusercontent.com/plotly/plotly.js/master/test/image/mocks/0.json&width=400&height=400)

## _Contribution_

Want to make this project better? You can contribute this project, I am very open if there are contributions to this project.

---

![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)

Powered by Typescript and Vercel. Code licensed under GPL-3.0 license.
