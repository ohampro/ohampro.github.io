---
title: "Senior Java Developer"
subtitle: "2011 - 2016"
muted: "DOURAN GROUP Co | Iran" 
pageTitle: "DOURAN GROUP Co | Mohammad Haghighipoor" 
labels: "Java, JFC, GWT, Oracle Database, JBPM, JIDE components, JFC Charts, Jasper Report, BI, KPI, Swing, JSP, Hibernate, GWT, JDBC, SVN, Apache Tomcat"
permalink: "/experiences/douran/"
rootClass: markdown-gen
excerpt: "Involved in ERP development across various subsystems, with a focus on Business Intelligence and Workflow."
achievements:
    - Created a Report Generator tool, resulting in a 90% increase in development speed for 4 developer teams.
    - Developed a Release Management System, reducing deployment time by 40% and minimizing errors.
    - Designed and developed a WYSIWYG Cheque Designer, streamlining cheque printing and improving efficiency by 80% for numerous Douran ERP accountants nationwide.
    - Implemented a dynamic Hierarchical Approval workflow, eliminating the need for workflow updates due to role changes, benefiting over 30 clients.
    - Designed and developed a customized mail server, enabling over 200 ERP users in the first month to access their Cartable remotely via any mail client.
    - Mentored over 15 developers in advanced concepts of workflow and BI subsystems, resulting in a 25% increase in team performance and productivity.
---

### DOURAN GROUP Co
_Iran_
DOURAN GROUP Co is a reputable company specializing in comprehensive ERP (Enterprise Resource Planning) solutions, delivering high-quality software to various industries.


#### My Roles
- **{{ page.title }}** &#124; {{page.subtitle}}

#### Achievements
- {{ page.achievements[0] }}
- {{ page.achievements[1] }}
- {{ page.achievements[2] }}
- {{ page.achievements[3] }}
- {{ page.achievements[4] }}
- {{ page.achievements[5] }}

#### Contributions
- {{ page.excerpt }}
- **Projects**
{% include collection.html 
        id = 'douran_projects'
        type = "projects"
        cardBorder = 'success'
        select = "douran_bi, workflow_engine, enterprise_pop3_mail_server"
    %}