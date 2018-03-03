// @flow

import * as React from 'react'
import { withRouter, Redirect } from 'react-router'
import normalize from 'path-normalize'

type NormalizeProps = {
  location: { pathname: string },
  children: React.Node
}

const Normalize = ({
  location: { pathname = '' },
  children
}: NormalizeProps): React.Node => {
  const normalized = normalize(pathname)
  return normalized === pathname
    ? children
    : <Redirect to={normalized} />
}

export default withRouter(Normalize)
