const assert = require('assert')
const fs = require('fs')
const path = require('path')

const fixturePath = require('../lib/trailer_vote/fixtures/index.js')

assert.strictEqual(typeof fixturePath, 'function')
assert.strictEqual(typeof fixturePath.default, 'function')

const errorsPath = fixturePath('application/vnd.trailervote.errors.v1+json')

assert.strictEqual(
  errorsPath,
  path.join(
    __dirname,
    '..',
    'lib',
    'trailer_vote',
    'fixtures',
    'application',
    'vnd.trailervote.errors.v1+json'
  )
)
assert.ok(fs.existsSync(errorsPath), `expected ${errorsPath} to exist`)

const errorsJson = JSON.parse(fs.readFileSync(errorsPath).toString())

assert.strictEqual(
  errorsJson.errors[0].message,
  'Product lookup did not return a product'
)

// consumers require the package by name, which goes through the exports map
assert.strictEqual(require('@trailervote/fixtures'), fixturePath)
assert.ok(require.resolve('@trailervote/fixtures/package.json'))
