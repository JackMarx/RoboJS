class GamesController  < ApplicationController
  include ApplicationHelper

  before_filter :authorized?

  def create
    unless game_params["challenge_id"].empty?
      @game = Game.find_by(user_id: current_user.id, challenge_id: game_params["challenge_id"])
    else
      @game = Game.create(game_params)
      @game.update_attributes(user_id: current_user.id, challenge_id: params[:challenge_id])
    end

    @challenge = Challenge.find(@game.challenge_id)
    redirect_to challenge_path(@challenge)
  end

  def update
    @user_input = params[:status_string]
    @challenge = Challenge.find(params[:challenge_id])
    @game = Game.find_by(user: current_user, challenge: @challenge)
    @game.update_attributes(status_string: @user_input, instructions: params[:instructions])

    challenge_solution = "challenge#{@challenge.id}"

    if Challenge.solutions[challenge_solution.to_sym] == params[:instructions]  # updated logic
      @game.update_attribute(:completed, true)
      @success_message = "Great! Try the next challenge."
    else
      @failure_message = "Oops! That wasn't quite right. Try again."
    end

    render partial: "challenges/console", locals: { game: @game, challenge: @challenge, success_message: @success_message, failure_message: @failure_message }

  end

  private

  def game_params
    params.require(:game).permit!
  end
end
