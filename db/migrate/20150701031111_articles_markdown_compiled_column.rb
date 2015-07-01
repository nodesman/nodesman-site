class ArticlesMarkdownCompiledColumn < ActiveRecord::Migration
  def change
    add_column :articles, :html, :text
  end
end
