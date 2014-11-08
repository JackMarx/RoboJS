require "rails_helper"

describe "Game" do
  let(:challenge){ instance_double("Challenge", id: 1) }
  let(:user){ instance_double("User", id: 1) }
  let(:lotr){ Game.new(user_id: 1, challenge_id: 1, instructions: "L,F1,F2,L,B2,R,B1") }

  allow(challenge).to receive(:games).and_return([lotr])
  allow(user).to receive(:games).and_return([lotr, ghostbusters])
  


end