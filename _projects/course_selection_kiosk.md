---
labels: "AVR, Electronics, Embedded Systems"
permalink: "/projects/course_selection_kiosk/"
rootClass: markdown-gen pt-5 
---

{% include page_data.html %}

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
   {% include md_list.md data=hwd.component_selection indent="    " %}

2. **Circuit Design**:
   {% include md_list.md data=hwd.circuit_design indent="    " %}

3. **Assembly**:
   {% include md_list.md data=hwd.assembly indent="    " %}  


### Software Development
{% assign swd = data.implementation_details.software_development %}
1. **Programming**:
   {% include md_list.md data=swd.programming indent="    " %}  

2. **User Authentication**:
   {% include md_list.md data=swd.user_authentication indent="    " %}  

3. **Data Management**:
   {% include md_list.md data=swd.data_management indent="    " %}  

### Testing and Validation
{% assign tav = data.implementation_details.testing_and_validation %}
1. **Functional Testing**:
   {% include md_list.md data=tav.functional_testing indent="    " %}  

2. **Usability Testing**:
   {% include md_list.md data=tav.usability_testing indent="    " %}  

3. **Integration Testing**:
   {% include md_list.md data=tav.integration_testing indent="    " %}  

## Conclusion

{{ data.conclusion }}