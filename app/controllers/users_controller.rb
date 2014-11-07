class UsersController < ApplicationController
  include ApplicationHelper
  def show
    @user       = User.first
    @games      = @user.games
    @badges     = @user.badges
    @challenges = Challenge.all
  end
end
