/* eslint-disable react/prop-types */

import * as React from 'react'
import { withRouter, Redirect } from 'react-router'
import normalize from 'path-normalize'

const handleTraversal = (path) =>
  path
    .split('/')
    .filter((s) => !/^\.{2,}$/.test(s))
    .join('/')

const Normalize = ({ location: { pathname = '' }, children }) => {
  const normalized = normalize(handleTraversal(pathname))
  return normalized === pathname ? children : <Redirect to={normalized} />
}

export default withRouter(Normalize)
