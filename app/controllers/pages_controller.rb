class PagesController < ApplicationController
  def home
    render 'home'
  end
  def articles
    @articles = Page.where :page_type => :article
    render :layout=> "section"
  end

  def not_found
  end

  def angular_feed
  end

  def wpr

  end

  def portfolio
  end
end
