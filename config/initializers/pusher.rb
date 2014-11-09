require 'pusher'

Pusher.url = "http://a32b9aab7196cd0862d2:0d0798a8039ff675fdc7@api.pusherapp.com/apps/95703"

pusher = YAML.load_file(File.join(Rails.application.root, 'config/pusher.yml'))

Pusher.app_id = pusher['app_id']
Pusher.key = pusher['key']
Pusher.secret = pusher['secret']

Pusher.logger = Rails.logger
 