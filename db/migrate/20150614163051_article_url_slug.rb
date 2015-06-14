class ArticleUrlSlug < ActiveRecord::Migration
  def change
    add_column :articles, :url_slug, :string
  end
end
