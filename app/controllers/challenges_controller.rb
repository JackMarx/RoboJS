class ChallengesController < ApplicationController
include ApplicationHelper
  def show
    @challenge = Challenge.find(params[:id])
  end
end
