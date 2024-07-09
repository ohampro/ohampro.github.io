---
title: "Electronic Course Selection Kiosk"
muted: "2008 | Individual Client"
labels: "AVR, Electronics, Embedded Systems"
skills: "AVR, Bascom, Graphic LCD, TouchPad, keyboard, Electronics, Embedded Systems, -Default, -ready"
permalink: "/projects/course_selection_kiosk/"
rootClass: markdown-gen pt-5
excerpt: "Intuitive Electronic Course Selection Kiosk, optimizing in-person student course management. 
 Seamless login integration for students, admins, academic advisors, and bursar, 
 it facilitates effortless course enrollment, withdrawal, and financial monitoring, 
 enhancing academic planning and administrative efficiency."
 
---


# Electronic Course Selection Kiosk

## Overview

**Year**: 2008  
**Client**: Individual Client

The Electronic Course Selection Kiosk is an intuitive system designed to optimize in-person student course management. This project aimed to streamline the process of course enrollment and administration through a user-friendly interface. The kiosk supports seamless login integration for students, administrators, academic advisors, and the bursar, facilitating effortless course enrollment, withdrawal, and financial monitoring. This enhances academic planning and administrative efficiency.

## Key Features

- **User-Friendly Interface**: Easy-to-navigate graphic LCD with touchpad and keyboard for input (integrated with a Focus FK-6200 keyboard).
- **Multi-User Support**: Different login modes for students, admins, academic advisors, and bursar.
- **Password and User Info Management**: Allows users to manage their passwords and personal information.
- **Admin Role Assignment**: Enables the assignment and management of administrative roles.
- **Financial Status Overview**: Provides a detailed overview of tuition fees, debts, and financial status.
- **Course Selection Interface**: Intuitive interface for enrolling in and withdrawing from courses.
- **Professor Definition Administration**: Manages information related to professors and their courses.
- **Program/Course Management**: Comprehensive management of academic programs and courses.
- **CSV Import/Export Functionality**: Supports importing and exporting data in CSV format.
- **Bilingual Support**: Offers user interface in both Persian and English languages.
- **PC Console**: Access to data and other functionalities using a serial port connected to the PC.


## Skills Used

{% include card_labels.html labels=page.skills %}


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

1. **Component Selection**:
   - **Microcontroller**: Chose an AVR microcontroller for its versatility and performance.
   - **Display**: Used a graphic LCD for clear and interactive display.
   - **Input Devices**: Integrated a touchpad and keyboard for user input.

2. **Circuit Design**:
   - Designed the circuit to connect the microcontroller, graphic LCD, touchpad, and keyboard.
   - Ensured robust power supply and signal integrity throughout the circuit.

3. **Assembly**:
   - Assembled the components in a compact enclosure for fisrt functional prototype.
   - Tested the hardware to ensure proper functionality and user interaction.

### Software Development

1. **Programming**:
   - Developed the kiosk software using Bascom to run on the AVR microcontroller.
   - Implemented user interfaces and functionalities for course selection, enrollment, and financial monitoring.

2. **User Authentication**:
   - Integrated login systems for students, admins, academic advisors, and the bursar.
   - Ensured secure and differentiated access to various functionalities.

3. **Data Management**:
   - Implemented real-time data updates capability for course selections and financial transactions.
   - Ensured reliable data storage and retrieval.

### Testing and Validation

1. **Functional Testing**:
   - Conducted extensive testing to verify all features and functionalities.
   - Ensured accurate course selection, enrollment, and financial monitoring.

2. **Usability Testing**:
   - Tested the user interface with different users to ensure ease of use and intuitive interaction.
   - Made adjustments based on user feedback to enhance usability.

3. **Integration Testing**:
   - Ensured seamless operation and interaction between different system parts.

## Conclusion

The Electronic Course Selection Kiosk project showcases a comprehensive approach to optimizing course management and administrative tasks. By leveraging skills in Bascom programming, AVR microcontrollers, and user interface design, the project delivers a robust and user-friendly solution for academic institutions. The kiosk enhances efficiency, streamlines processes, and provides a modern approach to course selection and enrollment.
