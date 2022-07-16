---
title: "Search-Based Testing of Reinforcement Learning"
collection: publications
permalink: /publication/testingRL
excerpt: "Search-Based Testing of Reinforcement Learning (IJCAI '22)."
date: 2022-07-25
venue: 'International Joint Conference on Artificial Intelligence'
paperurl: 'https://arxiv.org/abs/2205.04887'
citation: 'Tappler, M., <br>Cano Córdoba, F</br>., Aichernig, B. K., & Könighofer, B. (2022). Search-Based Testing of Reinforcement Learning. arXiv e-prints, arXiv-2205.'
---
Evaluation of deep reinforcement learning (RL) is inherently challenging. Especially the opaqueness of learned policies and the stochastic nature of both agents and environments make testing the behavior of deep RL agents difficult. We present a search-based testing framework that enables a wide range of novel analysis capabilities for evaluating the safety and performance of deep RL agents. For safety testing, our framework utilizes a search algorithm that searches for a reference trace that solves the RL task. The backtracking states of the search, called boundary states, pose safety-critical situations. We create safety test-suites that evaluate how well the RL agent escapes safety-critical situations near these boundary states. For robust performance testing, we create a diverse set of traces via fuzz testing. These fuzz traces are used to bring the agent into a wide variety of potentially unknown states from which the average performance of the agent is compared to the average performance of the fuzz traces. We apply our search-based testing approach on RL for Nintendo's Super Mario Bros.

[Download paper here](http://academicpages.github.io/files/paper1.pdf)
