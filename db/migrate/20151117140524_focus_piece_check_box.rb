class FocusPieceCheckBox < ActiveRecord::Migration
  def change
    add_column :articles, :focus_piece, :boolean, :default => false
  end
end
