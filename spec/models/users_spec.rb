require 'rails_helper'

describe 'User' do
  let(:josh){ User.new(username: "seriousfools", password_digest: "password") }


  it { should have_many(:games) }
  it { should have_many(:badges) }



end