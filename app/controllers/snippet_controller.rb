class SnippetController < ApplicationController
  layout "articles"
  def index
    @snippets = Snippet.order(:created_at).all
  end
end
