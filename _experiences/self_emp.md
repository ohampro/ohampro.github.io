---
pageTitle: "Self Employed | Mohammad Haghighipoor" 
permalink: "/experiences/self_emp/"
rootClass: markdown-gen
---

{% include page_data.html %}

### {{ data.company }}
_{{ data.country }}_

{{ data.excerpt }}

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

### Projects
{% include collection.html 
        id = 'self_emp_projects'
        type = "projects"
        cardBorder = 'success'
        select = data.projects
    %}