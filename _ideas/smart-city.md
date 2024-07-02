---
rootClass: markdown-gen
title: "Smart City - IoT Framework"
muted: "2016 - 2017 . Tose Vira Afzar Co"
permalink: "/projects/smart-city/"
labels: "Java, Oracle DB, Spring Framework, RSA, Android, Microsoft Visio, Axure RP, RESTful, WebSocket, MQTT, CoAP, 
Electronics, IoT, ESP8266, AVR, NFC, Mifare, RFID, QR, Camera, GPS, Bootstrap, JavaScript, HTML, CSS, Git, GitHub, Urban Futurist, -Default"
keywords: smart city, cities, Urban Futurist
techAndTools: ""
nextProject: "neoterra-cities"
excerpt: "Envision a world where every object, from household appliances to public infrastructure, 
    is interconnected and responsive to your commands and queries through your smartphone. 
    Whether it's adjusting the thermostat, checking the availability of parking spaces, 
    or even engaging with public transportation systems, the possibilities are limitless."
---

<div class="mt-4"><i>Synopsis of the</i></div>
<h1 class="mt-0" id="smart-city---iot-framework">{{page.title}}</h1>

<small>Jan 2016 - Jan 2017</small>
<br>
Associated with Tose Vira Afzar Co. 
{% include card_labels.html labels="Tose Vira Afzar Co" href="/experiences/tva" %}

<br>

---

<p class="text-center fs-italic small text-muted">To comply with my non-disclosure agreement (NDA) with the company, confidential information has been omitted or obfuscated. The information presented here does not reflect the views of the company.</p>

---

## Introduction
This smart city project integrates IoT technology with urban infrastructure using a custom mobile app and IoT kits. It aims to enhance convenience, efficiency, and sustainability, creating a seamless, secure environment where devices and systems work together to improve the quality of life for residents and businesses.


## Team and Contributions
- Project Manager
- **Full Stack Developer (My Role)**: technical consultancy and development.
- **Embedded Systems Developer (My Role)**
- **Quality Assurance**: partially contributed in creating tests and scenarios
- Business Analyst

## Project Overview

- **Duration**: 9 months.

- **Audience**:

    - **Residents**: Residents living in the city who will benefit from enhanced convenience and improved quality of life.
    - **Businesses and Manufacturers**: Companies looking to optimize their operations, monitor product health, and gain customer insights.
    - **City Administrators**: Officials responsible for urban planning, infrastructure management, and public services.
    - **Developers and Technologists**: Professionals interested in smart city innovations, big data, and data-driven decision-making.

- **Objectives**:
    - To create an interconnected urban environment where devices and infrastructure communicate seamlessly.
    - To enhance convenience and quality of life for residents.
    - To provide businesses and manufacturers with tools for operational efficiency and customer insights.
    - To promote sustainable living practices.
    - To ensure robust security and privacy for users and their sensor data.

- **Scope**:
    - **Mobile App**
        - Communicate with IoT peers (electronic kits or software clients).
        - Explore connected peers
        - Set up custom scenarios.
        - Manage a shopping cart and access a marketplace.
        - Scan QR codes and read NFC tags.
        - Integrate predefined smart city applications.
        - Ensure secure communication and data integrity.

    - **IoT Kit** 
        - Develop core firmware for the kit.
        - Provide manufacturers with IoT kits and guidelines for embedding kits in their products.
        - Support multiple connection types, including peer-to-peer (P2P) and peer-to-gateway (P2G), and G2G communications.

- **Process and Methodology**: Followed Agile methodology with iterative sprints for continuous improvement.

- **Tools and Technologies**: 
    {% include card_labels.html labels=page.labels %} 

<br>

---

## Detailed Description

### Setting Up the Smart Environment

- ##### Provision of IoT Kits
The company provides IoT kits to various manufacturers, which are then embedded in their products.

