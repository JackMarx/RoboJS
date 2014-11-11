class ChallengesController < ApplicationController
include ApplicationHelper

  before_filter :authorized?
  def show
    @challenge = Challenge.find(params[:id])
    
    

    if @challenge != Challenge.all[-1]
      @next_challenge = Challenge.find(@challenge.id + 1)
      @next_game = current_user.games.find_or_create_by(challenge_id: @challenge.id + 1, user_id: current_user.id ).attributes
    end

    if @challenge != Challenge.first
      @previous_challenge = Challenge.find(@challenge.id - 1)
      @prev_game = current_user.games.find_or_create_by(challenge_id: @challenge.id - 1, user_id: current_user.id ).attributes
    end

    @game = Game.find_by(challenge: @challenge, user: current_user)
  end
end
