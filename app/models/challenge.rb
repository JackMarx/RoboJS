class Challenge < ActiveRecord::Base
  has_many :games
  has_many :badges
  has_many :users, through: :games

  def self.solutions
    { 
      challenge1: /rupert.moveForward\(\);/,
      challenge2: /rupert.moveForward\(\);(\\n)*{2}/,
      challenge3: /(rupert.moveForward\(2\);)/,
      challenge4: /rupert.(turn|move)(Left|Forward)(\(\));(\\n)*{2}/,
      challenge5: /rupert.(turn|move)(Left|Forward)(\(\));(\\n)*{8}/,
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
