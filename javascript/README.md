# @trailervote/fixtures
[![Build Status](https://travis-ci.com/TrailerVote/trailervote-fixtures.svg?branch=master)](https://travis-ci.com/TrailerVote/trailervote-fixtures)
[![npm version](https://badge.fury.io/js/%40trailervote%2Ffixtures.svg)](https://badge.fury.io/js/%40trailervote%2Ffixtures)

## Installation

Using your favourite package manager:

```bash
yarn add @trailer_vote/fixtures
```

## Usage

```javascript
import fixturePath from '@trailer_vote/fixtures'
import fs from 'fs'
const errorsJson = JSON.parse(fs.readFileSync(fixturePath('application/vnd.trailervote.errors.v1+json')))
// => { "errors" => [...] }
```
## Contributing

Bug reports and pull requests are welcome on GitHub at [TrailerVote/trailervote-fixtures](https://github.com/TrailerVote/trailervote-fixtures).
