class CreateUsersBadges < ActiveRecord::Migration
  def change
    create_table :users_badges do |t|
      t.references :user, index: true
      t.references :badge, index: true

      t.timestamps
    end
  end
end
