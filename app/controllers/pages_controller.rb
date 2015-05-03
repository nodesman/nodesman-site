class PagesController < ApplicationController
  def home
    render 'home'
  end

  def articles
    @articles = Page.where :page_type => :article
    render :layout=> "section"
  end
end
