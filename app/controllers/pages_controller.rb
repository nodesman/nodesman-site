class PagesController < ApplicationController
  def home
    render 'home'
  end

  def admin
    render 'admin-home', :layout => 'admin'
  end
end
