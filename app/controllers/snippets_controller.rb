class SnippetsController < ApplicationController
  layout "articles"
  def index
    @snippets = Snippet.order(:created_at).all
  end

  def show
    slug = params[:slug]
    @snippet = Snippet.find_by :slug => slug
  end
end
