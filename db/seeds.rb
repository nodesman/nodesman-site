ContactFormEntry.create!([
  {name: "raj", email: "flarecore@gmail.com", subject: "this is a test subject", message: "this is a test body", ip_address: nil},
  {name: "raj", email: "flarecore@gmail.com", subject: "this is a test subject", message: "this is a test body", ip_address: nil},
  {name: "Raj", email: "flarecore@gmail.com", subject: "Test Subject", message: "This is a test", ip_address: "::1"}
])
Page.create!([
  {title: "Home", content: "Welcome to Nodesman.com", page_type: "section_page", content_type: "html", url_slug: "home"},
  {title: "Portfolio", content: "This is the portfolio page.", page_type: "section_page", content_type: "markdown", url_slug: "portfolio"},
  {title: "Contact", content: "This is the page content", page_type: "section_page", content_type: "html", url_slug: "contact"},
  {title: "Articles", content: "List of articles categorized by topic. ", page_type: "section_page", content_type: "markdown", url_slug: "articles"},
  {title: "Snippets", content: "These are code snippers that for specific purposes. ", page_type: "section_page", content_type: "markdown", url_slug: "code-snippets"},
  {title: "This is the first article", content: "\r\nWhy does anybody care? Good question. Nobody should care. \r\n\r\n\r\n- This is the first item\r\n- This is the second item\r\n- This is the third item. ", page_type: "article", content_type: "markdown", url_slug: "test-slug-goes-here"},
  {title: "Another article", content: "Some content ", page_type: "article", content_type: "html", url_slug: "another-slug"}
])
