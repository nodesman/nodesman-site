class PageFields < ActiveRecord::Migration
  def change
    add_column :pages, :title, :string
    add_column :pages, :content, :string
    add_column :pages, :page_type, :string
    add_column :pages, :content_type, :string
    add_column :pages, :url_slug, :string
  end
end
