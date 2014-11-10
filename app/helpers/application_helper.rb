module ApplicationHelper
  def authorized?
    if current_user.nil?
      redirect_to login_path
    end
  end

  def current_user
    User.find(session[:user_id]) if session[:user_id]
  end

  def ping_pusher
    Pusher.trigger('robot_channel', 'stop', {:some => 'data'})
  end
end

