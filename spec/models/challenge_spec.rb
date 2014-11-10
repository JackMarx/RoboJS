require 'rails_helper'

describe Challenge do 
  it { should have_many(:games) }
  it { should have_many(:badges) }
  it { should have_many(:users) }

  describe ".solutions" do
    it "should return a hash" do
      expect(Challenge.solutions).to be_a Hash
    end
  end
end