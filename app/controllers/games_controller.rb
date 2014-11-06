class GamesController  < ApplicationController
  require ApplicationHelper
  def create
    @game = Game.find_or_create_by(game_params)
    redirect_to "challenges/show"
  end

  def update
    @user_input = game_params[:status_string]
    @challenge = Challenge.find(game_params[:challenge_id])
    @game = Game.find_by(user: current_user, challenge: @challenge)
    @game.update_attribute(status_string: @user_input)

    if @user_input == @challenge.solution
      @game.update_attribute(completed: true)
    end
    move_robot(@user_input)
  end

  def move_robot(input)
    case input
    when input == "this.turnRight();"
      @message = "I'm facing right"
      # robot turns right
      render json: {message: @message}, status: 200
    when input == "this.turnLeft();"
      @message = "I'm facing left"
      # robot turns left
      render json: {message: @message}, status: 200
    when input == "this.forward();"
      @message = "away!"
      # robot moves forward
      render json: {message: @message}, status: 200
    when input == "this.backward();"
      @message = "oh no!"
      # robot moves backwards
      render json: {message: @message}, status: 200
    else
      @message = "I don't understand you"
    end
  end

  private

  def game_params
    params.require(:game).permit!
  end
end
