---
layout: post
title: Test Driven Development journey with the Testing Goat - Part 1
---

![Image From Unsplash - Goats on the Tree  www.useproof.com](https://images.unsplash.com/photo-1556314833-b07d6c0505c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80)

Recently, I had the chance to revisit the basics of test driven development by going through the book titled "Test Driven Development with Python" to refresh and straigthen up my practice on test driven development. We all developers must be familiar with test driven development, which means we do the test cases first and having a failing test and works toward it until it succeeded. In practice, I instead start with designing the interface and implementation and work towards the test cases.

This post is meant to be a series of reflections I had while going through the book. If you are curious and wanted to go through the same journey as I am, there is a free online version of the book [here](https://www.obeythetestinggoat.com/pages/book.html#toc).

![Test Driven Development with Python](https://learning.oreilly.com/library/cover/9781491958698/250w/)

Here are takeaways from Chapter 1 - 6:
- Test Driven Development encourages the code writer to think about what is the desired end result and it's variation without thinking too deep into implementation. By writing test cases early, we are more confident on what we implements.
- Failing early in test driven development can drive independent learning about the code dependencies and what the code needs to run properly. I had my fair share troublehooting and luckily the book also guide us on how to do so. Basicially, we need to understand how to read error trace and how we locate which particular line of code that causes it, then we understand how it works.
- Test Cases can be the one to one translation from the software requirements. In the book, the requirement is written under the functional test. In the book, the functional test is done by using Selenium.
- Each test is going through four step, which are setup, execute, verify and teardown. **setup** is where we create our test data needed for the test, then we **execute** the part that we need for the test. After the test is executed and yield result, we will **verify** if the yielded result were as expected. After the test is done, we **teardown** the data to revert the data back to clean slate for the next run of test.
- Test is separated into unit test (which test smaller part of the code) and functional testing (that simulates real user interaction)
- Test isolation is important in order to give each test a proper setup and teardown, which will affect the accuracy of execute and verify step. In chapter 5, we were introduced to functional test what was not isolated, since it was missing a proper teardown to the test. We later on apply the test mock that will allow the functional test to be teared down properly and automatically.