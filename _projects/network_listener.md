---
labels: "AVR, Embedded Systems, Serial Communication, Network Protocols, Electronics"
permalink: "/projects/network_listener/"
liveProjectUrl:
srcGitUrl:
rootClass: markdown-gen pt-5 
---

{% include page_data.html %}

# Network Listener Module


## Overview

**Year**: {{ data.date }}  
**Client**: {{ data.client }}

{{ data.introduction }}



## Key Features
{% include md_list.md data=data.key_features %}


## Skills Used
{% include card_labels.html labels=data.skills %}


## Photos

<div class="container text-center design-gallery gallery">
    <div class="row justify-content-center">
      <div class="col-sm-5">
        <img src="{{ data.photos[0] }}">
      </div>
      <div class="col-sm-4">
        <img src="{{ data.photos[1] }}">
        <img src="{{ data.photos[2] }}">
      </div>
    </div>
</div>

<br>

## Implementation Details
{% assign implementation = data.implementation_details %}

### Hardware Design
{% assign hardware = implementation['Hardware Design'] %}
{% include md_list.md data=hardware %}

### Firmware Development
{% assign firmware = implementation['Firmware Development'] %}
{% include md_list.md data=firmware %}

### Testing and Validation
{% assign testing = implementation['Testing and Validation'] %}
{% include md_list.md data=testing %}

{{ data.conclusion }}
