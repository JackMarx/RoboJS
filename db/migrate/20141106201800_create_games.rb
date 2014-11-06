class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.references :challenge, index: true
      t.references :user, index: true
      t.string     :status
      t.boolean    :completed

      t.timestamps
    end
  end
end
