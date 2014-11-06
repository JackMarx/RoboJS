# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

megan = User.create!(username: "megmazzle", password_digest: 1)

challenge1 = Challenge.create!(title: "One challenge to rule them all",
                               tutorial: "One challenge to find them",
                               solution: "One challenge to bring them all",
                               description: "And in the darkness bind them",
                               hint: "Peter Jackson")

game1 = Game.create!(user: megan, challenge: challenge1, completed: false, status_string: "")
