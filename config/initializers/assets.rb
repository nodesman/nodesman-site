# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
Rails.application.config.assets.precompile += %w( lib/epiceditor/base/epiceditor.css lib/epiceditor/preview/github.css lib/epiceditor/editor/epic-light.css search.js contact.css style.css articles.css portfolio.css snippet.css admin.css *.eot *.woff *.ttf *.svg *.woff2 *.html )
