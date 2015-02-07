---
layout: archive
title: "Продукция"
date: 2014-05-30T11:39:03-04:00
modified:
excerpt: "Категории продуктов"
tags: []
image:
  feature: 1600x800.gif
  teaser:
---

<div class="tiles">
{% for post in site.categories.products %}
  {% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->