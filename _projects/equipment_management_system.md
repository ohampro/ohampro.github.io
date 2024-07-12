---
labels: "Java, Spring Framework, Oracle Database, Back-end, System Architecture, -Default"
permalink: "/projects/equipment_management_system/"
rootClass: markdown-gen pt-5    
---

<div class="d-none pt-5 px-3">
    <div class="row">
        <div class="col"></div>
        <div class="col-lg-6">
            <h4>My Role</h4>
            <p>Led as the Technical Lead and Architect for this project.</p>
    
            <ul>
                <li>Developed as a web-based application utilizing JavaScript, DWR, Spring, Java, and Oracle Database.</li>
                <li>Implemented innovative features including a dynamic tree category and dynamic attribute functionality.</li>
                <li>Utilized various tools and technologies including Jira, Microsoft Visio, Git, SonarQube, Oracle SQL Developer, Java, JavaScript, IntelliJ IDEA, and Eclipse IDE.</li>
            </ul>
        </div>
        <div class="col"></div>
    </div>
</div>

{% assign docBasename = page.path | split:'/' | last | split: '.' | first %}          
{% assign data = site.data[docBasename] %}

{% include under_construction_project.html style="" %}

## Skills Used

{% include card_labels.html labels=data.skills %}