class ArticleFields < ActiveRecord::Migration
  def change
    add_column :articles, :title, :string
    add_column :articles, :content, :string
    add_column :articles, :show_date, :boolean, :default => true
  end
end