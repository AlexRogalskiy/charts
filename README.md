<div align="center">
<h1>Styled charts</h1>

<p>Get your styled charts dynamically 😎</p>

![type definitions](https://img.shields.io/npm/types/typescript?style=flat-square)
![code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://raw.githubusercontent.com/alexrogalskiy/charts/master/LICENSE?token=AH44ZFH7IF2KSEDK7LSIW3C7YOFYC)
[![Issue](https://img.shields.io/github/issues/alexrogalskiy/charts)](https://img.shields.io/github/issues/alexrogalskiy/charts)
[![Forks](https://img.shields.io/github/forks/alexrogalskiy/charts)](https://img.shields.io/github/forks/alexrogalskiy/charts)
[![Stars](https://img.shields.io/github/stars/alexrogalskiy/charts)](https://img.shields.io/github/stars/alexrogalskiy/charts)

</div>

# Description

A few months ago, Github launched a new feature call Magic Readme which is that file readme will be appear in your github profile and you can set your skills, portfolio, etc in that file readme.

Charts is a serverless dynamically functions that generate styled images based on SVG (Scalable Vector Graphics).
For the tech stack, _**Styled Charts**_ using Typescript and serverless function from Vercel and also this project had been deployed on Vercel.

# How to use this?

It's simple, you can copy paste this markdown content, like this one:

```
![Styled Charts](https://styled-charts.alexrogalskiy.vercel.app/api?category=[category])
```

There are several options you can use, and the options is:

|  Options  | Description               |   Type                           | Example                | Query Params          | 
| --------- | ------------------------- | -------------------------------- | ---------------------- | --------------------- |
| Url       | Json data source url      | String url in json data format   | https://host/data.json | ```?url=[value]```    |
| Width     | Chart graph image width   | Numeric image width              | 400                    | ```&width=[value]```  |
| Height    | Chart graph image height  | Numeric image height             | 400                    | ```&height=[value]``` |

# Example

This is example of using *Styled Charts*:

Markdown content: 

```
![Styled Charts](https://styled-charts.vercel.app/api?url=https://raw.githubusercontent.com/plotly/plotly.js/master/test/image/mocks/0.json&width=400&height=400)
```

Result:

![Styled Charts](https://styled-charts.vercel.app/api?url=https://raw.githubusercontent.com/plotly/plotly.js/master/test/image/mocks/0.json&width=400&height=400)

# Contribution

Want to make this project better? You can contribute this project, I am very open if there are contributions to this project.

---

![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)

Powered by Typescript and Vercel. Code licensed under MIT License.
