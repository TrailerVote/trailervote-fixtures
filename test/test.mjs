import assert from 'assert'
import fs from 'fs'
import { createRequire } from 'module'

import fixturePath from '@trailervote/fixtures'

const require = createRequire(import.meta.url)

assert.strictEqual(typeof fixturePath, 'function')

const errorsPath = fixturePath('application/vnd.trailervote.errors.v1+json')
const errorsJson = JSON.parse(fs.readFileSync(errorsPath).toString())

assert.strictEqual(
  errorsJson.errors[0].message,
  'Product lookup did not return a product'
)

// the module and commonjs entry points must resolve to the same file
assert.strictEqual(
  errorsPath,
  require('@trailervote/fixtures')('application/vnd.trailervote.errors.v1+json')
)
