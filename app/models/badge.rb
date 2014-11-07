class Badge < ActiveRecord::Base
  belongs_to :challenge
  has_many :users_badges
  has_many :users, through: :users_badges
end
