require "test_helper"

class TrailerVote::FixturesTest < Minitest::Test
  def test_that_it_has_a_version_number
    refute_nil ::TrailerVote::Fixtures::VERSION
  end

  def test_it_does_something_useful
    assert ::TrailerVote::Fixtures.load(
      'application/vnd.trailervote.errors.v1+json'
    )
  end
end
