class DefaultFalseForShowDateOnArticles < ActiveRecord::Migration
  def change
    change_column :articles, :show_date, :boolean, :default => false
  end
end
