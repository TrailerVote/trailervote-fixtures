require 'trailer_vote/fixtures/version'
require 'oj'

module TrailerVote
  module Fixtures
    FIXTURE_DIRECTORY = File.expand_path(File.join(__dir__, 'fixtures')).freeze

    module_function

    def load(media_type, options = Oj.default_options)
      path = File.join(FIXTURE_DIRECTORY, *media_type.split('/'))
      Oj.load_file(path, options)
    end
  end
end
