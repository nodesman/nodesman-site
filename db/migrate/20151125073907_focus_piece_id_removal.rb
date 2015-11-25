class FocusPieceIdRemoval < ActiveRecord::Migration
  def change
    remove_column :articles, :focus_piece_id
  end
end
