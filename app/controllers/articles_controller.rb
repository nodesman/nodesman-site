class ArticlesController < ApplicationController
  layout "articles"
  def default
    @article = Page.find_by :page_type => :article, :url_slug => params[:slug]
    if @article.nil?
      redirect_to "/not-found"
    end
  end
end
