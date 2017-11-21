import React from 'react'
import { shape, string, node } from 'prop-types'
import { withRouter, Redirect } from 'react-router'

const Normalize = ({ location: { pathname = '' }, children }) =>
  /.*\/{2,}.*/.test(pathname)
    ? <Redirect to={pathname.replace(/\/{2,}/g, '/')} />
    : children

Normalize.propTypes = {
  location: shape({
    pathname: string.isRequired
  }).isRequired,
  children: node.isRequired
}

export default withRouter(Normalize)
