class ArticlesController < ApplicationController
  layout "articles"
  def default
    @article = Article.find_by(:url_slug => params[:slug])
    if @article.nil?
      redirect_to "404"
    end
  end
end