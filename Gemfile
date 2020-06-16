source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
# gem "jekyll", "~> 3.8.5"

# Specify your gem's dependencies in jemoji-plus.gemspec
gemspec

gem "github-pages", group: :jekyll_plugins

gem "jekyll-tagging", "~> 1.0"
# gem 'html-pipeline-plus', "~> 2.10.7"
gem "jemoji-plus", "~> 0.1.13"

# If you have any plugins, put them here!
# group :jekyll_plugins do
  # gem "github-pages-health-check"
  # gem "jekyll-feed", "~> 0.9.2"
  # gem "jekyll-paginate", "~> 1.1"
  # gem "jekyll-sitemap", "~> 1.0"
  # gem "jemoji", "~> 0.8"
  # gem "jekyll-watch", "~> 2.0"
  # gem "jekyll-default-layout"
  # gem "jekyll-archives", "~> 2.0"
  # gem "jekyll-tagging", "~> 1.0"
  # gem "jekyll-target-blank", "~> 1.1"
# end

##
## See: https://stackoverflow.com/questions/8420414/how-to-add-mac-specific-gems-to-bundle-on-mac-but-not-on-linux
##
install_if -> { RUBY_PLATFORM =~ /linux|darwin|ruby|rbx|mri/ } do
  gem "tzinfo-data"
end

install_if -> { RUBY_PLATFORM =~ /mingw|mswin|jruby|win32/ } do
  # Windows does not include zoneinfo files, so bundle the tzinfo-data gem
  gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby] if Gem.win_platform?
  # Performance-booster for watching directories on Windows
  gem "wdm", "~> 0.1.0" if Gem.win_platform?
end
