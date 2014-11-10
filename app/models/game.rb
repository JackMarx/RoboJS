class Game < ActiveRecord::Base
  belongs_to :challenge
  belongs_to :user

  def send_instructions(game_id)
    get_instructions(game_id)[0]
  end

  def get_instructions(game_id)
    current_user.games.find(game_id).pluck(:instructions)
  end
end
