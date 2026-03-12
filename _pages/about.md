---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
<!-- <div style="text-align: justify;">
I'm a PhD candidate in <span style="color: #0066cc;">Aerospace Structures and Materials</span> with focus on <span style="color: #FF6B6B;">machine learning </span> and composite materials.
</div> -->

<div style="text-align: justify;">
I'm a PhD candidate in the <a href="https://www.tudelft.nl/en/ae/organisation/departments/aerospace-structures-and-materials" style="color: #f85151; text-decoration: none; font-weight: bold;">Aerospace Structures and Materials (ASM)</a> department at <a href="https://www.tudelft.nl/en/" style="color: inherit; text-decoration: none; font-weight: bold;">T<span style="color: #00A6D6;">U</span> Delft</a>, Faculty of Aerospace Engineering. My research lies at the intersection of deep learning and computational micromechanics, with a focus on the design and analysis of large-scale aerospace-grade composite structures.
<br>
<br>
Prior to joining TU Delft, I worked as a researcher in the <a href="http://mdam.kaist.ac.kr/" style="color: #003DA5; text-decoration: none; font-weight: bold;">Mechanical Design and Advanced Materials (MDAM)</a> lab at <a href="https://me.kaist.ac.kr/eng/main/main.html" style="color: inherit; text-decoration: none; font-weight: bold;"><span style="color: #003DA5;">KAIST</span></a>, where I focused on multifunctional carbon fiber-based structural batteries.
</div>

<br>

# Latest News
------
<div class="latest-news-container">
  <div class="news-scroll-wrapper">
    {% assign sorted_news = site.news | sort: 'date' | reverse %}
    {% for news_item in sorted_news limit:10 %}
      <div class="news-card">
        <div class="news-card-image">
          {% if news_item.image %}
            <img src="{{ news_item.image }}" alt="{{ news_item.title }}">
          {% else %}
            <img src="https://via.placeholder.com/320x200?text={{ news_item.title | replace: ' ', '+' }}" alt="{{ news_item.title }}">
          {% endif %}
        </div>
        <div class="news-card-content">
          <div class="news-card-date">{{ news_item.date | date: "%B %d, %Y" }}</div>
          <h3 class="news-card-title">{{ news_item.title }}</h3>
          <p class="news-card-excerpt">{{ news_item.excerpt | strip_html | truncatewords: 50 }}</p>
          <a href="{{ news_item.url }}" class="news-card-link">Read More →</a>
        </div>
      </div>
    {% endfor %}
  </div>
</div>





Site-wide configuration
------
The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header. 

Create content & metadata
------
For site content, there is one Markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a Markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each Markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

The repository includes [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual Markdown files that will be properly formatted for the Academic Pages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the Markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and Markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons. 

Example: editing a Markdown file for a talk
![Editing a Markdown file for a talk](/images/editing-talk.png)

For more info
------
More info about configuring Academic Pages can be found in [the guide](https://academicpages.github.io/markdown/), the [growing wiki](https://github.com/academicpages/academicpages.github.io/wiki), and you can always [ask a question on GitHub](https://github.com/academicpages/academicpages.github.io/discussions). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful.
