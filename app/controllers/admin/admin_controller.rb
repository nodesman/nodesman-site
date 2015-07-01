class AdminController < AdminPageController
  attr_writer :title, :content, :page_type, :content_type, :url_slug
  def home
    render 'admin-home'
  end

  def edit_page_post
    new_page_data = edit_post_params
    Page.update params[:id], new_page_data
    redirect_to "/admin/pages"
  end

  def edit_post_params
    params.require(:page).permit(:title, :content, :content_type, :url_slug)
  end

  def edit_page
    load_page_select_options
    id = params[:id]
    @page = Page.find(id)
    puts @page.inspect
  end

  def add_page_post
    new_page = Page.create(new_post_params)
    redirect_to '/admin/pages'
  end

  def new_post_params
    data = params.require(:page).permit(:title, :content, :page_type, :content_type, :url_slug)
    data[:url_slug] = data[:url_slug].parameterize
    data
  end

  def delete_post
    id = params[:page][:id]
    Page.delete(id);
    redirect_to '/admin/pages'
  end

  def contact_info

  end

  def contact_entries
    @contact_entries = ContactFormEntry.all()
  end

  def pages
    @pages = Page.all()
  end

  def add_page
    load_page_select_options
  end

  def load_page_select_options
    @page_types = Page.page_types.invert
    @content_types = Page.content_types.invert
  end
end
