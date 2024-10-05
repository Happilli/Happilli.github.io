---
layout: default
title: Home
---

<div class="typing-effect"></div>
<section id="about">
    <h1>About</h1>
    <p>Your about content goes here.</p>
</section>

<section id="projects">
    <h1>Projects</h1>
    <!-- {% capture projects_content %} -->
      {% include_relative projects.markdown %}
    {% endcapture %}
    {{ projects_content | markdownify }}
</section>

<section id="gallery">
    <h1>Gallery</h1>
    <p>Your gallery content goes here.</p>
</section>

<section id="portfolio">
  <h1>My Portfolio and interets</h1>
    <!-- {% capture portfolio_content %} -->
      {% include_relative portfolio.markdown %}
    {% endcapture %}
    {{ portfolio_content | markdownify }}
</section>

<section id="contact">
    <h1>Contact</h1>
    <p>Your contact content goes here.</p>
</section>
