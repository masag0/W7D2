Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :todos, only: [:index, :show, :create, :destroy, :update] do
      resources :steps, only: [:create]
    end
    resources :steps, only: [:show, :destroy, :update]
  end

end
