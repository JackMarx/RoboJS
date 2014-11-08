class SessionsController < ApplicationController
  include ApplicationHelper

  def index
    render "sessions/index", layout: false
  end

  def login
    @user = User.new
  end

  def create
    @user = User.authenticate(session_params)

    if @user 
      session[:user_id] = @user.id
      redirect_to profile_path(@user)
    else
      @user = User.new
      @error = "That wasn't quite right"
      render "sessions/new"
    end

  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end

  private

  def session_params
    params.require(:session).permit!
  end
end
