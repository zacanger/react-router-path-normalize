/* eslint-disable react/jsx-no-bind */

import React from 'react'
import { Route } from 'react-router'
import { MemoryRouter } from 'react-router-dom'
import test from 'tape'
import Normalize from '.'
import renderer from 'react-test-renderer'

test('Normalize', (t) => {
  let n = renderer.create(
    <MemoryRouter><Normalize><Route path="/" component={() => 'hello'} /></Normalize></MemoryRouter>
  ).toJSON()
  t.equal(n, 'hello', 'renders')

  n = renderer.create(
    <MemoryRouter initialEntries={[ '/foo//bar' ]}>
      <Normalize>
        <div>
          <Route component={() => null} />
          <Route exact path="/foo/bar" component={() => 'matched'} />
        </div>
      </Normalize>
    </MemoryRouter>
  ).toJSON()
  t.deepEqual(n.children, [ 'matched' ], 'matches with normal path')

  n = renderer.create(
    <MemoryRouter initialEntries={[ '///foo//bar//' ]}>
      <Normalize>
        <div>
          <Route component={() => null} />
          <Route exact path="/foo/bar" component={() => 'matched'} />
        </div>
      </Normalize>
    </MemoryRouter>
  ).toJSON()
  t.deepEqual(n.children, [ 'matched' ], 'matches even with extra slashes in path')

  t.end()
})
