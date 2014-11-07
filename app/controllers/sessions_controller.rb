class SessionsController < ApplicationController
  def index
    render "sessions/index", layout: false
  end
end