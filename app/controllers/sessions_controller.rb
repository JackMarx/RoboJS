class SessionsController < ApplicationController

  def index
    render "sessions/index", layout: false
  end

  def login
    @user = User.new
  end

  def create
    @user = User.find_by(username: params[:username])
    if @user && @user.password == params[:password]
      session[:user_id] = @user.id
      redirect_to profile_path(@user)
    else
      @error = "That wasn't quite right"
    end
  end

  def log_out
    session[:user_id] = nil
    redirect_to root_path
  end
end
