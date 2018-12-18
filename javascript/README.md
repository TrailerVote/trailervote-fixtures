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
import '@trailer_vote/fixtures'
TrailerVote::Fixtures.load('application/vnd.trailervote.errors.v1+json')
# => { "errors" => [...] }
```

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `rake test` to run the tests. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at [TrailerVote/trailervote-fixtures](https://github.com/TrailerVote/trailervote-fixtures).
