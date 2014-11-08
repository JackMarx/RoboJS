class GamesController  < ApplicationController
  include ApplicationHelper
  def create

    if current_user.games.pluck(:challenge_id).include?(game_params[:challenge_id])
      @game = Game.find_by(user_id: current_user.id, challenge_id: game_params[:challenge_id])
    else
      @game = Game.new(game_params)
      @game.save
      @game.update_attributes(user_id: current_user.id, challenge_id: params[:challenge_id])
      @game.save
    end
    @challenge = Challenge.find(@game.challenge_id)

    redirect_to challenge_path(@challenge)
  end

  def update
    @user_input = params[:status_string]
    
    @challenge = Challenge.find(params[:challenge_id])
    @game = Game.find_by(user: current_user, challenge: @challenge)
    @game.update_attributes(status_string: @user_input, instructions: params[:instructions])
    
    if @user_input == @challenge.solution
      @game.update_attribute(completed: true)
    end

    render "challenges/show"
  end

  private

  def game_params
    params.require(:game).permit!
  end
end
