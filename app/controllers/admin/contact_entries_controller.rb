class Admin::ContactEntriesController < AdminPageController
  def index
    @entries = ContactFormEntry.order(:created_at).all
  end
  def show
    id = params[:id]
    @entry = ContactFormEntry.find(id)
  end
end