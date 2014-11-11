require 'rails_helper'

describe Game do 
  it { should belong_to(:challenge) }
  it { should belong_to(:user) }
end

