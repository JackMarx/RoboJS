module ApplicationHelper
  def authorized?
    if current_user.nil?
      redirect_to login_path
    end
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
end
