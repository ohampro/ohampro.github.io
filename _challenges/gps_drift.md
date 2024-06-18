---
title: "GPS drift"
permalink: "/challenges/gps_drift/"
rootClass: markdown-gen
excerpt: "Refers to the issue where the location service in a mobile app broadcasts incorrect positions that are significantly far from the majority of accurate positions."
 
---

{% include card_labels.html labels="RT Dispatch, Fidasys Inc." href="/projects/rt_dispatch, /experiences/fidasys" %}

### The Problem:

- In the RT Dispatch App project, we encountered a significant challenge with GPS drift, where users' locations were inaccurately reported due to multipath effects and poor signal quality.

### The Impact:

- This issue was particularly problematic for our app, which relied heavily on precise location data for features like geofencing, route tracking. It undermined our driver summoning accuracy by 30%.

### Solution:

- After identifying the root causes, I researched the latest practices to confidently address the issue. I then implemented a combination of signal filtering techniques to smooth out erratic location data and used the Environmental Awareness technique to employ dynamic geofencing, ignoring locations outside reasonable bounds.
- Finally, I documented the consequences and potential problems of my solution, such as increased computational load and battery usage. This analysis ensured that applying this solution would not adversely affect the overall performance and user experience of the app.

### Results:

- We saw a substantial improvement in location accuracy, reducing GPS drift by over 60%. This boosted the reliability of our app's features, especially driver summoning, and received positive feedback from users and stakeholders.

<br>

---


<details>
<summary>Research Learning on GPS drift</summary>
<div markdown="1">

## Location Drift in Mobile App Development

### Definition
**Location Drift** refers to the issue where the location service in a mobile app broadcasts incorrect positions that are significantly far from the majority of accurate positions.

### Causes
1. **Poor Signal Quality**
   - Weak or obstructed GPS signals can result in inaccurate location data.

2. **Multipath Effects**
   - **Definition**: Occurs when GPS signals bounce off surfaces like buildings, mountains, or other large structures before reaching the receiver.
   - **Effect**: Causes the GPS receiver to interpret the signal as having traveled a longer distance, leading to incorrect position calculations.

3. **Inaccuracies in Device's GPS Hardware**
   - Faulty or low-quality GPS hardware can produce erroneous location data.

### Solutions
1. **Signal Filtering and Smoothing**
   - **Technique**: Apply Kalman filtering or other statistical filters to smooth out sudden jumps in location data. Use averaging to reduce the impact of erratic signals.

2. **Using Multiple GNSS Constellations**
   - **Method**: Utilize multiple GNSS systems (e.g., GPS, GLONASS, Galileo, BeiDou) to increase the number of satellites available, improving accuracy.
   In android mobile development it is using Fused Location Provider (FLP) rather than LocationManager, FLP has designed for efficiency, uses multiple sources, optimizes power usage, and batches updates.

3. **Sensor Fusion**
   - **Technique**: Integrate data from additional sensors such as accelerometers, gyroscopes, and magnetometers to enhance location accuracy.

4. **Advanced Algorithms**
   - **Algorithm**: Implement algorithms that can detect and ignore outlier positions that deviate significantly from the expected path using machine learning models to predict and correct for multipath errors, RAIM, and ARAIM.

5. **Enhanced GPS Receivers**
   - **Method**: Use high-quality GPS receivers with better multipath mitigation capabilities, and implement dual-frequency GPS receivers to reduce multipath errors.

6. **Environmental Awareness**
   - **Technique**: Design the app to be aware of the environment and adjust expected accuracy accordingly. Use geofencing to ignore locations outside reasonable bounds.

7. **Differential GPS (DGPS) and Real-Time Kinematic (RTK)**
   - **Method**: Utilize DGPS or RTK systems with fixed ground-based reference stations to correct GPS signals in real time.

8. **Crowdsourced Data**
   - **Technique**: Use crowdsourced location data to identify and correct areas with known multipath problems. Apply corrections based on historical data from other users.

</div>
</details>