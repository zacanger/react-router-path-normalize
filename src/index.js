// @flow

import * as React from 'react'
import { withRouter, Redirect } from 'react-router'
import normalize from 'path-normalize'

type NormalizeProps = {
  location: { pathname: string },
  children: React.Node
}

const handleTraversal = (path: string): string =>
  path
    .split('/')
    .filter((s: string): bool => !/^\.{2,}$/.test(s))
    .join('/')

const Normalize = ({
  location: { pathname = '' },
  children
}: NormalizeProps): React.Node => {
  const normalized = normalize(handleTraversal(pathname))
  return normalized === pathname
    ? children
    : <Redirect to={normalized} />
}

export default withRouter(Normalize)
