require 'rails_helper'
require 'faker'

FactoryGirl.define do
  factory :challenge do |f|
    f.title { Faker::App.name }
    f.tutorial { Faker::Hacker.say_something_smart }
    f.description { Faker::Lorem.paragraph }
    f.hint { Faker::Hacker.say_something_smart }
  end
end