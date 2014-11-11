require 'rails_helper'
require 'shoulda-matchers'

describe UsersBadge do 
  it { should belong_to(:user) }
  it { should belong_to(:badge) }
end

