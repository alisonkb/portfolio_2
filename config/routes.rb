Rails.application.routes.draw do


  # get 'work/index'

  resources :info, only: [:index]
  resources :home, only: [:index], :path => "/"
  resources :projects, only: [:index, :show]
  resources :media, only: [:index]
  resources :work, only: [:index]



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
