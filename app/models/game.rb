class Game < ActiveRecord::Base
  belongs_to :challenge
  belongs_to :user

  def send_instructions
    get_new_instructions.each do |instruct|
      next if instruct == ""
      return instruct
    end
  end

  def get_new_instructions
    get_all_instructions.map! do |instruct|
      send_me = instruct
      instruct = ""
      return send_me
    end
  end

  def get_all_instructions
    current_user.games.pluck(:instructions)
  end
end
