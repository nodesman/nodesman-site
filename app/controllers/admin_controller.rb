class AdminController < ApplicationController
  attr_writer :title, :content, :page_type, :content_type, :url_slug
  layout "admin"

  def home
    render 'admin-home'
  end

  def edit_page

  end

  def add_page_post
    new_page = Page.create(new_post_params)
    redirect_to '/admin/pages'
  end

  def new_post_params
    params.require(:page).permit(:title, :content, :page_type, :content_type, :url_slug)
  end

  def contact_info

  end

  def contact_entries

  end

  def pages
    @pages = Page.all()
  end

  def add_page

  end
end
