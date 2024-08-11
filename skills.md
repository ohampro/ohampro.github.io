---
layout: single
title: Skills
rootClass: markdown-gen
permalink: "/skills/"
description: Mohammad Haghighipoor competencies.
keywords: skills
---

{% assign technical = site.data.oham.skills['Technical Skills'] %}

{% include card_labels.html btnClass="btn-lg mt-1" 
    labelsIGNORED="0-1 year, 1-3 years, 3-5 years, 5+ years" href="" %}

Participated in the entire software development lifecycle, including scoping, design, code, code reviews, testing, deployment and software maintenance.

### Technical Skills
{% assign languages = technical['Programming Languages'][0] %}

- **Programming Languages**
{% include card_labels.html class="ms-5" btnClass="btn-lg mt-1" btnColor="btn-outline-dark" labels=languages %}

<br>

{% assign backend = technical['Back-end Development'] %}
{% assign backend0 = backend[0] %}
{% assign backend1 = backend[1] %}

- **Back-end Development**
    - {% include card_labels.html btnClass="btn-lg mt-1" btnColor="btn-outline-dark" labels=backend0 %}

    - {% include card_labels.html btnClass="btn-lg mt-1" btnColor="btn-outline-dark" labels=backend1 %}

<br>
{% assign frontend = technical['Front-end Development'][0] %}

- **Front-end Development**
{% include card_labels.html class="ms-5" btnClass="btn-lg mt-1" btnColor="btn-outline-dark"
    labels=frontend %}

<br>
{% assign mobile = technical['Mobile Application Development'][0] %}

- **Mobile Application Development**
{% include card_labels.html class="ms-5" btnClass="btn-lg mt-1" btnColor="btn-outline-dark"
    labels=mobile %}

<br>
{% assign embedded = technical['IoT & Embedded Systems Development'][0] %}

- **IoT & Embedded Systems Development**
{% include card_labels.html class="ms-5" btnClass="btn-lg mt-1" btnColor="btn-outline-dark"
    labels=embedded %}

<br>
{% assign sdev = technical['Software Development'] %}
{% assign sdev0 = sdev[0] %}
{% assign sdev1 = sdev[1] %}
{% assign sdev2 = sdev[2] %}

- **Software Development**
    - {% include card_labels.html btnClass="btn-lg mt-1" btnColor="btn-outline-dark" labels=sdev0 %}

    - {% include card_labels.html btnClass="btn-lg mt-1" btnColor="btn-outline-dark" labels=sdev1 %}
    
    - {% include card_labels.html btnClass="btn-lg mt-1" btnColor="btn-outline-dark" labels=sdev2 %}

<br>
{% assign design = technical['System Architecture & Design'][0] %}

- **System Architecture & Design**
{% include card_labels.html class="ms-5" btnClass="btn-lg mt-1" btnColor="btn-outline-dark" labels=design %}

{% assign softSkills = site.data.oham.skills['Soft Skills'][0] %}

### Soft Skills
{% include card_labels.html class="ms-5" btnClass="btn-lg mt-1" btnColor="btn-outline-dark"
labels=softSkills %}

<br>


### Language
- **English**: Professional working proficiency
- **Persian**: Native