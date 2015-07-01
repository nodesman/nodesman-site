class CreateSnippets < ActiveRecord::Migration
  def change
    create_table :snippets do |t|
      t.string :title
      t.text :content
      t.boolean :show_data, :default => false
      t.timestamps null: false
    end
  end
end