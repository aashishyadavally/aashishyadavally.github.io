---
layout: page
permalink: /sail/
title: SAIL@UCF
description: Software Engineering and Artificial Intelligence Lab
nav: true
nav_order: 8
---

<style>
  .post > .post-header {
    display: none;
  }

  .post article a {
    color: #c9a227;
    text-decoration-color: rgba(201, 162, 39, 0.55);
    text-underline-offset: 0.15em;
  }

  .post article a:hover,
  .post article a:focus-visible {
    color: #c9a227;
    text-decoration-color: #c9a227;
  }

  .post article a:focus-visible {
    outline: 2px solid #c9a227;
    outline-offset: 3px;
    border-radius: 2px;
  }

  .sail-banner {
    display: flex;
    align-items: center;
    gap: 1.75rem;
    margin-bottom: 2rem;
    padding: 1.6rem 2rem;
    color: #f7f3e8;
    background:
      radial-gradient(circle at 85% 20%, rgba(255, 204, 0, 0.08), transparent 30%),
      linear-gradient(135deg, #121212 0%, #22211d 100%);
    border: 1px solid #302e27;
    border-bottom: 4px solid #d5ad2d;
    border-radius: 0.9rem;
    box-shadow: 0 10px 22px rgba(201, 162, 39, 0.2);
  }

  .sail-logo-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 0 0 110px;
    width: 110px;
    height: 110px;
    color: #e2ca72;
    border-right: 1px solid rgba(201, 162, 39, 0.35);
    font-size: 0.7rem;
    text-align: center;
  }

  .sail-logo-placeholder i {
    margin-bottom: 0.35rem;
    color: #f2cd51;
    font-size: 3.6rem;
    filter: drop-shadow(0 3px 5px rgba(201, 162, 39, 0.3));
  }

  .sail-banner-text h2 {
    margin: 0 0 0.35rem;
    color: #ffffff;
    font-size: 2.25rem;
    font-weight: 700;
    letter-spacing: -0.03em;
  }

  .sail-banner-text h2 span {
    color: #f2c94c;
  }

  .sail-banner-text p {
    margin: 0;
    color: #e9e3d2;
    font-size: 1.08rem;
  }

  .sail-research-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(280px, 0.72fr);
    gap: 2rem;
    align-items: start;
    margin: 1.25rem 0 2rem;
  }

  .sail-research-copy h3,
  .sail-news-panel h3 {
    margin-top: 0;
  }

  .sail-news-panel {
    padding: 1rem 1.15rem;
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-top: 4px solid #c9a227;
    border-radius: 0.75rem;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);
  }

  .sail-news-panel h3 {
    margin-bottom: 0.65rem;
  }

  .sail-news-panel .table-responsive {
    margin-bottom: 0;
  }

  .sail-news-panel table {
    margin-bottom: 0;
  }

  .sail-news-panel th {
    width: 32%;
    white-space: nowrap;
  }

  @media (max-width: 600px) {
    .sail-banner {
      align-items: flex-start;
      gap: 1rem;
      padding: 1.1rem;
    }

    .sail-logo-placeholder {
      flex-basis: 76px;
      width: 76px;
      height: 76px;
    }

    .sail-logo-placeholder i {
      font-size: 2.5rem;
    }

    .sail-banner-text h2 {
      font-size: 1.55rem;
    }
  }

  @media (max-width: 850px) {
    .sail-research-layout {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
</style>

<div class="sail-banner">
  <div class="sail-logo-placeholder" role="img" aria-label="SAIL lab logo placeholder">
    <i class="fa-solid fa-sailboat" aria-hidden="true"></i>
    <span>Logo placeholder</span>
  </div>
  <div class="sail-banner-text">
    <h2>SAIL<span>@UCF</span></h2>
    <p><strong>S</strong>oftware Engineering and <strong>A</strong>rtificial <strong>I</strong>ntelligence <strong>L</strong>ab</p>
  </div>
</div>

**Jump to:**  [Research](#research) · [Publications](#publications) · [Students](#students) · [News](#news) · [Join Us](#join-us)

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

  <aside id="news" class="sail-news-panel" aria-labelledby="sail-news-heading">
    <h3 id="sail-news-heading">Latest SAIL News</h3>
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
  </aside>
</div>

### Publications

See our [research and publications]({{ '/research/?filter=sail#publications' | relative_url }}) for recent work from the lab.


### Students

<style>
  .sail-student-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    margin: 1rem 0 1.5rem;
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
  }

  .sail-student-card p {
    margin-bottom: 0.25rem;
  }

  .sail-student-card.phd {
    background: #fff9e6;
    color: #2b2618;
    border: 1px solid #eadca8;
    border-top: 5px solid #c9a227;
  }

  .sail-student-card.undergraduate {
    background: #f2f6fa;
    color: #152536;
    border: 1px solid #d5e0e9;
    border-top: 5px solid #5f82a3;
  }
</style>

#### Ph.D. Students

<div class="sail-student-grid">
  <div class="sail-student-card phd">
    <div class="sail-student-photo" role="img" aria-label="Photo placeholder">Photo</div>
    <h4>Showvik Biswas</h4>
    <p><strong>1st Year Ph.D. Student</strong></p>
    <p>🏆 ORCGS Doctoral Fellow, 2026</p>
  </div>
  <div class="sail-student-card phd">
    <div class="sail-student-photo" role="img" aria-label="Photo placeholder">Photo</div>
    <h4>Seth Jones</h4>
    <p><strong>1st Year Ph.D. Student</strong></p>
    <p>🏆 ORCGS Doctoral Fellow, 2026</p>
  </div>
  <div class="sail-student-card phd">
    <div class="sail-student-photo" role="img" aria-label="Photo placeholder">Photo</div>
    <h4>Yash Burshe</h4>
    <p><strong>1st Year Ph.D. Student</strong></p>
    <p>(co-advised by Dr. Kevin Moran)</p>
  </div>
  <div class="sail-student-card phd">
    <div class="sail-student-photo" role="img" aria-label="Photo placeholder">Photo</div>
    <h4>Ryan Garfinkel</h4>
    <p><strong>1st Year Ph.D. Student</strong></p>
    <p>(co-advised by Dr. Paul Gazzillo)</p>
  </div>
  <div class="sail-student-card phd">
    <div class="sail-student-photo" role="img" aria-label="Photo placeholder">Photo</div>
    <h4>Eshgin Hasanov</h4>
    <p><strong>3rd Year Ph.D. Student</strong></p>
  </div>
</div>

#### Undergraduate Students

<div class="sail-student-grid">
  <div class="sail-student-card undergraduate">
    <div class="sail-student-photo" role="img" aria-label="Photo placeholder">Photo</div>
    <h4>Alex Kemper</h4>
    <p><strong>3rd Year Undergraduate Student</strong></p>
  </div>
</div>

#### Alumni

<div class="sail-student-grid">
  <div class="sail-student-card undergraduate">
    <div class="sail-student-photo" role="img" aria-label="Photo placeholder">Photo</div>
    <h4>Seth Jones</h4>
    <p>First Job After Graduation: Joined SAIL@UCF as Ph.D. Student</p>
  </div>
  <div class="sail-student-card undergraduate">
    <div class="sail-student-photo" role="img" aria-label="Photo placeholder">Photo</div>
    <h4>Dylan Dinh</h4>
    <p>First Job After Graduation: Lorem Ipsum</p>
  </div>
</div>


### Join Us

<span style="background-color:#fff8dd; color:#b30000; padding:2px 6px; border-radius:4px;"><strong style="color:#b30000;">We are hiring!</strong></span>

We are looking for motivated students with a strong foundation in programming languages, software engineering, and/or artificial intelligence. If your interests align with our work, email *aashish [dot] yadavally [at] ucf [dot] edu* with a copy of your CV and a brief description of your research interests and background.
