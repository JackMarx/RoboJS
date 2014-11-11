require 'rails_helper'


describe User do 
  it { should have_many(:games) }
  it { should have_many(:badges) }
  it { should have_secure_password }

  it "is invalid without a username" do 
    expect(FactoryGirl.build(:user, username: nil)).not_to be_valid 
  end

  it "is invalid without a password" do 
    expect(FactoryGirl.build(:user, password: nil)).not_to be_valid 
  end 

  it "is invalid without a password confirmation" do
    expect(FactoryGirl.build(:user, password_confirmation: nil)).not_to be_valid
  end

  it "is invalid without a matching password" do
    expect(FactoryGirl.build(:user, password_confirmation: "secret")).not_to be_valid
    expect(FactoryGirl.build(:user, password: "secret")).not_to be_valid
  end
end
