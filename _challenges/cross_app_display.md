---
title: "Cross-App Display"
permalink: "/challenges/cross_app_display/"
rootClass: markdown-gen
excerpt: "This challenge involves embedding live elements from one application into another to create a seamless and cohesive user experience. It requires robust mechanisms for data streaming and synchronization, ensuring that the integrated components reflect the most current information while maintaining security and performance standards."
 
---

## {{page.title}} Challenge

{% include card_labels.html labels="RT Dispatch, Fidasys Inc., Challenges" href="/projects/rt_dispatch, /experiences/fidasys, /challenges" %}


### The Problem

At Fidasys Inc., clients using two disparate products faced a significant issue: they had to switch between apps frequently, often encountering password prompts after periods of inactivity. We had less than a week to solve this issue, whereas reimplementing the requested services in the first app would have taken weeks.

### The Impact

Switching between apps and frequent password prompts disrupted workflow, causing user frustration and nearly 40% of users to abandon the second app.


### Solution

Rather than fundamentally changing the products, I embedded the required UI elements of the second app into the first one. This fresh, out-of-the-box idea eliminated the need for app switching and password re-entry, and avoided reimplementing services in the first app.

Additionally, the embedded UI is displayed in a side panel only if the first app receives messages from the second app, with message broadcasting configured server-side, ensuring feature transparency.


### Implementation Approach:

- **Broadcast Receiver**: Chosen as the interim solution due to tight deadlines and minimal security risks.
- **Content Provider**: Planned for post-deadline implementation to improve security and stability.


### Implementation
- Hosted a 3-day solo development sprint to fast-track the solution.
- Implemented and tested message broadcasting between the apps.
- Developed the required data object serialization.
- Embedded the required UI of the second app into a side panel of the first app.
- Conducted thorough integration testing.


### Results
- **Improved User Retention**: Achieved a 50% increase in user retention for the second app.
- **Timely Delivery**: Met the client's requirements within the tight deadline.
- **Positive Feedback**: Received strong praise from the CEO and the team for the innovative solution and hard work.
- **Efficiency**: Saved weeks of development time through critical thinking and innovative problem-solving.


### Future-Proofing
Post-delivery, we coordinated to implement the persistent solution using the Content Provider for enhanced security and stability.