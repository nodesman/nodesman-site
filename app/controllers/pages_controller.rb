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

  def contact_post
    values = params.require(:contact_form_entry).permit(:name, :email, :subject, :message)
    values[:ip_address] = request.remote_ip
    contact = ContactFormEntry.create(values)
    redirect_to contact_form_filled_url
  end

  def contact_form_filled
  end

  def contact

  end

  def portfolio
  end
end
