class UsersController < ApplicationController
  include ApplicationHelper
  before_filter :authorized?, only: [:show]

  def show
    @user       = current_user
    @games      = @user.games
    @badges     = @user.badges
    @challenges = Challenge.all
    @current_challenges = Challenge.current_challenges(@user)
  end

  def create
    @user = User.create(user_params)

    if @user.errors.any?
      @new_user_errors = @user.errors.messages
      p @new_user_errors
      render 'sessions/new'
    else 
      
      session[:user_id] = @user.id
      redirect_to profile_path(@user)
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
