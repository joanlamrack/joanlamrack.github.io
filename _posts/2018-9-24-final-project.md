---
layout: post
title: Final Project @ Hacktiv8
---

![The Game of IOTs](https://i.ytimg.com/vi/8d3XEkkV6pI/maxresdefault.jpg)

Wow, I haven't updated a single post in 2 months. To catch you up to speed, here's a summary:

-   Phase 1 went smoothly, until I got sick by the end of the phase. Fortunately, I passed (into the Phase 2)!
-   Phase 2 was arguably, the most interesting shift in the bootcamp. Instead of using more vanilla javascript, here you will learn the most framework, the most in-team projects, and the most busy time in your live. I did't finished some of my portofolio, but it was fun. I get really excited for DevOps for the after effects.

Then we here are at Phase 3! React, React Native, GraphQL, D3.js are what we learnt here. Two weeks passed so fast. By the end of second week, we are preparing for the Final Project.

# The Final Project, The Smart parcel

In short, we got less than one week to finish the project. The Idea was, to have a parcel box that when is shook hard enough, will send a gps location to the admin desk. For this, I used two database; Firebase and MongoDB Atlas. Firebase database acts as a filter for updating position in the main server.

But the most challenge was the IOT hardwares. We used arduino and some modules, but at the end the Wifi module doesn't work, so we switched to raspberry pi in the last 3 days. Though we had finished the 60% of the server by the second day, the hardware and technical issues with the React Native updates kicked back some of our schedule.

Not to mention, I decided to implemented the CI/CD service, codeship. The decision were simple; it would accelerate a lot of our workflow. From github, all I had to do is just setup the test (with mocha and chai), then setup Google App Engine to make a flexible environment.

![Codeship](https://www.cloudbees.com/sites/default/files/codeship-by-cloudbees.png)

Then each time I pushed into a branch, the codeship will test the current state of the branch. If the test passed, the we can merge it into the designated branch for Codeship, the there it would be tested again and pushed into the Google App Engine.

## Lesson learned

- Managing your own expectation of in just a week to deliver MVP is not easy. It requires a lot of sense and planning. I esspecially can relate to this since I am a perfectionists!
- Be prepare for the worst. We had our share on that--which you can see in the demo ;) --

## Closing

When words is not enough, you can also checkout our demo video here:

<iframe width="560" height="315" src="https://www.youtube.com/embed/2jD8G2s8yA8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
