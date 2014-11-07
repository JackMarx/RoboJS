class User < ActiveRecord::Base
  has_many :games
  has_many :users_badges
  has_many :badges, through: :users_badges

  has_secure_password
end
