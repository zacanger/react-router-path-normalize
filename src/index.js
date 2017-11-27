// @flow

import * as React from 'react'
import { withRouter, Redirect } from 'react-router'

type NormalizeProps = {
  location: {
    pathname: string
  },
  children: React.Node
}

const Normalize = ({ location: { pathname = '' }, children }: NormalizeProps) =>
  /.*\/{2,}.*/.test(pathname)
    ? <Redirect to={pathname.replace(/\/{2,}/g, '/')} />
    : children

export default withRouter(Normalize)
