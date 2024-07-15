---
pageTitle: "Tose Vira Afzar Co | Mohammad Haghighipoor" 
permalink: "/experiences/tva/"
rootClass: markdown-gen
---

{% include page_data.html %}

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
        type = "projects"
        cardBorder = 'success'
        select = data.projects
    %}