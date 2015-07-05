class SnippetHtml < ActiveRecord::Migration
  def change
    add_column :snippets, :html, :text
  end
end
