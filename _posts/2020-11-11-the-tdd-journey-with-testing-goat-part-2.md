---
layout: post
title: Test Driven Development journey with the Testing Goat - Part 2 
---

![Image From Unsplash - Goats on the Tree  www.useproof.com](https://images.unsplash.com/photo-1556890040-19349f97e402?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)

Continuing the journey for testing goat, we go on ward to chapter 7, 8 and 12. I skipped a few chapter as I am more interested in practical sense.

Here are some interesting things that I learned:
- Test Organization can help you to isolate test, make it easier to spot duplication, and closer to mapping one on one to the business requirement. when writing test, it is important also watch over dependencies that can be used by other test. Test re Organization will be more pronounced the importance when 
- Red, Green, Refactor is a mantra used in Test Driven development. Often times, we forgot to the Refactor part. Test Driven Development is meant to set foundation of unit testing, so we can refactor, knowing there is a safety net that will ensure that the application is running as it was.

![Red Green Refactor](https://s3.amazonaws.com/mokacoding/2018-09-18-red-green-refactor.jpg)

- Although we wanted to enforce TDD, this doesn't mean that we need to test constants, as well. what is categorized as constants? all variables that doesn't change, such as testing layout or styling. Enforcing test case for this will result in a more fragile testing.