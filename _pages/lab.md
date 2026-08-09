---
layout: page
permalink: /sail/
title: SAIL@UCF
description: Software Engineering and Artificial Intelligence Lab
nav: true
nav_order: 8
---

<style>
  #navbar .navbar-nav .nav-item.active > .nav-link {
    color: #ffffff;
    background-color: var(--sail-gold);
  }

  #navbar .navbar-nav .nav-item.active > .nav-link:hover,
  #navbar .navbar-nav .nav-item.active > .nav-link:focus-visible {
    color: #ffffff;
    background-color: var(--sail-gold-hover);
  }

  .post > .post-header {
    display: none;
  }

  .sail-sticky-header {
    position: sticky;
    top: 56px;
    z-index: 1020;
    margin-bottom: 1rem;
    padding-top: 0.4rem;
    background: var(--global-bg-color);
    box-shadow: 0 10px 12px -14px rgba(0, 0, 0, 0.45);
  }

  .sail-sticky-header .sail-banner {
    margin-bottom: 0.65rem;
  }

  .sail-jump-nav {
    margin: 0;
    padding: 0.35rem 0 0.65rem;
    font-weight: 700;
  }

  .sail-jump-nav a {
    font-weight: 400;
  }

  #research,
  #publications,
  #people,
  #news {
    scroll-margin-top: 235px;
  }

  .post article a {
    color: var(--sail-gold);
    text-decoration-color: rgba(var(--sail-gold-rgb), 0.55);
    text-underline-offset: 0.15em;
  }

  .post article a:hover,
  .post article a:focus-visible {
    color: var(--sail-gold);
    text-decoration-color: var(--sail-gold);
  }

  .post article a:focus-visible {
    outline: 2px solid var(--sail-gold);
    outline-offset: 3px;
    border-radius: 2px;
  }

  .sail-banner {
    display: flex;
    align-items: center;
    gap: 1.75rem;
    margin-bottom: 2rem;
    padding: 1.25rem 2rem;
    color: #f7f3e8;
    background:
      radial-gradient(circle at 85% 20%, rgba(var(--sail-gold-rgb), 0.08), transparent 30%),
      linear-gradient(135deg, #121212 0%, #22211d 100%);
    border: 1px solid #302e27;
    border-bottom: 4px solid var(--sail-gold);
    border-radius: 0.9rem;
    box-shadow: 0 10px 22px rgba(var(--sail-gold-rgb), 0.2);
  }

  .sail-logo-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 149px;
    width: 149px;
    height: 100px;
    padding-right: 1rem;
    border-right: 1px solid rgba(var(--sail-gold-rgb), 0.35);
  }

  .sail-logo {
    display: block;
    width: 134px;
    height: 134px;
    border-radius: 0.5rem;
    object-fit: cover;
    filter: drop-shadow(0 3px 5px rgba(var(--sail-gold-rgb), 0.3));
  }

  .sail-banner-text h2 {
    margin: 0 0 0.35rem;
    color: #ece9e1;
    font-size: 2.25rem;
    font-weight: 700;
    letter-spacing: -0.03em;
  }

  .sail-banner-text h2 span {
    color: var(--sail-gold-bright);
  }

  .sail-banner-text p {
    margin: 0;
    color: #e9e3d2;
    font-size: 1.08rem;
  }

  .sail-banner-text p strong {
    color: #ece9e1;
    font-weight: 800;
  }

  .sail-research-layout {
    display: grid;
    grid-template-columns: minmax(0, 1.75fr) minmax(270px, 1fr);
    gap: 2.5rem;
    align-items: start;
    margin: 1.25rem 0 2rem;
  }

  .sail-research-copy h3 {
    margin-top: 0;
  }

  .sail-news-all {
    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    clear: both;
    margin-top: 0.75rem;
    padding: 0.35rem 0.7rem;
    border: 1px solid var(--sail-gold);
    border-radius: 999px;
    font-size: 0.82rem;
    font-weight: 600;
  }

  .sail-news-all:hover,
  .sail-news-all:focus-visible {
    background: rgba(var(--sail-gold-rgb), 0.1);
    text-decoration: none;
  }

  @media (max-width: 600px) {
    .sail-sticky-header {
      top: 56px;
    }

    .sail-banner {
      align-items: flex-start;
      gap: 1rem;
      padding: 1rem;
    }

    .sail-logo-wrap {
      flex-basis: 102px;
      width: 102px;
      height: 76px;
      padding-right: 0.75rem;
    }

    .sail-logo {
      width: 90px;
      height: 90px;
    }

    .sail-banner-text h2 {
      font-size: 1.55rem;
    }

    #research,
    #publications,
    #people,
    #news {
      scroll-margin-top: 205px;
    }
  }

  @media (max-width: 767px) {
    .sail-research-layout {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .sail-news-all {
      margin-top: 1.25rem;
    }
  }
</style>

<div class="sail-sticky-header">
  <div class="sail-banner">
    <div class="sail-logo-wrap">
      <img class="sail-logo" src="{{ '/assets/img/sail-logo.png' | relative_url }}" alt="SAIL@UCF lab logo">
    </div>
    <div class="sail-banner-text">
      <h2>SAIL<span>@UCF</span></h2>
      <p><strong>S</strong>oftware Engineering and <strong>A</strong>rtificial <strong>I</strong>ntelligence <strong>L</strong>ab</p>
    </div>
  </div>

  <nav class="sail-jump-nav" aria-label="Jump to a SAIL page section">
    Jump to: <a href="#research">Research</a> · <a href="#publications">Publications</a> · <a href="#people">People</a> · <a href="#news">News</a>
  </nav>
</div>

The **S**oftware Engineering and **A**rtificial **I**ntelligence **L**ab (SAIL) at the University of Central Florida studies problems at the intersection of artificial intelligence and software engineering. Our work seeks to understand and improve how large language models reason about software, and to make AI-assisted software development more predictable, controllable, and dependable.

<div class="sail-research-layout">
  <section id="research" class="sail-research-copy" aria-labelledby="sail-research-heading">
    <h3 id="sail-research-heading"><strong>Research</strong></h3>
    <p>Our research broadly spans:</p>
    <ul>
      <li><strong>Large language models for software engineering (LLM4SE):</strong> understanding and improving how LLMs analyze, reason about, and generate software artifacts.</li>
      <li><strong>Software engineering for AI systems (SE4AI):</strong> making LLM-enabled software more reliable, predictable, controllable, and dependable.</li>
      <li><strong>AI-assisted program analysis:</strong> combining learning and program-analysis techniques to reason about program behavior.</li>
    </ul>
  </section>

  <aside id="news" class="about-main__news" aria-labelledby="sail-news-heading">
    <h2 id="sail-news-heading">Recent News</h2>
    <div class="news">
      <div class="table-responsive">
        <table class="table table-sm table-borderless">
          {% assign sail_news = site.news | where: "sail", true | reverse %}
          {% for item in sail_news limit: 4 %}
            <tr>
              <th scope="row">{{ item.date | date: "%b %-d, %Y" }}</th>
              <td>
                {% if item.inline %}
                  {{ item.content | remove: '<p>' | remove: '</p>' | emojify }}
                {% else %}
                  <a class="news-title" href="{{ item.url | relative_url }}">{{ item.title }}</a>
                {% endif %}
              </td>
            </tr>
          {% else %}
            <tr><td>No SAIL news yet.</td></tr>
          {% endfor %}
        </table>
      </div>
    </div>
    <a class="sail-news-all" href="{{ '/news/?filter=sail' | relative_url }}">View all SAIL news&nbsp;→</a>
  </aside>
</div>

### **Publications**

See our [research and publications]({{ '/research/?filter=sail#publications' | relative_url }}) for recent work from the lab.


### **People**

<style>
  .sail-student-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    margin: 1rem 0 1.5rem;
  }

  .sail-student-heading {
    display: flex;
    align-items: center;
    gap: 0.55rem;
    font-size: 1.25rem;
    font-weight: 400;
  }

  .sail-student-heading::before {
    content: "";
    width: 0.65rem;
    height: 0.65rem;
    flex: 0 0 0.65rem;
    background: #1a1a1a;
    border-radius: 50%;
  }

  @media (max-width: 600px) {
    .sail-student-grid {
      grid-template-columns: 1fr;
    }
  }

  .sail-student-card {
    display: grid;
    grid-template-columns: 64px 1fr;
    column-gap: 0.85rem;
    align-items: center;
    border-radius: 0.75rem;
    padding: 0.9rem 1rem;
    min-height: 110px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .sail-student-photo {
    grid-column: 1;
    grid-row: 1 / span 4;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border: 2px dashed currentColor;
    border-radius: 50%;
    font-size: 0.75rem;
    opacity: 0.5;
  }

  .sail-student-card h4,
  .sail-student-card p {
    grid-column: 2;
  }

  .sail-student-card h4 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    font-weight: 350;
  }

  .sail-student-card p {
    margin-bottom: 0.25rem;
  }

  .sail-student-card.phd {
    background: #fff9e6;
    color: #2b2618;
  }

  .sail-student-card.undergraduate {
    background: #f2f6fa;
    color: #152536;
  }
