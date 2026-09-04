# @trailervote/fixtures
[![Build Status](https://travis-ci.com/TrailerVote/trailervote-fixtures.svg?branch=master)](https://travis-ci.com/TrailerVote/trailervote-fixtures)
[![npm version](https://badge.fury.io/js/%40trailervote%2Ffixtures.svg)](https://badge.fury.io/js/%40trailervote%2Ffixtures)

## Installation

Using your favourite package manager:

```bash
yarn add @trailervote/fixtures
```

## Usage

```javascript
import fixturePath from '@trailervote/fixtures'
import fs from 'fs'
const errorsJson = JSON.parse(fs.readFileSync(fixturePath('application/vnd.trailervote.errors.v1+json')))
// => { "errors" => [...] }
```

Or, from CommonJS:

```javascript
const fixturePath = require('@trailervote/fixtures')
const fs = require('fs')
const errorsJson = JSON.parse(fs.readFileSync(fixturePath('application/vnd.trailervote.errors.v1+json')))
// => { "errors" => [...] }
```
## Contributing

Bug reports and pull requests are welcome on GitHub at [TrailerVote/trailervote-fixtures](https://github.com/TrailerVote/trailervote-fixtures).
