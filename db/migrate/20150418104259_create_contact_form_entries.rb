class CreateContactFormEntries < ActiveRecord::Migration
  def change
    create_table :contact_form_entries do |t|

      t.timestamps null: false
    end
  end
end
