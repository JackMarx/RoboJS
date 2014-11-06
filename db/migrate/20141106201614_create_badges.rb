class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.references :challenge, index: true
      t.string     :image_url
      
      t.timestamps
    end
  end
end
