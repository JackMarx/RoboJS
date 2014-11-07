class SessionsController < ApplicationController
include ApplicationHelper
  def index

  end

  def login
    @user = User.new
  end

  def create
    @user = User.find_by(username: params[:username])
    if @user && @user.password == params[:password]
      session[:user_id] = @user.id
      redirect_to user_path(@user)
    else
      @error = "That wasn't quite right"
    end
  end

  def log_out
    session[:user_id] = nil
    redirect_to root_path
  end
end
