class RobotsController < ApplicationController

  def move_robot(robot_instructions)
    action_array = robot_instructions.split(",")

    action_array.each do |action|
      case action
      when 'F' then event = 'forward'
      when 'L' then event = 'left'
      when 'R' then event = 'right'
      when 'S' then event = 'stop'
      end
    Pusher.trigger('robot_channel', event, {:some => 'data'})
    end
  end

  # def multiple_forward
  #   num = (action[1]..action[-1]).to_a.join.to_i
  #   num.times do
  #     Pusher.trigger('robot_channel', 'forward', {:some => 'data'})
  #   end
  # end
end