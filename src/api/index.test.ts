jest.unmock('../api')

import * as api from '../api'

const fetchProjects = jest.fn(
  () => new Promise((resolve, reject) => resolve({ data: 'foo' }))
)
