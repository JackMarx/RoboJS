# pusher = YAML.load_file(File.join(RoboJS::Application.root, 'config/pusher.yml'))

# Pusher.app_id = pusher['app_id']
# Pusher.key = pusher['key']
# Pusher.secret = pusher['secret']

# begin
#   RoboJS::Application.config.board = Dino::Board.new(Dino::TxRx.new)
#   button = Dino::Components::Button.new(pin: 13, board: RoboJS::Application.config.board)

#   button.down do
#     puts 'down'
#     Pusher['button'].trigger!('down', { :some => 'data' })
#   end

#   button.up do
#     puts 'up'
#     Pusher['button'].trigger!('up', { :some => 'data' })
#   end

# rescue Dino::BoardNotFound
#   puts 'The board is not connected'
# end
