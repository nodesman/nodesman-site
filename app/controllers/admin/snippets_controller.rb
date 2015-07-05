class Admin::SnippetsController < AdminPageController
  def show
  end

  def index
    @snippets = Snippet.order(:created_at).all
  end

  def create
    @snippet = params.require(:snippet).permit!
    process_markdown @snippet
    Snippet.create @snippet
    redirect_to admin_snippets_url
  end

  def destroy
    Snippet.destroy params[:id]
    redirect_to admin_snippets_path
  end

  def edit
    @snippet = Snippet.find(params[:id])
  end

  def process_markdown(snippet)
    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML, tables: true)
    snippet[:html] = markdown.render(snippet[:content])
  end

  def update
    @snippet = params.require(:snippet).permit!
    process_markdown @snippet
    Snippet.update params[:id], @snippet
    redirect_to admin_snippets_url
  end

  def new
    @snippet = Snippet.new
  end
end