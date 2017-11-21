# react-router-path-normalize

Normalize paths for React Router.

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

## License

[MIT](./LICENSE.md)
