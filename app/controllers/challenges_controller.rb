class ChallengesController < ApplicationController
include ApplicationHelper

  before_filter :authorized?
  def show
    @first_challenge = Challenge.first
    @last_challenge = Challenge.all[-1]
    @challenge = Challenge.find(params[:id])
    @game = Game.find_by(challenge: @challenge, user: User.first)
  end
end
