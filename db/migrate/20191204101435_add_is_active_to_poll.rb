class AddIsActiveToPoll < ActiveRecord::Migration[5.2]
  def change
    add_column :polls, :is_active, :boolean, null: false, default: false
  end
end
