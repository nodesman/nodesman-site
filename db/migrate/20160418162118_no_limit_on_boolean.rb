class NoLimitOnBoolean < ActiveRecord::Migration
  def change
    change_column :articles, :focus_piece, :boolean, :limit => nil
    change_column :snippets, :show_data, :boolean, :limit => nil
  end
end
