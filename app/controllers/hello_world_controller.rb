class HelloWorldController < ApplicationController
  def hello_world
    Pusher['robot_channel'].trigger('forward', {
      # message: 'hello world'
    })
    # erb :hello_world
  end
end