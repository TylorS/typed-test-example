import { describe, it } from '@typed/test'

const withPromise = it('with promise', ({ ok }) => Promise.resolve(true).then(ok))

export const suite = describe('Things', [  
  it('failing', ({ ok }) => ok(false)),
  it('passing', ({ ok }) => ok(true)),
])
