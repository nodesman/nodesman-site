class ChangeColumnType < ActiveRecord::Migration
  def change
    change_column :pages, :content, :text
    change_column :contact_form_entries, :message, :text
  end
end
