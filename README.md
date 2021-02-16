# _Styled charts_

![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/AlexRogalskiy/charts)
![GitHub Release Date](https://img.shields.io/github/release-date/AlexRogalskiy/charts)
![Lines of code](https://tokei.rs/b1/github/AlexRogalskiy/charts?category=lines)
![GitHub closed issues](https://img.shields.io/github/issues-closed/AlexRogalskiy/charts)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/AlexRogalskiy/charts)
![GitHub repo size](https://img.shields.io/github/repo-size/AlexRogalskiy/charts)
![GitHub last commit](https://img.shields.io/github/last-commit/AlexRogalskiy/charts)
![GitHub](https://img.shields.io/github/license/AlexRogalskiy/charts)
![GitHub language count](https://img.shields.io/github/languages/count/AlexRogalskiy/charts)
![GitHub search hit counter](https://img.shields.io/github/search/AlexRogalskiy/charts/goto)
![GitHub Repository branches](https://badgen.net/github/branches/AlexRogalskiy/charts)
![GitHub Repository dependents](https://badgen.net/github/dependents-repo/AlexRogalskiy/charts)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://raw.githubusercontent.com/alexrogalskiy/charts/master/LICENSE?token=AH44ZFH7IF2KSEDK7LSIW3C7YOFYC)
[![Issue](https://img.shields.io/github/issues/alexrogalskiy/charts)](https://img.shields.io/github/issues/alexrogalskiy/charts)
[![Forks](https://img.shields.io/github/forks/alexrogalskiy/charts)](https://img.shields.io/github/forks/alexrogalskiy/charts)
[![Stars](https://img.shields.io/github/stars/alexrogalskiy/charts)](https://img.shields.io/github/stars/alexrogalskiy/charts)
![code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)
[![Maintainability](https://api.codeclimate.com/v1/badges/ed7702f8cf28917829fa/maintainability)](https://codeclimate.com/github/AlexRogalskiy/charts/maintainability)

[![Dependabot](https://img.shields.io/badge/dependabot-enabled-1f8ceb.svg?style=flat-square)](https://dependabot.com/)
[![NewReleases](https://newreleases.io/badge.svg)](https://newreleases.io/github/AlexRogalskiy/charts)
[![Hits-of-Code](https://hitsofcode.com/github/AlexRogalskiy/charts)](https://hitsofcode.com/github/AlexRogalskiy/charts/view)
[![ComVer](https://img.shields.io/badge/ComVer-compliant-brightgreen.svg)][tags]

## _Table of contents_

<!--ts-->
   * [<em>Styled charts</em>](#styled-charts)
      * [<em>Table of contents</em>](#table-of-contents)
      * [<em>Description</em>](#description)
      * [<em>How to use</em>](#how-to-use)
      * [<em>Example</em>](#example)
      * [<em>Visitor stats</em>](#visitor-stats)
      * [<em>Licensing</em>](#licensing)
      * [<em>Authors</em>](#authors)
      * [<em>Versioning</em>](#versioning)
      * [<em>Contribution</em>](#contribution)
      * [<em>Acknowledgement</em>](#acknowledgement)
      * [<em>Development Support</em>](#development-support)
<!--te-->

## _Description_

<p align="center" style="text-align:center;">
    <a href="https://www.typescriptlang.org/">
        <img src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&logo=typescript&logoColor=white" alt="TypeScript" />
    </a>
    <a href="https://www.repostatus.org/#active">
        <img src="https://img.shields.io/badge/Project%20Status-Active-brightgreen" alt="Project Status: Active – The project has reached a stable, usable state and is being actively developed." />
    </a>
    <a href="https://badges.pufler.dev">
        <img src="https://badges.pufler.dev/created/AlexRogalskiy/charts" alt="Project created status" />
    </a>
    <a href="https://badges.pufler.dev">
        <img src="https://badges.pufler.dev/updated/AlexRogalskiy/charts" alt="Project updated status" />
    </a>
</p>

_**Styled Charts**_ is a serverless function that generates dynamically styled graph images based on SVG (Scalable Vector Graphics).
For the tech stack, _**Styled Charts**_ using Typescript and serverless function from Vercel as this project had been deployed on Vercel stack.

## _How to use_

It's simple, you can copy paste this markdown content, like this one:

```
![Styled Charts](https://styled-charts.alexrogalskiy.vercel.app/api?url=[url]&width=[width]&height=[height])
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

## _Visitor stats_

[![GitHub page hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FAlexRogalskiy%2Fcharts&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=true)](https://hits.seeyoufarm.com)

![GitHub stars](https://img.shields.io/github/stars/AlexRogalskiy/charts?style=social)
![GitHub forks](https://img.shields.io/github/forks/AlexRogalskiy/charts?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/AlexRogalskiy/charts?style=social)

## _Licensing_

_**Styled Charts**_ is distributed under LGPL version 3 or later, [[License](https://github.com/AlexRogalskiy/charts/blob/master/LICENSE)].
LGPLv3 is additional permissions on top of GPLv3.

![license](https://user-images.githubusercontent.com/19885116/48661948-6cf97e80-ea7a-11e8-97e7-b45332a13e49.png)

## _Authors_

_**Styled Charts**_ is maintained by the following GitHub team-members:

* [![Author](https://img.shields.io/badge/author-AlexRogalskiy-FB8F0A)](https://github.com/AlexRogalskiy)

with community support please contact with us if you have some question or proposition.

## _Versioning_

The project uses [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository][tags].

## _Contribution_

[![Contributors Display](https://badges.pufler.dev/contributors/AlexRogalskiy/charts?size=50&padding=5&bots=true)](https://badges.pufler.dev)

Please read [CONTRIBUTING.md](https://github.com/AlexRogalskiy/charts/blob/master/.github/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
![Github contributors](https://img.shields.io/github/all-contributors/AlexRogalskiy/charts)

See also the list of [contributors][contributors] who participated in this project.

## _Acknowledgement_

[![Stargazers repo roster for @AlexRogalskiy/charts](https://reporoster.com/stars/AlexRogalskiy/charts)][stars]

## _Development Support_

Like _**Styled Charts**_ ? Consider buying me a coffee :\)

[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413)](https://www.patreon.com/alexrogalskiy)
[![Buy Me A Coffee](https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=buy%20me%20a%20coffee)](https://www.buymeacoffee.com/AlexRogalskiy)
[![KoFi](https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi)](https://ko-fi.com/alexrogalskiy)

---

[![forthebadge](https://img.shields.io/badge/made%20with-%20typescript-C1282D.svg?logo=typescript&style=for-the-badge)](https://www.typescriptlang.org/)
[![forthebadge](https://img.shields.io/badge/powered%20by-%20vercel-7116FB.svg?logo=vercel&style=for-the-badge)](https://vercel.com/)
[![forthebadge](https://img.shields.io/badge/build%20with-%20%E2%9D%A4-B6FF9B.svg?logo=heart&style=for-the-badge)](https://forthebadge.com/)

  [repo]:           https://github.com/AlexRogalskiy/charts
  [tags]:           https://github.com/AlexRogalskiy/charts/tags
  [issues]:         https://github.com/AlexRogalskiy/charts/issues
  [pulls]:          https://github.com/AlexRogalskiy/charts/pulls
  [wiki]:           https://github.com/AlexRogalskiy/charts/wiki
  [stars]:          https://github.com/AlexRogalskiy/charts/stargazers
  [contributors]:   https://github.com/AlexRogalskiy/charts/graphs/contributors
