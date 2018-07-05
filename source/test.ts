import { describe, it, given } from '@typed/test'

export const suite = describe('Things', [
  given('a boolean', [
    it('failing', ({ ok }) => ok(false)), 
    it('passing', ({ ok }) => ok(true))
  ]),
  it('with promise', ({ ok }) => Promise.resolve(true).then(ok))
])
