class ChallengesController < ApplicationController
include ApplicationHelper
  def show
    @challenge = Challenge.find(params[:id])
    @game = Game.find_by(challenge: @challenge, user: User.first)
  end
end
