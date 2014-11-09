class HelloWorldsController < ApplicationController
  def hello_world
    # Pusher['robot_channel'].trigger!('forward', { :some => 'data' })
    Pusher.trigger('robot_channel', 'forward', {:some => 'data'})
  end
end