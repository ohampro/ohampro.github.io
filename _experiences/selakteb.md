---
pageTitle: "Selakteb Co | Mohammad Haghighipoor" 
permalink: "/experiences/selakteb/"
rootClass: markdown-gen
---

{% assign docBasename = page.path | split:'/' | last | split: '.' | first %}          
{% assign data = site.data[docBasename] %}

{% include under_construction.html %}

- **Projects**
{% include collection.html 
        id = 'selakteb_projects'
        type = "projects"
        cardBorder = 'success'
        select = data.projects
    %}