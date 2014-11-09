class ChallengesController < ApplicationController
include ApplicationHelper

  before_filter :authorized?
  def show
    @challenge = Challenge.find(params[:id])

    if @challenge != Challenge.all[-1]
      @next_challenge = Challenge.find(@challenge.id + 1)
    end

    if @challenge != Challenge.first
      @previous_challenge = Challenge.find(@challenge.id - 1)
    end

    @game = Game.find_by(challenge: @challenge, user: current_user)
  end
end
