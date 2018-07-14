import { Options } from '@typed/test'

const node: Options = {
  mode: 'node',
  files: ['source/**/*.test.ts']
}

const browser: Options = {
  mode: 'browser',
  files: ['source/**/*.browser-test.ts']
}

export default [node, browser]
