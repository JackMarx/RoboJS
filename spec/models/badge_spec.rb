require 'rails_helper'

describe Badge do
  it { should belong_to(:challenge) }
  it { should have_many(:users_badges) }
  it { should have_many(:users) }
end