---
pageTitle: "Tose Vira Afzar Co | Mohammad Haghighipoor" 
permalink: "/experiences/tva/"
rootClass: markdown-gen
---

{% assign docBasename = page.path | split:'/' | last | split: '.' | first %}          
{% assign data = site.data[docBasename] %}

### {{ data.company }}
_{{ data.country }} | {{ data.workType }}_

{{ data.about }}

#### My Roles
- **System Architect &#124; Full Stack Java Developer &#124; Embedded Systems Developer** &#124; {{ data.date }}

#### Achievements
- {{ data.achievements[0] }} 
- {{ data.achievements[1] }} 
- {{ data.achievements[2] }} {% include find_more.html href="/projects/smart-city" %}


#### Contributions
{% include md_list.md data=data.contributions %}


- **Projects**
{% include collection.html 
        id = 'tva_projects'
        type = "ideas"
        cardBorder = 'success'
        select = data.projects
    %}