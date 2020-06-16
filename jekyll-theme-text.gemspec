# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-text"
  spec.version       = "2.2.5"
  spec.authors       = ["shines77"]
  spec.email         = ["gz_shines@msn.com"]

  spec.summary       = %q{A super customizable Jekyll theme for personal site, team site, blog, project, documentation, etc.}
  spec.homepage      = "https://github.com/shines77/jekyll-theme-text"
  spec.license       = "MIT"

  spec.metadata["plugin_type"] = "theme"

  spec.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^((_data|_includes|_layouts|_sass|assets)/|(LICENSE|README|CHANGELOG)((\.(txt|md|markdown)|$)))}i)
  end

  spec.add_runtime_dependency "jekyll", "~> 3.5"
  spec.add_runtime_dependency "jekyll-avatar", "~> 0.6"
  spec.add_runtime_dependency "jekyll-sass-converter", "~> 1.5.2"
  spec.add_runtime_dependency "jekyll-github-metadata", "~> 2.12"
  spec.add_runtime_dependency "jekyll-optional-front-matter", "~> 0.3"
  spec.add_runtime_dependency "jekyll-gist", "~> 1.5.0"
  spec.add_runtime_dependency "github-pages", "~> 200"
  spec.add_runtime_dependency "github-pages-health-check", "~> 1.16"
  spec.add_runtime_dependency "jekyll-default-layout", "~> 0.1.4"
  spec.add_runtime_dependency "jekyll-archives", "~> 2.0"
  spec.add_runtime_dependency "jekyll-tagging", "~> 1.0"
  spec.add_runtime_dependency "jekyll-watch", "~> 2.0"
  spec.add_runtime_dependency "jekyll-mentions", "~> 1.4.1"
  spec.add_runtime_dependency "jekyll-paginate", "~> 1.1.0"
  spec.add_runtime_dependency "jekyll-readme-index", "~> 0.2"
  spec.add_runtime_dependency "jekyll-redirect-from", "~> 0.14.0"
  spec.add_runtime_dependency "jekyll-relative-links", "~> 0.6"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.0"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.11"
  spec.add_runtime_dependency "gemoji", "~> 3.0"
  # spec.add_runtime_dependency "html-pipeline-plus", "~> 2.10.7"
  # spec.add_runtime_dependency "jemoji", "~> 0.8"
  spec.add_runtime_dependency "jemoji-plus", "~> 0.1.13"
  # spec.add_runtime_dependency "jekyll-target-blank", "~> 1.1"
  spec.add_runtime_dependency "tzinfo", "~> 1.1"
  spec.add_runtime_dependency "tzinfo-data", "~> 1.0"
  spec.add_runtime_dependency "wdm", "~> 0.1"

  spec.add_development_dependency "bundler", "~> 2.0"
  spec.add_development_dependency "rake", "~> 12.3.3"
  spec.add_development_dependency "rspec", "~> 3.0"
end
