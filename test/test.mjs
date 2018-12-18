import fixtures from '../lib/trailer_vote/fixtures/main.mjs'
import fs from 'fs'
const errorsJson = JSON.parse(fs.readFileSync(fixtures("application/vnd.trailervote.errors.v1+json")).toString())
const expectedJson = {
  "errors": [
    {
      "message": "Product lookup did not return a product",
      "code": "Gxf413eb482deef440f00469efc6caaf46"
    }
  ]
}

if ('errors' in errorsJson) {
  if (errorsJson.errors.length > 0) {
    if (errorsJson.errors[0].message === expectedJson.errors[0].message) {
      process.exit(0)
    }
  }
}

console.error(`Expected ${expectedJson}, actual ${errorsJson}`)
process.exit(1)
