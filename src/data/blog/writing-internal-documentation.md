---
title: "Writing Internal Documentation"
date: "2018-12-17"
author: "Thomas Vestdam"
media: "Paper"
link: "https://hillside.net/europlop/HillsideEurope/Papers/EuroPLoP2001/2001_Vestdam_WritingInternalDocumentation.pdf"
tags: ["programming", "notes", "paper"]
---

## Introduction

This short paper, which really read more like an article, was all about keeping code documented. It outlined common issues with documentation and how to avoid them. Even though I have no experience with keeping code documented, there were still a lot of things to draw from.

> Internal documentation addresses and maintains the program understanding and is intended for current and future developers. Current developers document thoughts and rationales behind a program, so future developers can gain understanding of the program, without resorting to reverse engineering (either manual or “automatic”).

## Factors at Play

- **Cost:** The production of documentation required extra time/effort and raises the cost of program development. The payoff is that the software will be of a higher quality & easier to maintain, increasing its lifespan
- **Quality:** Consistently documented software will be of a higher quality because developers will reflect more carefully about source code
- **Maintainability:** Well-documented code is easier to maintain
- **Difficulty:** It's not easy to write documentation. Writing good documentation is even harder.
- **Dislike:** People don't like writing documentation!

## Challenges of Documentation

Basic principles to writing good documentation:
1. Let the documentation structure follow the program structure
2. Record choices made during development (program history) so no time is wasted in the future
3. Documentation should be revisited & refactored regularly
4. Create templates for documentation based on aspects that need to be addressed

**Problem**: How do you find the relevant documentation for a given part of code?
*Solution*: Separate the documentation and program, and use typed links to navigate between the two.

**Problem**: What needs to be documented?
*Solution*: The most difficult thing to decipher from source code is the interaction between program entities, and how method calls *transverse* the program structure. On top of that, if a programmer has no understanding of relationships across a program, he/she can't predict how a change will affect other areas of the program. So, start with those, and as you go relate the relationships to their relevant program fragments.

## Conclusion

This had some good things to take away. A good intro to the challenges of writing documention to prepare me for future documentation writing.