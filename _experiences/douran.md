---
pageTitle: "DOURAN GROUP Co | Mohammad Haghighipoor" 
permalink: "/experiences/douran/"
rootClass: markdown-gen
---

{% assign data = site.data.douran %}

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
- {{ data.achievements[4] }}
- {{ data.achievements[5] }}

#### Contributions
{% include md_list.md data=data.contributions %}

- **Projects**
{% include collection.html 
        id = 'douran_projects'
        type = "projects"
        cardBorder = 'success'
        select = data.projects
    %}