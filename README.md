<div align="center">
<h1>Styled charts</h1>

<p>Get your styled charts dynamically 😎</p>

![type definitions](https://img.shields.io/npm/types/typescript?style=flat-square)
![code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://raw.githubusercontent.com/alexrogalskiy/styled-charts/master/LICENSE?token=AH44ZFH7IF2KSEDK7LSIW3C7YOFYC)
[![Issue](https://img.shields.io/github/issues/alexrogalskiy/styled-charts)](https://img.shields.io/github/issues/alexrogalskiy/styled-charts)
[![Forks](https://img.shields.io/github/forks/alexrogalskiy/styled-charts)](https://img.shields.io/github/forks/alexrogalskiy/styled-charts)
[![Stars](https://img.shields.io/github/stars/alexrogalskiy/styled-charts)](https://img.shields.io/github/stars/alexrogalskiy/styled-charts)

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

|  Options  | Description |   Type     | Example | Query Params | 
|---------- | ---------- | ------- | ----------- | ------------ |
| Background Color | Background color for the quote name | Hex color code | %23ffffff | ```?backgroundColor=[value]``` |
| Icon Color | Colorize the icons in quote name | Hex color code | %23e64a19 | ```?iconColor=[value]``` |
| Font Color | Font color for the quote name | Hex color code | %23000000 | ```?fontColor=[value]``` |
| Site | If you have a site, you can fill this one | String | https://alexrogalskiy.tech | ```?site=[value]``` |
| Pattern | You can use a pattern for the background. You can see the list below | String | plus | ```?pattern=[value]``` |
| Color Pattern | Fill the color pattern | Hex color code | %231abc9c | ```?colorPattern=[value]``` |
| Opacity Pattern | Opacity of the pattern background | Float | 0 - 1 | ```?opacity=[value]``` |

# Example
This is example of using *Styled Charts*:

Markdown content: 

```
![Styled Charts](https://styled-charts.vercel.app/api?category=general&backgroundColor=%23FFFFFF&pattern=topography&opacity=0.3&colorPattern=%23FFE0E9&fontColor=%230A83DC)
```

Result:

![Styled Charts](https://styled-charts.vercel.app/api?category=general&backgroundColor=%23FFFFFF&pattern=topography&opacity=0.3&colorPattern=%23FFE0E9&fontColor=%230A83DC)

# Contribution
Want to make this project better? You can contribute this project, I am very open if there are contributions to this project.

---
![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)

Powered by Typescript and Vercel. Code licensed under MIT License.
