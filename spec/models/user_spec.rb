require 'rails_helper'


describe User do 

  it "has a valid factory" do
    FactoryGirl.create(:user).should be_valid
  end
  # it "has a valid factory" do
  #   Factory.create(:user).should be_valid 
  # end

  # let(:rupert) { FactoryGirl.create :user }

  # it "is invalid without a username" do 
  #   expect(rupert.username == nil).should_not be_valid 
  # end

  # it "is invalid without a password" do 
  #   FactoryGirl.build(:user, password: nil).should_not be_valid 
  # end 

  # it "returns a contact's full name as a string" 
end
