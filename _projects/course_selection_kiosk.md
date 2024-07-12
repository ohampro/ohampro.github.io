---
labels: "AVR, Electronics, Embedded Systems"
permalink: "/projects/course_selection_kiosk/"
rootClass: markdown-gen pt-5 
---

{% assign data = site.data.course_selection_kiosk %}

# {{ data.title }}

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
      <div class="col-sm-3">
        <img src="/assets/images/course_selection_kiosk/3.jpg" 
            alt="Front view of the kiosk showing the graphic LCD and touchpad interface.">
      </div>
      <div class="col-sm-6">
        <img src="/assets/images/course_selection_kiosk/2.jpg"
            alt="Side view highlighting the sleek design and keyboard placement.">
        <img src="/assets/images/course_selection_kiosk/1.jpg"
            alt="User interacting with the kiosk, demonstrating course selection and enrollment.">
      </div>
    </div>
</div>

<br>

## Implementation Details


### Hardware Design
{% assign hwd = data.implementation_details.hardware_design %}

1. **Component Selection**:
   {% include md_list.md data=hwd.component_selection ident="    " %}

2. **Circuit Design**:
   {% include md_list.md data=hwd.circuit_design ident="    " %}

3. **Assembly**:
   {% include md_list.md data=hwd.assembly ident="    " %}  


### Software Development
{% assign swd = data.implementation_details.software_development %}
1. **Programming**:
   {% include md_list.md data=swd.programming ident="    " %}  

2. **User Authentication**:
   {% include md_list.md data=swd.user_authentication ident="    " %}  

3. **Data Management**:
   {% include md_list.md data=swd.data_management ident="    " %}  

### Testing and Validation
{% assign tav = data.implementation_details.testing_and_validation %}
1. **Functional Testing**:
   {% include md_list.md data=tav.functional_testing ident="    " %}  

2. **Usability Testing**:
   {% include md_list.md data=tav.usability_testing ident="    " %}  

3. **Integration Testing**:
   {% include md_list.md data=tav.integration_testing ident="    " %}  

## Conclusion

{{ data.conclusion }}