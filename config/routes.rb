Rails.application.routes.draw do
  resources :pages

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'pages#home'
  get '/articles', :controller => "pages", :action => "articles", :as => "articles_home"
  get '/article/:slug', :controller => "articles", :action => "default", :as => "article"
  get '/portfolio', :controller => "pages", :action => "portfolio", :as => "portfolio"
  get '/angularfeed', :controller => "pages", :action => "angular_feed", :as => "angular_feed"
  get '/wp', :controller => "pages", :action => "wpr", :as => "wpr"
  get '/contact', :controller => "pages", :action => "contact", :as => "contact"
  get '/snippets', :controller => "pages", :action => "snippets"
  get '/snippet/:slug', :controller => "pages", :action => "snippet", :as => "snippet"

  post '/contact', :controller => "pages", :action => "contact_post"

  get '/contact_done', :controller => "pages", :action => "contact_form_filled", :as => "contact_form_filled"
  get '404', :to => "pages#not_found"

  if Rails.env.development?
    get 'nestea' => 'admin#home', :as => "admin_home"
    get 'admin/pages' => 'admin#pages', :as => "pages_management"
    get 'admin/pages/add' => 'admin#add_page', :as => "add_page"
    get 'admin/pages/edit/:id' => 'admin#edit_page'
    get 'admin/contact_entries' => 'admin#contact_entries'
    get 'admin/contact_entry/:id' => 'admin#contact_info'
    post 'admin/pages/add' => 'admin#add_page_post'
    post 'admin/pages/edit/:id' => 'admin#edit_page_post'
    delete 'admin/pages' => 'admin#delete_post'
  end

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