</style>

<h4 class="sail-student-heading phd">Ph.D. Students</h4>

<div class="sail-student-grid">
  <div class="sail-student-card phd">
    <div class="sail-student-photo" role="img" aria-label="Photo placeholder">Photo</div>
    <h4>Showvik Biswas</h4>
    <p>Ph.D. Student · Fall 2026–present</p>
    <p>🏆 ORCGS Doctoral Fellow, 2026</p>
  </div>
  <div class="sail-student-card phd">
    <div class="sail-student-photo" role="img" aria-label="Photo placeholder">Photo</div>
    <h4>Seth Jones</h4>
    <p>Ph.D. Student · Fall 2026–present</p>
    <p>🏆 ORCGS Doctoral Fellow, 2026</p>
  </div>
  <div class="sail-student-card phd">
    <div class="sail-student-photo" role="img" aria-label="Photo placeholder">Photo</div>
    <h4>Yash Burshe</h4>
    <p>Ph.D. Student · Fall 2026–present</p>
    <p>(co-advised by Dr. Kevin Moran)</p>
  </div>
  <div class="sail-student-card phd">
    <div class="sail-student-photo" role="img" aria-label="Photo placeholder">Photo</div>
    <h4>Ryan Garfinkel</h4>
    <p>Ph.D. Student · Fall 2026–present</p>
    <p>(co-advised by Dr. Paul Gazzillo)</p>
  </div>
  <div class="sail-student-card phd">
    <div class="sail-student-photo" role="img" aria-label="Photo placeholder">Photo</div>
    <h4>Eshgin Hasanov</h4>
    <p>Ph.D. Student · Fall 2025–present</p>
  </div>
</div>

<h4 class="sail-student-heading undergraduate">Undergraduate Students</h4>

<div class="sail-student-grid">
  <div class="sail-student-card undergraduate">
    <div class="sail-student-photo" role="img" aria-label="Photo placeholder">Photo</div>
    <h4>Alex Kemper</h4>
    <p>2026 - </p>
    <p>3rd Year Undergraduate Student</p>
  </div>
</div>

<h4 class="sail-student-heading alumni">Alumni</h4>

<div class="sail-student-grid">
  <div class="sail-student-card undergraduate">
    <div class="sail-student-photo" role="img" aria-label="Photo placeholder">Photo</div>
    <h4>Seth Jones</h4>
    <p>2025 - 2026</p>
    <p>Joined SAIL@UCF as Ph.D. Student</p>
  </div>
  <div class="sail-student-card undergraduate">
    <div class="sail-student-photo" role="img" aria-label="Photo placeholder">Photo</div>
    <h4>Dylan Dinh</h4>
    <p>2026</p>
    <p>Joined Eisco Scientific as A.I. Engineering Intern</p>
  </div>
</div>
