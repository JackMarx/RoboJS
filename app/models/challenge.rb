class Challenge < ActiveRecord::Base
  has_many :games
  has_many :badges
  has_many :users, through: :games
end
