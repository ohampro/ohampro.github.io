---
title: "Full Stack Java Developer"
subtitle: "2016 - 2019"
muted: "NRDC Co | Iran"
pageTitle: "NRDC Co | Mohammad Haghighipoor" 
labels: "Java, Oracle Database, SQL, PL/SQL, Java Enterprise Edition, Axure RP, Spring Framework, SonarQube, Gradle, Maven, JavaScript, HTML, CSS, SVN, Agile, Jira, JBoss"
permalink: "/experiences/nrdc/"
rootClass: markdown-gen
excerpt: "During this period, I deepened my understanding of distributed systems and real-time stream processing with Kafka, gained insights into ESBs, and shared hands-on experiences in various technologies."
achievements:
    - Successfully led a diverse group of developers, significantly enhancing team performance and code quality across multiple projects.
    - Designed and deployed a robust multi-platform Push Notification Solution with delivery guarantees and automatic client reconnect, achieving 99.9% message delivery success and significant positive user feedback.
    - Designed and led the Monitoring and Control System project, achieving the first functional test in under four months and impressing top stakeholders with demonstrated feasibility.
    - Implemented a comprehensive Equipment Management System, eliminating significant manual work of classifying and maintaining equipment status within the first 2 months.
---

### NRDC Co
_Iran_
NRDC Co is a leading company, focused on providing software development services to a diverse range of organizations.


#### My Roles
- **{{ page.title }}** &#124; {{page.subtitle}}

#### Achievements
- {{ page.achievements[0] }}
- {{ page.achievements[1] }}
- {{ page.achievements[2] }}
- {{ page.achievements[3] }}

#### Contributions
- {{ page.excerpt }}
- **Projects**
{% include collection.html 
        id = 'nrdc_projects'
        type = "projects"
        cardBorder = 'success'
        select = "driver_assistance_center, equipment_management_system, push_notification, sensors_mgm"
    %}