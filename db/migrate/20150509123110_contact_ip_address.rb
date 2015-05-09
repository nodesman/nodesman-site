class ContactIpAddress < ActiveRecord::Migration
  def change
    add_column :contact_form_entries, :ip_address, :string
  end
end
