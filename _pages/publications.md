---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

Years: [2023](#2023)・[2022](#2022)・[2019](#2019)・[2018](#2018)・[2017](#2017)


## 2023 ##

---

<details>
<summary> 
<strong style="color:#52adc8">Formal XAI via Syntax-Guided Synthesis</strong> <br>
Bjørner, K., Judson, S., <strong>Cano, F.</strong>, Goldman, D. , Shoemaker, N., Piscak, R. & Könighofer, B.
<br>
International Symposium On Leveraging Applications of Formal Methods (<strong>ISoLA</strong>) 2023.
</summary>
<br>
<div style="margin-left: 2em">
<strong> Abstract: </strong>
In this paper, we propose a novel application of syntax-guided synthesis to find symbolic representations of a model’s decision-making process, designed for easy comprehension and validation by humans. Our approach takes input-output samples from complex machine learning models, such as deep neural networks, and automatically derives interpretable mimic programs. A mimic program precisely imitates the behavior of an opaque model over the provided data. We discuss various types of grammars that are well-suited for computing mimic programs for tabular and image input data. Our experiments demonstrate the potential of the proposed method: wesuccessfully synthesized mimic programs for neural networks trained on the MNIST and the Pima Indians diabetes data sets. All experiments were performed using the SMT-based cvc5 synthesis tool.
<br>
<br>
<details><summary>BibTex:</summary>
<pre>
@inproceedings{bjorner2023formal,
  title={Formal XAI via Syntax-Guided Synthesis},
  author={Bj{\o}rner, Katrine and Judson, Samuel and Cano, Filip and Goldman, Drew and Shoemaker, Nick and Piskac, Ruzica and K{\"o}nighofer, Bettina},
  booktitle = {Proceedings of the International Symposium On Leveraging Applications of Formal Methods, {ISoLA} 2023},
  year={2023}
}

</pre>
</details>
</div>
</details>

---

<details>
<summary> 
<strong style="color:#52adc8">Analyzing Intentional Behavior in Autonomous Agents under Uncertainty</strong> <br>
<strong>Cano Córdoba, F.</strong>, Judson, S., Antonopoulos, T., Bjørner, K., Shoemaker, N., Shapiro, S. J., Piscak, R. & Könighofer, B.
<br>
International Joint Conference of Artificial Intelligence (<strong>IJCAI</strong>) 2023.
<a href="https://www.ijcai.org/proceedings/2023/0042.pdf"
style="text-decoration: none;">
<img src="./../images/pdf-svg.svg" width=16em title="pdf"/>
</a>
<a href="https://github.com/filipcano/intentional-autonomous-agents" style="text-decoration: none;">
<img src="./../images/github-icon.svg" width=16em title="Repository"/>
</a>
<a href="./../files/ijcai23-poster.pdf" style="text-decoration: none;">
<img src="./../images/poster-icon.svg" width=16em title="Poster"/>
</a>
</summary>
<br>
<div style="margin-left: 2em">
<strong> Abstract: </strong>
Principled accountability for autonomous decision-making in uncertain environments requires distinguishing intentional outcomes from negligent designs from actual accidents. We propose analyzing the behavior of autonomous agents through a quantitative measure of the evidence of intentional behavior. We model an uncertain environment as a Markov Decision Process (MDP). For a given scenario, we rely on probabilistic model checking to compute the ability of the agent to influence reaching a certain event. We call this the scope of agency. We say that there is evidence of intentional behavior if the scope of agency is high and the decisions of the agent are close to being optimal for reaching the event. Our method applies counterfactual reasoning to automatically generate relevant scenarios that can be analyzed to increase the confidence of our assessment. In a case study, we show how our method can distinguish between 'intentional' and 'accidental' traffic collisions.
<br>
<br>
<details><summary>BibTex:</summary>
<pre>
@inproceedings{canocordoba2023analyzing,
  title={Analyzing Intentional Behavior in Autonomous Agents under Uncertainty},
  author={Cano C{\'o}rdoba, Filip and Judson, Samuel and Antonopoulos, Timos and Bj{\o}rner, Katrine and Shoemaker, Nicholas and Shapiro, Scott J and Piskac, Ruzica and K{\"o}nighofer, Bettina},
  booktitle = {Proceedings of the Thirty-Second International Joint Conference on Artificial Intelligence, {IJCAI} 2023},
  year={2023}
}

</pre>
</details>
</div>
</details>

---

<details>
<summary> 
<strong style="color:#52adc8">Safety Shielding under Delayed Observation</strong> <br>
<strong>Cano Córdoba, F.</strong>, Palmisano, A., Fränzle, M., Bloem, R., & Könighofer, B. 
<br>
International Conference on Automated Planning and Scheduling (<strong>ICAPS</strong>) 2023.
<a href="https://ojs.aaai.org/index.php/ICAPS/article/view/27181/26954" style="text-decoration: none;">
<img src="./../images/pdf-svg.svg" width=16em title="pdf"/>
</a>
<a href="https://github.com/filipcano/safety-shields-delayed" style="text-decoration: none;">
<img src="./../images/github-icon.svg" width=16em title="Repository"/>
</a>
<a href="./../files/icaps23-poster.pdf" style="text-decoration: none;">
<img src="./../images/poster-icon.svg" width=16em title="Poster"/>
</a>
<a href="./../files/icaps23-slides.pptx" style="text-decoration: none;">
<img src="./../images/slides-icon.svg" width=16em title="Slides"/>
</a>
</summary>
<br>
<div style="margin-left: 2em">
<strong> Abstract: </strong>
Agents operating in physical environments need to be able to handle delays in the input and output signals since neither data transmission nor sensing or actuating the environment are instantaneous. Shields are correct-by-construction runtime enforcers that guarantee safe execution by correcting any action that may cause a violation of a formal safety specification. Besides providing safety guarantees, shields should interfere minimally with the agent. Therefore, shields should pick the safe corrective actions in such a way that future interferences are most likely minimized. Current shielding approaches do not consider possible delays in the input signals in their safety analyses. In this paper, we address this issue. We propose synthesis algorithms to compute delay-resilient shields that guarantee safety under worst-case assumptions on the delays of the input signals. We also introduce novel heuristics for deciding between multiple corrective actions, designed to minimize future shield interferences caused by delays. As a further contribution, we present the first integration of shields in a realistic driving simulator. We implemented our delayed shields in the driving simulator Carla. We shield potentially unsafe autonomous driving agents in different safety-critical scenarios and show the effect of delays on the safety analysis.
<br>
<br>
<details><summary>BibTex:</summary>
<pre>
@article{Cano2023, 
  title={Safety Shielding under Delayed Observation}, 
  author={Cano Córdoba, Filip and Palmisano, Alexander and Fränzle, Martin and Bloem, Roderick and Könighofer, Bettina}, 
  journal={Proceedings of the International Conference on Automated Planning and Scheduling}, 
  volume={33},  
  number={1}, 
  pages={80-85},
  year={2023}
}

</pre>
</details>
</div>
</details>

---

## 2022 ##

---

<details>
<summary> 
<strong style="color:#52adc8">Search-Based Testing of Reinforcement Learning</strong> <br>
Tappler, M., <strong>Cano Córdoba, F.</strong>, Aichernig, B. K., & Könighofer, B. 
<br>
International Joint Conference of Artificial Intelligence (<strong>IJCAI</strong>) 2022.
<a href="https://www.ijcai.org/proceedings/2022/0072.pdf" style="text-decoration: none;">
<img src="./../images/pdf-svg.svg" width=16em title="pdf"/>
</a>
<a href="https://slideslive.com/38985048/searchbased-testing-of-reinforcement-learning" style="text-decoration: none;">
<img src="./../images/video-icon.svg" width=16em title="Talk recording"/>
</a>
</summary>
<br>
<div style="margin-left: 2em">
<strong> Abstract: </strong>
Evaluation of deep reinforcement learning (RL) is inherently challenging. Especially the opaqueness of learned policies and the stochastic nature of both agents and environments make testing the behavior of deep RL agents difficult. We present a search-based testing framework that enables a wide range of novel analysis capabilities for evaluating the safety and performance of deep RL agents. For safety testing, our framework utilizes a search algorithm that searches for a reference trace that solves the RL task. The backtracking states of the search, called boundary states, pose safety-critical situations. We create safety test-suites that evaluate how well the RL agent escapes safety-critical situations near these boundary states. For robust performance testing, we create a diverse set of traces via fuzz testing. These fuzz traces are used to bring the agent into a wide variety of potentially unknown states from which the average performance of the agent is compared to the average performance of the fuzz traces. We apply our search-based testing approach on RL for Nintendo's Super Mario Bros.

<br>
<br>
<details><summary>BibTex:</summary>
<pre>
@inproceedings{ijcai2022p0072,
  title     = {Search-Based Testing of Reinforcement Learning},
  author    = {Tappler, Martin and Cano Córdoba, Filip and Aichernig, Bernhard K. and Könighofer, Bettina},
  booktitle = {Proceedings of the Thirty-First International Joint Conference on
               Artificial Intelligence, {IJCAI-22}},
  publisher = {International Joint Conferences on Artificial Intelligence Organization},
  editor    = {Lud De Raedt},
  pages     = {503--510},
  year      = {2022},
  month     = {7},
  note      = {Main Track},
  doi       = {10.24963/ijcai.2022/72},
  url       = {https://doi.org/10.24963/ijcai.2022/72},
}

</pre>
</details>
</div>
</details>

---

## 2019 ##

---

<details>
<summary> 
<strong style="color:#52adc8">An Introduction to Polytope Theory through Ehrhart's Theorem</strong> <br>
<strong>Cano Córdoba, F.</strong>
Master Thesis, 2019.
<a href="https://upcommons.upc.edu/handle/2117/171328">
<img src="./../images/pdf-svg.svg" width=16em title="pdf"/>
</a>
</summary>
<br>
<div style="margin-left: 2em">
<strong> Abstract: </strong>
A classic introduction to polytope theory is presented, serving as the foundation to develop more advanced theoretical tools, namely the algebra of polyhedra and the use of valuations. The main theoretical objective is the construction of the so called Berline-Vergne valuation. Most of the theoretical development is aimed towards this goal. A little survey on Ehrhart positivity is presented, as well as some calculations that lead to conjecture that generalized permutohedra have positive coefficients in their Ehrhart polynomials. Throughout the thesis three different proofs of Ehrhart's theorem are presented, as an application of the new techniques developed.

<br>
<br>
<details><summary>BibTex:</summary>
<pre>
@mastersthesis{cano2019introduction,
  title={An Introduction to Polytope Theory through Ehrhart's Theorem},
  author={Cano C{\'o}rdoba, Filip},
  type={M.S. thesis},
  year={2019},
  school={Universitat Polit{\`e}cnica de Catalunya}
}
</pre>
</details>
</div>
</details>

---

## 2018 ##

---

<details>
<summary> 
<strong style="color:#52adc8">Theoretical study of artificial neural networks</strong> <br>
<strong>Cano Córdoba, F.</strong> Bachelor Thesis, 2018.
<a href="https://upcommons.upc.edu/bitstream/handle/2117/121051/memoria.pdf">
<img src="./../images/pdf-svg.svg" width=16em title="pdf"/>
</a>
</summary>
<br>
<div style="margin-left: 2em">
<strong> Abstract: </strong>
The basic structure and definitions of artificial neural networks are exposed, as an introduction to Machine Learning algorithms. The theoretical description is emphasized and representation power of both shallow and deep networks is studied, proving the so called \textit{Universality Theorem}. Then the properties and limitations of learning algorithms are studied. More specifically, the \textit{No Free Lunch Theorem} is presented and proven, and then some recent approaches to the open problem of convergence of Stochastic Gradient Descent applied to neural networks are presented. Finally, a concept of forgetting in neural networks is introduced and some results on this model are given throughout the thesis.

<br>
<br>
<details><summary>BibTex:</summary>
<pre>
@mastersthesis{cano2018theoretical,
  title={Theoretical study of artificial neural networks},
  author={Cano C{\'o}rdoba, Felipe},
  type={B.S. thesis},
  year={2018},
  school={Universitat Polit{\`e}cnica de Catalunya}
}
</pre>
</details>
</div>
</details>

---

## 2017 ##

---

<details>
<summary> 
<strong style="color:#52adc8">Theory of Intelligence with Forgetting</strong> <br>
<strong>Cano Córdoba, F.</strong> , Sarma S, Subirana B.
<br>
Center For Brain Minds and Machines (CBMM) Memo no. 71, 2017.
<a href="https://dspace.mit.edu/bitstream/handle/1721.1/113608/CBMM-Memo-071.pdf">
<img src="./../images/pdf-svg.svg" width=16em title="pdf"/>
</a>
</summary>
<br>
<div style="margin-left: 2em">
<strong> Abstract: </strong>
In [42] we suggested that any memory stored in the human/animal brain is forgotten following the Ebingghaus curve – in this follow-on paper, we define a novel algebraic structure, a Forgetting Neural Network, as a simple mathematical model based on assuming parameters of a neuron in a neural network are forgotten using the Ebbinghaus forgetting curve. We model neural networks in Sobolev spaces using [35] as our departure point and demonstrate four novel theorems of Forgetting Neural Networks: theorem of non-instantaneous forgetting, theorem of universal forgetting, curse of forgetting theorem, and center of mass theorem. We also proof the novel decreasing inference theorem which we feel is relevant beyond Ebbinghaus forgetting: compositional deep neural networks cannot arbitrarily combine low level “features” – meaning only certain arrangements of features calculated in intermediate levels can show up in higher levels. This proof leads us to present the possibly most efficient representation of neural networks’ “minimal polynomial basis layer” (MPBL) since our basis construct can generate n polynomials of order m using only 2m + 1 + n neurons. As we briefly discuss in the conclusion, there are about 10 similarities between forgetting neural networks and human forgetting and our research elicits more questions than it answers and may have implications for neuroscience research including our understanding of how babies learn (or, perhaps, forget), including what we call the baby forgetting conjecture.

<br>
<br>
<details><summary>BibTex:</summary>
<pre>
@techreport{cano2017theory,
  title={Theory of intelligence with forgetting: Mathematical theorems explaining human universal forgetting using “forgetting neural networks”},
  author={Cano-C{\'o}rdoba, Felipe and Sarma, Sanjay and Subirana, Brian},
  year={2017},
  institution={Center for Brains, Minds and Machines (CBMM)}
}
</pre>
</details>
</div>
</details>
