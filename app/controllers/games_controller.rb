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
    p params
    @user_input = params[:status_string]
    p @user_input
    
    @challenge = Challenge.find(params[:challenge_id])
    @game = Game.find_by(user: current_user, challenge: @challenge)
    @game.update_attributes(status_string: @user_input, instructions: params[:instructions])
    p @game.instructions
    p @game.status_string

    if @user_input == @challenge.solution
      @game.update_attribute(completed: true)
    end

    render "challenges/show"

  end


  private

  def game_params
    params.require(:game).permit!
  end

  def move_robot(input)
    @input = input
    case input
    when "this.turnRight();"
      "I'm facing right"
      # robot turns right
    when "this.turnLeft();"
      "I'm facing left"
      # robot turns left
    when "this.forward();"
      "away!"
      # robot moves forward
    when "this.backward();"
      "oh no!"
      # robot moves backwards
    else
      "I don't understand you"
    end
  end
end
