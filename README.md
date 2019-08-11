# react-router-path-normalize

Normalize paths for React Router.

[![npm version](https://img.shields.io/npm/v/react-router-path-normalize.svg)](https://npm.im/react-router-path-normalize) [![CircleCI](https://circleci.com/gh/zacanger/react-router-path-normalize/tree/master.svg?style=svg)](https://circleci.com/gh/zacanger/react-router-path-normalize/tree/master) [![codecov](https://codecov.io/gh/zacanger/react-router-path-normalize/branch/master/graph/badge.svg)](https://codecov.io/gh/zacanger/react-router-path-normalize) [![Known Vulnerabilities](https://snyk.io/test/github/zacanger/react-router-path-normalize/badge.svg)](https://snyk.io/test/github/zacanger/react-router-path-normalize) [![Patreon](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://www.patreon.com/zacanger) [![ko-fi](https://img.shields.io/badge/donate-KoFi-yellow.svg)](https://ko-fi.com/U7U2110VB)

--------

## Installation

`npm i react-router-path-normalize`

## Usage

```javascript
import { BrowserRouter } from 'react-router-dom'
import Normalize from 'react-router-path-normalize'
import { render } from 'react-dom'
import routes from './routes'

render(
  <BrowserRouter>
    <Normalize>
      <Routes />
    </Normalize>
  </BrowserRouter>,
  document.getElementById('root')
)
```

Normalize takes exactly one child.

Uses [path-normalize](https://www.npmjs.com/package/path-normalize) under the
hood.

## License

[MIT](./LICENSE.md)
