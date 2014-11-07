class GamesController  < ApplicationController
  include ApplicationHelper
  def create
    @game = Game.find_or_create_by(game_params)
    redirect_to "challenges/show"
  end

  def update

    @user_input = game_params[:status_string]
    p @user_input
    @challenge = Challenge.find(params[:challenge_id])
    @game = Game.find_by(user: User.first, challenge: @challenge)
    @game.update_attribute(:status_string, @user_input)
    p @game.status_string

    if @user_input == @challenge.solution
      @game.update_attribute(completed: true)
    end
    @message = move_robot(@user_input)

    # render 'challenges/show'
  end

  def move_robot(input)
    case input
    when "this.turnRight();"
     p @message = "I'm facing right"
      # robot turns right
      render json: {message: @message}, status: 200
    when "this.turnLeft();"
     p @message = "I'm facing left"
      # robot turns left
      render json: {message: @message}, status: 200
    when "this.forward();"
    p  @message = "away!"
      # robot moves forward
      render json: {message: @message}, status: 200
    when "this.backward();"
    p  @message = "oh no!"
      # robot moves backwards
      render json: {message: @message}, status: 200
    else
     p @message = "I don't understand you"
    end
  end

  private

  def game_params
    params.require(:game).permit!
  end
end