- ##### Client Setup
Clients purchase the products and install the Mifo app. By turning on the devices and scanning the QR code, clients can easily connect to the device.

- ##### Connecting Devices
Clients can connect any device to another by simply scanning it, hitting the connect button, and scanning the next device. The gateway itself is considered an IoT device by the Mifo app, allowing users to easily connect other devices to it.

- ##### Gateway Connection
Clients can connect their newly purchased products to their home or business gateway if they have one.

- ##### Control and Monitoring
The Mifo app provides control over the product and displays its status based on the manufacturer's specifications.


### Workflow Definition
The IoT kit and Mifo app offer the ability for a device to be somewhat programmable:

- **User Configuration**: Users can set timers or control flows, such as IF statements, on a connected device to execute.
- **Script Propagation**: The Mifo app propagates the required scripts to the devices, enabling them to function independently of the mobile app.


### Interfaces for Any Object

- **Smart Homes**: Control and monitor home appliances.
- **Smart Museums**: Access detailed information about museum items.
- **Smart Shopping Malls**: View the latest information about products, such as price or inventory status. Add items to a virtual cart for delivery at the exit point. Utilize vertical shelves to optimize space, and much more.
- **Kids Location Tracer**: Track the location of children for parents.
- **Language Learning Labs**: Enhance language learning through interactive tools.
- **Two-Way Radio Channel**: Enable communication through a dedicated channel.
- and more.


### City-Wide Integration
Users can use their Mifo app throughout the city, including in public infrastructure, learning institutions, healthcare facilities, and more.
- **Smart Transportation System**: Provide information about stops, buses, and schedules.
- **Smart Energy**: Optimize the synergy between electric and gas heaters within buildings using thermal sensors.
- **Clean City**: Use pollution sensors (dust or CO2) to provide data for managing traffic and industrial activities.
- **Smart Health and Medical Services**: Implement a range of services, from accident sensor kits and emergency alarms (covering streets) to monitoring patients' vital signs and facilitating medical workflows.

### Business and Manufacturer Benefits
Businesses and manufacturers can track their device or product health and status upon user grant, leading to better services and higher quality products.

### Big Data Analytics
Big data analytics involves external services that users can connect their devices to, obtaining valuable insights and results. By analyzing large datasets, these services can identify patterns and trends that help in optimizing city operations, improving services, and making data-driven decisions.

---

## Challenges and Solutions
### Challenge
We faced several challenges, such as publishing sensor data while ensuring privacy, maintaining consistent performance under varying usage conditions, and programming our kit to support different models—from mini versions with 2 outputs to more complex facilities with multiple PWM outputs. However, the most difficult challenge was implementing RSA encryption in our IoT kit due to its resource and speed limitations.

#### Solution
To overcome this, I opted for AES encryption due to its lower computational and memory requirements, and a custom protocol, which reduced the number of messages between peers as well as the message size in bytes.

#### Impact
- AES allowed the IoT kit to operate more efficiently, making better use of its limited resources.
- The data transmitted between the IoT kits and the Mifo app remains secure and protected from potential threats.

---

## Outcomes and Results
- Successful deployment of the smart city infrastructure, with widespread adoption among our clients of residents, businesses.
- Enhanced convenience and quality of life for residents, with automation and smart technologies reducing daily hassles.
- Improved operational efficiency and customer insights for businesses and manufacturers, leading to better services and products.
- Positive feedback from users about the functionality, usability, and security of the Mifo app and IoT system.


## Reflection and Learning
- The importance of robust security measures in ensuring user trust and the integrity of the smart city infrastructure.
- The value of user-friendly interfaces and seamless integration in driving adoption and satisfaction across diverse user groups.
- The need for continuous innovation and updates to address evolving user needs and technological advancements.
- The significance of collaboration with various stakeholders, including manufacturers, developers, and city administrators, in achieving the project's objectives.
- The potential of smart city technologies to create sustainable, efficient, and user-centric urban environments.