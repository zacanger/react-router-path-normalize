import React from 'react'
import { shape, string, node } from 'prop-types'
import { withRouter } from 'react-router'

const PathnameFixer = (props) => {
  const { location, children, ...rest } = props
  const { pathname = '' } = location
  const p = /.*\/{2,}.*/.test(pathname)
    ? pathname.replace(/\/{2,}/g, '/')
    : pathname
  const newLocation = { ...location, pathname: p }
  return React.cloneElement(children, { ...rest, location: newLocation })
}

PathnameFixer.propTypes = {
  location: shape({
    pathname: string.isRequired
  }).isRequired,
  children: node.isRequired
}

export default withRouter(PathnameFixer)
