class GamesController  < ApplicationController
  include ApplicationHelper
  def create
    unless game_params[:id].nil?
      @game = Game.find_by(user_id: User.first.id, challenge_id: Challenge.first.id)
    else
      @game = Game.new(game_params)
      @game.update_attributes(user_id: params[:user_id], challenge_id: params[:challenge_id])
    end
    @challenge = @game.challenge

    redirect_to challenge_path(@challenge)
  end

  def update
    @user_input = game_params[:status_string]
    p @user_input
    @challenge = Challenge.find(params[:challenge_id])
    @game = Game.find_by(user: User.first, challenge: @challenge)
    @game.update_attribute(:status_string, @user_input)

    if @user_input == @challenge.solution
      @game.update_attribute(completed: true)
    end
    # p move_robot(@user_input)
    execute_commands(@user_input)
    # render 'challenges/show'
  end

  def execute_commands(input)
    input = @user_input
    responded_arr = []

    parse_commands(input).each do |input|
      responded_arr << move_robot(input)
    end

    @message = responded_arr.join("<br>")
    render json: {message: @message, input: @user_input}, status: 200
  end

  def parse_commands(input)
    input.split(/\r\n/)
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
