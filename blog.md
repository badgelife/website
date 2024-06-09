---
title: News
layout: default
nav_order: 2
---

## Latest News

Catch up on recent articles and updates:

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%B %d, %Y" }}
{% endfor %}
