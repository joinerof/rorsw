json.extract! login, :id, :username, :email, :created_at, :updated_at
json.url login_url(login, format: :json)
