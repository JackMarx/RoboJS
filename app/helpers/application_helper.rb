module ApplicationHelper
  def authenticated?
    current_user != nil
  end

  def current_user
    User.find(session[:id])
  end
end
