class RobotsController < ApplicationController

  def forward
    Pusher.trigger('robot_channel', 'forward', {:some => 'data'})
    redirect_to root_path
  end

  def left
    Pusher.trigger('robot_channel', 'left', {:some => 'data'})
    redirect_to root_path
  end

  def right
    Pusher.trigger('robot_channel', 'right', {:some => 'data'})
    redirect_to root_path
  end

  def stop
    Pusher.trigger('robot_channel', 'stop', {:some => 'data'})
    redirect_to root_path
  end

  def light
    Pusher.trigger('robot_channel', 'light', {:some => 'data'})
    redirect_to root_path
  end
end