class Challenge < ActiveRecord::Base
  has_many :games
  has_many :badges
  has_many :users, through: :games

  def self.solutions
    # square_solution = []
    # 8.times { square_solution << "rupert.(turn|move)(Left|Forward)\((\\s)?1?\);(\\n)?(\\s)?" }

    { 
      challenge1: "F,S", # /\Arupert.moveForward\(\s?1?\);(\\n)?/
      challenge2: /\Arupert.moveForward\(\s?1?\);(\\n)?\s?rupert.moveForward\(\s?1?\);(\\n)?/,
      challenge3: /\Arupert.moveForward\(2\);(\\n)?/,
      challenge4: /\Arupert.turnLeft\(\s?1?\);(\\n)?/,
      challenge5: "hi", #Regexp.new(square_solution.join),
      challenge6: /for\(var i=1;i<4;i\+\+\){\\nrupert.moveForward(\(\));rupert.turnLeft(\(\));\\n}/
    }
  end

  def self.current_challenges(user)
    Challenge.all.map do |challenge|
      if challenge.users.include? user
        {game: user.games.find_by(challenge: challenge).attributes, challenge_id: challenge.id}
      else
        {user_id: user.id.to_i, challenge_id: challenge.id.to_i, game: Game.new.attributes}
      end
    end
  end
end
