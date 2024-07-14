---
pageTitle: "Resertrac Inc. | Mohammad Haghighipoor" 
permalink: "/experiences/resertrac/"
rootClass: markdown-gen
---

{% include page_data.html %}

### {{ data.company }}
_{{ data.country }} | {{ data.workType }}_

{{ data.about }}

#### My Roles
- **{{ data.role }}** &#124; {{ data.date }}


#### Achievements
- {{data.achievements[0]}}
- {{data.achievements[1]}}
- {{data.achievements[2]}}



#### Contributions
{% include md_list.md data=data.contributions %}

- **Projects**
>>> {% include collection.html 
        id = 'resertrac_projects'
        type = "projects"
        cardBorder = 'success'
        select = data.projects
    %}