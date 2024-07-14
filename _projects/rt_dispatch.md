---
rootClass: markdown-gen
labels: "Android, Java, Flutter, GPS, Mobile app"
permalink: "/projects/rt_dispatch/"
liveProjectUrl: https://play.google.com/store/apps/details?id=com.resertrac.rtdispatch&hl=en
---

{% include page_data.html %}

# RT Dispatch Mobile App
<small>{{ data.date }}</small>
<br>
Associated with Fidasys Inc. 
{% include card_labels.html labels="Fidasys Inc." href="/experiences/fidasys" %}


## Introduction
{{ data.introduction }}


## Project Overview
{% include md_list.md data=data.project_overview %}

## Team and Contributions
{% include md_list.md data=data.team_and_contributions %}

## Detailed Description
{% include md_list.md data=data.detailed_description limit=2 %}
- **Tools and Technologies**:
    {% include card_labels.html labels=data.skills %} 


## Challenges and Solutions
{% include challenges_and_solutions.md data=data.challenges_and_solutions 
href="/challenges/gps_drift, /challenges/cross_app_display" %}

    
## Key Contributions
{% include md_list.md data=data.key_contributions %}


## Outcomes and Results
{% include outcomes_and_results.md data=data.outcomes_and_results %}


## Reflection and Learning
{% include md_list.md data=data.reflection_and_learning %}
