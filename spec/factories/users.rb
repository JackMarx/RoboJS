require 'rails_helper'
require 'faker'

FactoryGirl.define do 

	factory :user do |f| 
		f.username { Faker::Internet.user_name }
		f.password { "password" }
    f.password_confirmation { "password" }
	end 
end