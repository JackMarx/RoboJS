require 'rails_helper'

describe Challenge do 
  it { should have_many(:games) }
  it { should have_many(:badges) }
end