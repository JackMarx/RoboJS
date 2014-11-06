class CreateChallenges < ActiveRecord::Migration
  def change
    create_table :challenges do |t|
      t.string    :title
      t.text      :tutorial
      t.string    :solution
      t.text      :description
      t.string    :hint

      t.timestamps
    end
  end
end
