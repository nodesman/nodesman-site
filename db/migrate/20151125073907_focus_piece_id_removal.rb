class FocusPieceIdRemoval < ActiveRecord::Migration
  def change
    drop_table :focus_pieces
    remove_column :articles, :focus_piece_id
  end
end
