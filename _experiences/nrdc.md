---
pageTitle: "NRDC Co | Mohammad Haghighipoor" 
permalink: "/experiences/nrdc/"
rootClass: markdown-gen
---

{% assign docBasename = page.path | split:'/' | last | split: '.' | first %}          
{% assign data = site.data[docBasename] %}

### {{ data.company }}
_{{ data.country }}_

{{ data.about }}

#### My Roles
- **{{ data.role }}** &#124; {{ data.date }}

#### Achievements
- {{ data.achievements[0] }}
- {{ data.achievements[1] }}
- {{ data.achievements[2] }}
- {{ data.achievements[3] }}

#### Contributions
{% include md_list.md data=data.contributions %}

- **Projects**
{% include collection.html 
        id = 'nrdc_projects'
        type = "projects"
        cardBorder = 'success'
        select = data.projects
    %}