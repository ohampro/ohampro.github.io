---
pageTitle: "Fidasys Inc. | Mohammad Haghighipoor" 
permalink: "/experiences/fidasys/"
rootClass: markdown-gen
---
{% assign data = site.data.fidasys %}

### {{ data.company }}
_{{ data.country }} | {{ data.workType }}_

{{ data.about }}

#### My Roles
- **{{ data.role }}** &#124; {{ data.date }}

#### Achievements
- {{ data.achievements[0] }} {% include find_more.html href="/challenges/gps_drift" %}
- {{ data.achievements[1] }} {% include find_more.html href="/projects/rt_dispatch#outcomes-and-results" %}
- {{ data.achievements[2] }} {% include find_more.html href="/projects/rt_dispatch#challenges-and-solutions" %}

#### Contributions
{% include md_list.md data=data.contributions %}

- **Projects**
>>> {% include collection.html 
        id = 'fidasys_projects'
        type = "projects"
        cardBorder = 'success'
        select = data.projects
    %}