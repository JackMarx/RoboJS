class ChallengesController < ApplicationController
include ApplicationHelper

  before_filter :authorized?
  def show
    @challenge = Challenge.find(params[:id])
    @game = Game.find_by(challenge: @challenge, user: User.first)
  end
end
