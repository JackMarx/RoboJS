class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.references :challenge, index: true
      t.references :user, index: true
      t.string     :status_string, default: ""
      t.boolean    :completed, default: false

      t.timestamps
    end
  end
end
