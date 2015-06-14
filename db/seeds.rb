Article.create!([
  {id: 1, created_at: nil, updated_at: nil, title: "Making Software Is Hard", content: "<p>A lot of project managers and those in charge of software development teams think they can squeeze out more software from engineers by throwing more of them at a problem or making them work harder. Some employ all kinds of tactics to corner engineers into making commitments and holding them to it. </p><p>They may even convert this adversarial attitude towards engineers a virtuous management tactic that every one of their peers and subordinates who also manage engineers are to emulate. Al this does is push the risk of creating software onto engineers. And that will have negative consequences. Consequences that some managers are fine with. </p><p>They attempt to reduce software development down to a menial task like every other function. You said you will take 5 days to do this. Why is it taking longer? You are not living up to your word. Creating software is not like doing wood work or making pizza – easily repeated and well understood task. Complexities arise that increase the scope of the development in ways that were not foreseen during estimation. And this happens pretty often. </p><p>If you are able to get software out of someone by cornering someone and extracting an outcome then you are compromising on something else. If you are able to get away with pushing the risk of software onto engineers time and time again, then they will likely not be around for much longer. If you want to deviate from this minimum cost something has to take a hit. There are no free lunches. It is up to you to figure out what that is. It can be code quality. </p><p>It can be sustainability – your code runs the risk of not being maintainable after a point in time. It can be risking losing your staff. It can be money and time spent in bringing in additional capacity though contractors. Writing a software application well requires that a problem is thought through well. Software development is not the act of typing. It is not the translation of something from memory into words in a text file. </p><p>The act of creating software happens in the minds of people and in their interactions with people involved in making it. It involves the careful consideration of the methodology to solve this specific problem.</p>", show_date: false, url_slug: "making-software-is-hard"},
  {id: 2, created_at: nil, updated_at: nil, title: "CSS Grid Systems : What Are They Really?", content: " <p>Grid systems provide value by simplifying the API to layout elements on a web page. Doing it with plain CSS and HTML is far harder and requires a better understanding of the nuances of the layout elements in HTML. The grid systems hides us from the complexity.</p><h2>How I Use Grid Systems</h2><p>I don’t find any value in using them. I go full commando when writing front-end code. I find that I have to use a grid system only when I am maintaining software written using one before I got involved.</p><p>I may include a grid system in a project if I sense that I will not be in the project for very long because I work on multiple projects in short periods of time. This means I will not be writing the layout code in said project forever. I ensure that the UI framework that I develop will play nicely with the CSS grid system that will eventually be used in my absence.</p><h2>Problems with grid systems</h2><p>The original intent behind the concept of a grid is to make the scanning of a web page easier. A web page designed with the base framework of a grid in place is easier to scan for the reader. So the only legitimate place for a grid is in Photoshop. Grid as a concept is a visual design paradigm.</p><p>The 12 column split + gutter system that all CSS frameworks provide in itself provide no value in simplifying laying out of web pages but provide a useful framework for how we visualize the front-end of a web page.</p><p>Somewhere along the visual design paradigm was lost in translation and now the word “Grid” has come to mean almost exclusively a CSS grid system that hides the complexities of laying out an element on a screen – a convenience tool. As far as CSS frameworks go the underlying structure of 12 columns and gutter is not even the best logical break down of a flexible UI development framework.</p><p>If you have a custom visual design that is beyond a set of boxes stacked vertically and horizontally then you better not implement it using a grid framework. You will not achieve satisfactory results assuming you are trying to achieve near pixel perfect replication of the design. The grid system is an integer multiple of a certain width.</p><h2>Conclusion</h2><p>In the end it is what it is. Developers who are not CSS HTML/CSS Nazis like me find value in using it. Entire multimillion-dollar businesses have been built on it. If someone finds value in it then by all means you should continue using it.</p><p>Anything that simplifies and hides complexity always has less flexibility than the more complex solution. Knowing where the grid systems’ limitations lie are important.</p>", show_date: false, url_slug: "css-grid-systems"},
  {id: 3, created_at: nil, updated_at: nil, title: "Creating Websites With WordPress Is A Bad Idea", content: "<p>Wordpress is the most popular content management system in the world. It runs almost 16% of the web. I can see why that is because it is so easy to set up. </p><p>If you are a company that has a developer on board then don't create any part of your website using wordpress. Use wordpress only if you don't have a developer on your team and you want a ready made system with pre-built features that you don't expect to evolve with your needs. </p><p>These are my reasons to avoid wordpress as the go to platform when you are considering creating a new website. </p><h2>The wordpress's content management framework influences your web strategy to your detriment.</h2><p>Firstly, wordpress started out as a blogging platform. So there are (appropriate) assumptions about your content (you will write posts), what roles are available and how they are presented (chronologically). It comes with the posts and the page types which are really for chronological content. It does a good job of that. </p><p>Something deeply ingrained in the system is the blog being a web-log the way it was back in the early 2000s.  The emphasis on wordpress's presentation is in the chronological presentation of your content. Which is bad. </p><p>I would even go so far as to say that even a topical blog in the sense that it is today - should not be created as just a chronological list of posts. There should be cornerstone content that you should be seen out of the context of the time it was posted and stand on its own in your content hierarchy. </p><p>If you have chronological content - the content that you consciously endorse as having a expiry date or want to be seen in the context of its date then by all means write blog posts for those content. But don't fall into the trap of writing great content and then leaving it languishing in the archives of your website just because that is the only way you can publish it on your website. </p><p>Secondly, for every other purpose other than as a blog wordpress is half a CMS. It has very few things in it that will serve that purpose. You will have to develop the remaining half of that CMS yourself. </p><p>Attempting to build a complex functionality like a shopping cart and having it manageable using the wordpress administration panel will end up feeling like building the controls to your music player on to your fridge. </p><p>I realized that over time I stopped thinking about what I am creating as a attempt at creating a effective web presence and started moulding my ideas in terms of constructs provided by wordpress. The end result almost always is sub optimal.</p><p>I see resistance to implementing some ideas on the web presences that I come across because they are hard to do in wordpress. </p><p>I have been unconsciously been blocking out some good ideas that would have come to me had I started from first principles rather than being bogged down by what I can do with wordpress. </p><p>That way building websites on wordpress has been the cause for me to miss a lot of opportunities. It will be a out of place retrofit on the original feature set of a blog creation UI.</p><p>This is what richard stallman does to maintain his website:</p><blockquote>\\\"This site is maintained in a very simple way. I edit the pages such as this one manually as HTML. I only know simple HTML; others who know more wrote the parts at the top and bottom of pages, and the more complex formatting on the home page. Volunteer helpers install the political notes every day after receiving the text from me by email. A cron job \\\"rolls over\\\" the political notes page every two months. The photo galleries are generated with this perl script. The search feature on the site is done with this code.\\\" </blockquote><p>As against running between the user interface and the under the thood code all of what he has been doing is the direct solution to a problem. He needs a page that has his thoughts on software. No CMS. No database. It just works. I wish more of us thought this way. I don't see value in going that basic in how we publish ourselves but starting from \\\"What do I need?\\\" is useful. </p><p>I need a contact form. What are the parts of a bare minimum self hosted solution to achieve this?</p><p>I need a web page that shows a form and a script that will post the form content to me by email or writes to a file or database on the server depending on how I want to receive the entries. </p><p>With wordpress:</p><ul><li>Install contact form 7</li><li>Create a page, and then place the tag in that page. Add a wrapper div. Save this mark-up structure to the database. </li><li>Create a new template in your theme for the contact form. Make sure it doesn't have a sidebar and it has a layout and mark-up structure that is appropriate to render the generate contact form code. </li><li>Edit the contact page and then assign the template to that page. </li></ul><p>The whole thing just feels dirty. I have to run around between the CMS interface and under the hood to make it happen properly.  </p><h2>Moulding wordpress to do anything other than what it already does is hard work</h2><p>I have been using wordpress for over 10 years and developing on wordpress for 6 years. </p><p>I have found that making a website that is significantly more than a just a blog is a lot of effort. It involves adapting wordpress to the domain of the web application that you are trying to build. And that is a lot of work. </p><p>It is far easier to just write the damn thing on a framework instead. </p><p>Creating and maintaining CRUDs in wordpress is painfully hard. It is hard to evolve your entities beyond simple tuples into relationships. </p><p>You will have to write logic to maintain and detect the version of your schema and migrating them on your own. A painful thing to do from scratch. </p><p>This to me is the biggest drawback to creating a website using wordpress. That you have to re-invent the wheel every single time and you can only sparingly re-use stuff across projects. </p><p>Somewhere along the way they made the decision to not create any more tables. Now we're left with all kinds of content and meta data and their revisions being in the same tables. You have to read wordpress' source code to figure out which is which. And even if you do, the right way to do that may change over time if you choose to upgrade the wordpress installation (as you should).</p><p>The rest of the web development world - Rails, Django, Drupal developers are advancing at a breakneck speed while toolset available around wordpress seems to be stuck in the mid 2000's for a long time. </p><h2>Wordpress kind of forces you to create aging content</h2><p>Patrick McKenzie makes a <a href=\\\"https://training.kalzumeus.com/newsletters/archive/content-marketing-strategy\\\">very valid point about the blog format</a>:</p><blockquote><p>...that article has a date on it, just the fact of it having a date on it makes it less useful.</p><p>I have seen variants of the following conversation happen on Twitter / Reddit / HN / etc multiple times.</p><p>\\\"I just got a job offer as a front-end engineer at a Valley company. How do I handle the salary negotiation?\\\"</p><p>\\\"Patrick wrote about that here. It is good advice.\\\"</p><p>That looks like it was written in 2012. Do you have anything more up-to-date?\\\"</p><p>History is a pretty wild rollercoaster, but nothing which happened in the interim has suddenly made \\\"Don't negotiate your salary!\\\" or \\\"If you do negotiate your salary, start by naming a nice low number. You can always work your way up later!\\\" into good advice. And yet if you put a date on your work, people immediately assume it gets stale. This is even institutionalized in some forums — Hacker News, for example, will append e.g. \\\"(2012)\\\" to the title of anything published in a different calendar year. If you've got your server logs opened with tail -f (I have weird hobbies, what can I say), you can watch in real time as that date makes the link less likely to be clicked on or commented about.</p><p>\\\"But publication dates often provide important context!\\\" Horsepuckey. You can, and should, make the strategic decision that you'll primarily write things which retain their value. (It takes approximately the same amount of work to create great writing which lasts versus creating great writing which ages quickly. Given the choice, unless you're the New York Times and your entire business is built around throwing out some of the world's best writing every day right after breakfast, you should choose to write things which last. After all, you don't write software with the explicit intention that it will suffer bitrot hours after release, now do you?)</p><p>If the context were truly important some of the time and not others, people would make the considered decision \\\"Does this post need a publication date?\\\", but nobody does that. Most writing only carries a publication date because that was inserted several years ago into the WordPress template by a designer. The designer likely knows nothing about your company, to say nothing of the instant work. He put in a date because WordPress makes it really easy and because everyone knows that blog posts have dates. He also probably made the decision to make the date front-and-center in the blog post, rather than treating it as minimal-impact metadata and burying it after the main text or putting it in a bots-only header.\\\"</p></blockquote><p>The very fact that you have a blog's CMS will force you to reach for themes that are out of the box meant to show a chronological list of posts. </p><h2>The front-end of wordpress websites are terrible</h2><p>Moulding the front-end of wordpress websites is like trying to [some hard thing that communicates convolution]. </p><p>Don't get me wrong. I am very proficient in doing that. As back-end systems go - whether they are frameworks or CMS, wordpress is the worst of them all in terms of effort involved in </p><p>The theming framework assumes that you have a single stylesheet file that contains all of your stylesheets and will be loaded in every single page.</p><p>Any organization you bring out to create actual organization will leave you inventing your own templating system that will not be used after you finish that one project. </p><p>There is no way to directly specify which page gets which CSS. I will have to write code in the page to detect what content type or page I am in to give it the right CSS. </p><p>Good performant front-end shouldn't be something that happens only on e-commerce websites. It should happen on any website anywhere. Is it too much to ask that my website have a 2-3 digit millisecond load time?</p><h2>Should we not use any CMS?</h2><p>Not at all. </p><p>Drupal is a good CMS that is good for any purpose and more. It is more suited to being a blog than is wordpress. The only losing factor is the difficulty in updating and the availability of user friendly and functional plugins for the average blogger who fires up a web blog at the whim of the moment</p><p>In closing, don't let the right way or the available way to do things in wordpress anchor and influence how you end up presenting your content and how you build your audience. Think about it consciously either mould wordpress to meet that presentation of find a tool that allows you to do that easily.</p><p>If you are serious about having a good web presence, plan to outgrow and migrate away from wordpress eventually.</p><p><strong>P.S:</strong> I have spelled \\\"WordPress\\\" as 'wordpress' intentionally. That is not a oversight. Because I don't give a damn about this stupid stockholm syndrome driven peer-shaming \\\"mattitude\\\" that goes around in the wordpress community. That's why. I really hope it rustles some jimmies.  </p>", show_date: false, url_slug: "creating-websites-with-wordpress-is-bad"}
])
ContactFormEntry.create!([
  {id: 1, created_at: "2015-05-10 15:23:24", updated_at: "2015-05-10 15:23:24", name: "raj", email: "flarecore@gmail.com", subject: "this is a test subject", message: "this is a test body", ip_address: nil},
  {id: 2, created_at: "2015-05-10 15:23:24", updated_at: "2015-05-10 15:23:24", name: "raj", email: "flarecore@gmail.com", subject: "this is a test subject", message: "this is a test body", ip_address: nil},
  {id: 3, created_at: "2015-05-10 15:23:24", updated_at: "2015-05-10 15:23:24", name: "Raj", email: "flarecore@gmail.com", subject: "Test Subject", message: "This is a test", ip_address: "::1"},
  {id: 4, created_at: "2015-05-10 15:24:54", updated_at: "2015-05-10 15:24:54", name: "raj", email: "flarecore@gmail.com", subject: "this is a test subject", message: "this is a test body", ip_address: nil},
  {id: 5, created_at: "2015-05-10 15:24:54", updated_at: "2015-05-10 15:24:54", name: "raj", email: "flarecore@gmail.com", subject: "this is a test subject", message: "this is a test body", ip_address: nil},
  {id: 6, created_at: "2015-05-10 15:24:54", updated_at: "2015-05-10 15:24:54", name: "Raj", email: "flarecore@gmail.com", subject: "Test Subject", message: "This is a test", ip_address: "::1"},
  {id: 7, created_at: "2015-05-10 15:25:38", updated_at: "2015-05-10 15:25:38", name: "Raj", email: "flarecore@gmail.com", subject: "This is a test subject", message: "this is the contact form content body.", ip_address: "14.140.166.2"},
  {id: 8, created_at: "2015-05-17 19:09:25", updated_at: "2015-05-17 19:09:25", name: "raj", email: "flarecore@gmail.com", subject: "this is a test subject", message: "this is a test body", ip_address: nil},
  {id: 9, created_at: "2015-05-17 19:09:25", updated_at: "2015-05-17 19:09:25", name: "raj", email: "flarecore@gmail.com", subject: "this is a test subject", message: "this is a test body", ip_address: nil},
  {id: 10, created_at: "2015-05-17 19:09:25", updated_at: "2015-05-17 19:09:25", name: "Raj", email: "flarecore@gmail.com", subject: "Test Subject", message: "This is a test", ip_address: "::1"}
])
Page.create!([
  {id: 1, created_at: "2015-05-10 15:23:24", updated_at: "2015-05-10 15:23:24", title: "Home", content: "Welcome to Nodesman.com", page_type: "section_page", content_type: "html", url_slug: "home"},
  {id: 2, created_at: "2015-05-10 15:23:24", updated_at: "2015-05-10 15:23:24", title: "Portfolio", content: "This is the portfolio page.", page_type: "section_page", content_type: "markdown", url_slug: "portfolio"},
  {id: 3, created_at: "2015-05-10 15:23:24", updated_at: "2015-05-10 15:23:24", title: "Contact", content: "This is the page content", page_type: "section_page", content_type: "html", url_slug: "contact"},
  {id: 4, created_at: "2015-05-10 15:23:24", updated_at: "2015-05-10 15:23:24", title: "Articles", content: "List of articles categorized by topic. ", page_type: "section_page", content_type: "markdown", url_slug: "articles"},
  {id: 5, created_at: "2015-05-10 15:23:24", updated_at: "2015-05-10 15:23:24", title: "Snippets", content: "These are code snippers that for specific purposes. ", page_type: "section_page", content_type: "markdown", url_slug: "code-snippets"},
  {id: 6, created_at: "2015-05-10 15:24:54", updated_at: "2015-05-10 15:24:54", title: "Home", content: "Welcome to Nodesman.com", page_type: "section_page", content_type: "html", url_slug: "home"},
  {id: 7, created_at: "2015-05-10 15:24:54", updated_at: "2015-05-10 15:24:54", title: "Portfolio", content: "This is the portfolio page.", page_type: "section_page", content_type: "markdown", url_slug: "portfolio"},
  {id: 8, created_at: "2015-05-10 15:24:54", updated_at: "2015-05-10 15:24:54", title: "Contact", content: "This is the page content", page_type: "section_page", content_type: "html", url_slug: "contact"},
  {id: 9, created_at: "2015-05-10 15:24:54", updated_at: "2015-05-10 15:24:54", title: "Articles", content: "List of articles categorized by topic. ", page_type: "section_page", content_type: "markdown", url_slug: "articles"},
  {id: 10, created_at: "2015-05-10 15:24:54", updated_at: "2015-05-10 15:24:54", title: "Snippets", content: "These are code snippers that for specific purposes. ", page_type: "section_page", content_type: "markdown", url_slug: "code-snippets"},
  {id: 13, created_at: "2015-05-17 19:09:26", updated_at: "2015-05-17 19:09:26", title: "Home", content: "Welcome to Nodesman.com", page_type: "section_page", content_type: "html", url_slug: "home"},
  {id: 14, created_at: "2015-05-17 19:09:26", updated_at: "2015-05-17 19:09:26", title: "Portfolio", content: "This is the portfolio page.", page_type: "section_page", content_type: "markdown", url_slug: "portfolio"},
  {id: 15, created_at: "2015-05-17 19:09:26", updated_at: "2015-05-17 19:09:26", title: "Contact", content: "This is the page content", page_type: "section_page", content_type: "html", url_slug: "contact"},
  {id: 16, created_at: "2015-05-17 19:09:26", updated_at: "2015-05-17 19:09:26", title: "Articles", content: "List of articles categorized by topic. ", page_type: "section_page", content_type: "markdown", url_slug: "articles"},
  {id: 17, created_at: "2015-05-17 19:09:26", updated_at: "2015-05-17 19:09:26", title: "Snippets", content: "These are code snippers that for specific purposes. ", page_type: "section_page", content_type: "markdown", url_slug: "code-snippets"}
])
