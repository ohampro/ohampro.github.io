---
labels: "Electronics, Schematic Diagramming, Embedded Systems"
permalink: "/projects/ivr/"
rootClass: markdown-gen pt-5    
---

{% assign docBasename = page.path | split:'/' | last | split: '.' | first %}          
{% assign data = site.data[docBasename] %}

{% include under_construction_project.html %}

## Skills Used

{% include card_labels.html labels=data.skills %}