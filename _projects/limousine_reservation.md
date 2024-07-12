---
labels: "Android, Java, Retrofit, GPS, Mobile app"
permalink: "/projects/limousine_reservation/"
rootClass: markdown-gen 
---

{% assign docBasename = page.path | split:'/' | last | split: '.' | first %}          
{% assign data = site.data[docBasename] %}

# {{data.title}}
<small>Mar 2019 - May 2019</small>
<br>
Associated with {{ data.client }} 
{% include card_labels.html labels="Resertrac Inc." href="/experiences/resertrac" %}


## Introduction
{{ data.introduction }}


## Project Overview
{% include md_list.md data=data.project_overview %}


## Team and Contributions
{% include md_list.md data=data.team_and_contributions %}


## Tools and Technologies
{% include card_labels.html labels=data.skills %} 


## Challenges and Solutions
{% assign challenge0 = data.challenges_and_solutions[0] %}
- **{{ challenge0.title }}**: {{ challenge0.desc }}
  - **Solution**: {{ challenge0.solution }}
  - **Impact**: {{ challenge0.impact }}

## Reflection and Learning
{% include md_list.md data=data.reflection_and_learning %}