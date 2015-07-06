class Admin::ArticlesController < AdminPageController
  def index
    @articles = Article.order(:created_at).all
  end
  def edit
    id = params[:id]
    @article = Article.find(id)
  end
  def process_slug(article)
    if article[:url_slug].empty?
      article[:url_slug] = article[:title].parameterize
    end
  end

  def destroy
    Article.delete params[:id]
    redirect_to admin_articles_url
  end

  def update
    @article = params.require(:article).permit!
    process_slug @article
    compile_markdown @article
    Article.update params[:id], @article
    redirect_to edit_admin_article_path(params[:id])
  end


  def compile_markdown(article)
    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML, tables: true, fenced_code_blocks: true)
    article[:html] = markdown.render(article[:content])
  end

  def create
    @article = params.require(:article).permit!
    process_slug @article
    compile_markdown @article
    Article.create @article
    redirect_to admin_articles_url
  end

  def new
    @article = Article.new
  end
end