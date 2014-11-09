class RemoveSolutionFromChallenges < ActiveRecord::Migration
  def change
    remove_column :challenges, :solution, :string
  end
end
