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
  spec.add_runtime_dependency "jekyll-paginate", "~> 1.1"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.0"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.9.2"
  spec.add_runtime_dependency "html-pipeline-plus", "~> 2.10.7"
  spec.add_runtime_dependency "jemoji", "~> 0.8"
  spec.add_runtime_dependency "jemoji-plus", "~> 0.1.11"
  spec.add_runtime_dependency "jekyll-archives", "~> 2.0"
  spec.add_runtime_dependency "jekyll-tagging", "~> 1.0"
  spec.add_runtime_dependency "jekyll-watch", "~> 2.0"

  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", ">= 12.3.3"
end
