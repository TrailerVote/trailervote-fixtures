
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'trailer_vote/fixtures/version'

Gem::Specification.new do |spec|
  spec.name          = 'trailer_vote-fixtures'
  spec.version       = TrailerVote::Fixtures::VERSION
  spec.authors       = ['Derk-Jan Karrenbeld']
  spec.email         = ['dj@trailervote.com']

  spec.summary       = 'Fixtures for TrailerVote media types, api calls, and so forth'
  spec.homepage      = 'https://github.com/TrailerVote/trailervote-fixtures'

  # Specify which files should be added to the gem when it is released.
  # The `git ls-files -z` loads the files in the RubyGem that have been added into git.
  spec.files         = Dir.chdir(File.expand_path('..', __FILE__)) do
    `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features|package\.json|\.npmignore|npm)/}) }
  end
  spec.bindir        = 'exe'
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ['lib']

  spec.add_development_dependency 'oj', '~> 3.6'

  spec.add_development_dependency 'bundler', '~> 1.16'
  spec.add_development_dependency 'rake', '~> 12.3'
  spec.add_development_dependency 'minitest', '~> 5.11'
  spec.add_development_dependency 'minitest-ci', '~> 3.4'
  spec.add_development_dependency 'minitest-reporters', '~> 1.3'
end
