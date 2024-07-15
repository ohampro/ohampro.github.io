---
pageTitle: "Selakteb Co | Mohammad Haghighipoor" 
permalink: "/experiences/selakteb/"
rootClass: markdown-gen
---

{% include page_data.html %}

### {{ data.company }}
_{{ data.country }}_

{{ data.about }}

#### My Roles
- **{{ data.role }}** &#124; {{ data.date }}

#### Achievements
- {{ data.achievements[0] }}
- {{ data.achievements[1] }}
- {{ data.achievements[2] }}

#### Contributions
{% include md_list.md data=data.contributions %}

- **Projects**
{% include collection.html 
        id = 'selakteb_projects'
        type = "projects"
        cardBorder = 'success'
        select = data.projects
    %}