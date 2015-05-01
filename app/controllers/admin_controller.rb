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

  def delete_post
    id = params[:page][:id]
    Page.delete(id);
    redirect_to '/admin/pages'
  end

  def contact_info

  end

  def contact_entries

  end

  def pages
    @pages = Page.all()
  end

  def add_page
    @page_types = Page.page_types.invert
    @content_types = Page.content_types.invert
  end
end
