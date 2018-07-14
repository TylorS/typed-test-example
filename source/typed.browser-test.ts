import { it } from '@typed/test'

export const test = it('returns 7', ({ equal }) => equal(7, example()))

export const test2 = it('is false', ({ notOk }) => notOk(false))
export const test3 = it('is false', ({ notOk }) => notOk(false))
export const test4 = it('is true', ({ ok }) => ok(true))

function example() {
  return 7
}
