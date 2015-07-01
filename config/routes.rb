Rails.application.routes.draw do
  root 'pages#home'
  get '/articles', :controller => "pages", :action => "articles", :as => "articles_home"
  get '/article/:slug', :controller => "articles", :action => "default", :as => "article"
  get '/portfolio', :controller => "pages", :action => "portfolio", :as => "portfolio"
  get '/angularfeed', :controller => "pages", :action => "angular_feed", :as => "angular_feed"
  get '/wp', :controller => "pages", :action => "wpr", :as => "wpr"
  get '/contact', :controller => "pages", :action => "contact", :as => "contact"
  get '/snippets', :controller => "snippet", :action => "index", :as => "snippets"
  get '/snippet/:slug', :controller => "pages", :action => "snippet", :as => "snippet"
  post '/contact', :controller => "pages", :action => "contact_post"
  get '/contact_done', :controller => "pages", :action => "contact_form_filled", :as => "contact_form_filled"
  get '404', :to => "pages#not_found"

  if Rails.env.development?
    get '/admin', to: redirect('/admin/article')
    namespace :admin do
      resources :articles, :except => [:show]
      resources :snippets, :except => [:show]
      resources :contact_entries, only: [:index, :show]
    end
    get '/admin' => 'admin#home', :as => "admin_home"
  end
end
