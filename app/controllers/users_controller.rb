class UsersController < ApplicationController
  include ApplicationHelper
  before_filter :authorized?, only: [:show]
  def show
    @user       = User.first
    @games      = @user.games
    @badges     = @user.badges
    @challenges = Challenge.all
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to profile_path(@user)
    end
  end

  private

  def user_params
    params.require(:user).permit!
  end
end
