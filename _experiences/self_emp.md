---
pageTitle: "Self Employed | Mohammad Haghighipoor" 
permalink: "/experiences/self_emp/"
rootClass: markdown-gen
---

{% assign docBasename = page.path | split:'/' | last | split: '.' | first %}          
{% assign data = site.data[docBasename] %}

{% include under_construction.html %}

- **Projects**
{% include collection.html 
        id = 'self_emp_projects'
        type = "projects"
        cardBorder = 'success'
        select = data.projects
    %}