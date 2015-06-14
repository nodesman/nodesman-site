class Page < ActiveRecord::Base
  self.inheritance_column = :page_type
  @page_types = {
      :article => "Article",
      :section_page => "Section Page"
  }

  @content_types = {
      :markdown => "Markdown",
      :html => "HTML"
  }


  def self.page_types
    @page_types
  end

  def self.content_types
    @content_types
  end

  def is_markdown?
    content_type == "markdown"
  end


end
