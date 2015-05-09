class ContactFormFields < ActiveRecord::Migration
  def change
    add_column :contact_form_entries, :name, :string
    add_column :contact_form_entries, :email, :string
    add_column :contact_form_entries, :subject, :string
    add_column :contact_form_entries, :message, :string
  end
end
