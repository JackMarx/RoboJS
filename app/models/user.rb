class User < ActiveRecord::Base

  has_many :games
  has_many :users_badges
  has_many :badges, through: :users_badges
  has_secure_password

  validates :username, uniqueness: true
  validates :username, presence: true
  
  validates :password, presence: true, length: { minimum: 6 }
  validates :password_confirmation, presence: true


  def password
    @password ||= BCrypt::Password.new(password_digest)
  end

  def password=(new_password)
    @password = BCrypt::Password.create(new_password)
    self.password_digest = @password
  end

  def self.authenticate(params)
    user = User.find_by(username: params[:username])

    if user && user.password == params[:password]
      return user
    end
  end
end
