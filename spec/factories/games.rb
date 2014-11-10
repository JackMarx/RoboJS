require 'rails_helper'
require 'faker'

FactoryGirl.define do
  factory :game do |f|
    f.status_string { Faker::Hacker.say_something_smart }
    f.completed { [true, false].sample }
  end
end