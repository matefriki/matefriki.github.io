---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

Years: [2025](#2025)・[2024](#2024)・[2023](#2023)・[2022](#2022)・[2019](#2019)・[2018](#2018)


## 2025 ##

---

<!-- 

<details>
<summary> 
<strong style="color:#52adc8">Fairness Shields: A Neurosymbolic Approach for Guaranteed Fair Decision-Making</strong> <br>
 <strong>Cano, F.</strong>, Henzinger, T.A., Könighofer, B., Kueffner, K. & Mallik, K,
<br>
AAAI Conference on Artificial Intelligence (<strong>AAAI</strong>) 2025.
</summary>
<br>
<div style="margin-left: 2em">
<strong> Abstract: </strong>
As AI-based decision-makers increasingly influence decisions that affect humans, it is crucial to ensure their decisions are fair and unbiased. Most algorithms for fair decision-making provide probabilistic guarantees of fairness over the long run, not providing any guarantees at specific intervals, such as yearly or quarterly. In this paper, we introduce a novel neurosymbolic approach to guarantee fairness in every finite run through the use of a symbolic runtime enforcer called a fairness shield. The fairness shield monitors and minimally intervenes in the decision-maker’s decisions to ensure that fairness criteria are met either within a bounded horizon or periodically, while also minimizing the costs associated with such interventions as specified by a given cost function. Given a distribution over future decisions and their costs, we present algorithms to compute fairness shields by solving a bounded-horizon optimal control problem. We present synthesis algorithms for four types of fairness shields, each tailored to different operational settings. Our empirical evaluation demonstrates the effectiveness of these shields in ensuring fairness while maintaining cost efficiency across various scenarios.
<br>
<br>
</div>
</details> -->

## 2024 ##

---



<details>
<summary> 
<strong style="color:#52adc8">Abstraction-Based Decision Making for Statistical Properties</strong> <br>
 <strong>Cano, F.</strong>, Henzinger, T.A., Könighofer, B., Kueffner, K. & Mallik, K,
<br>
International Conference on Formal Structures for Computation and Deduction (<strong>FSCD</strong>) 2024.
<a href="./../files/fscd24-paper.pdf"
style="text-decoration: none;">
<img src="./../images/pdf-svg.svg" width=16em title="pdf"/>
</a>
</summary>
<br>
<div style="margin-left: 2em">
<strong> Abstract: </strong>
Sequential decision-making in probabilistic environments is a fundamental problem with many applications in AI and economics. In this paper, we present an algorithm for synthesizing sequential decision-making agents that optimize statistical properties such as maximum and average response times. In the general setting of sequential decision-making, the environment is modeled as a random process that generates inputs. The agent responds to each input, aiming to maximize rewards and minimize costs within a specified time horizon. The corresponding synthesis problem is known to be PSPACE-hard. We consider the special case where the input distribution, reward, and cost depend on input-output statistics specified by counter automata. For such problems, this paper presents the first PTIME synthesis algorithms. We introduce the notion of statistical abstraction, which clusters statistically indistinguishable input-output sequences into equivalence classes. This abstraction allows for a dynamic programming algorithm whose complexity grows polynomially with the considered horizon, making the statistical case exponentially more efficient than the general case. We evaluate our algorithm on three different application scenarios of a client-server protocol, where multiple clients compete via bidding to gain access to the service offered by the server. The synthesized policies optimize profit while guaranteeing that none of the server’s clients is disproportionately starved of the service.
<br>
<br>
<details><summary>BibTex:</summary>
<pre>
@inproceedings{cano2024abstraction,
  author =	{Cano, Filip and Henzinger, Thomas A. and K\"{o}nighofer, Bettina and Kueffner, Konstantin and Mallik, Kaushik},
  title =	{Abstraction-Based Decision Making for Statistical Properties},
  booktitle =	{9th International Conference on Formal Structures for Computation and Deduction (FSCD 2024)},
  pages =	{2:1--2:17},
  series =	{Leibniz International Proceedings in Informatics (LIPIcs)},
  year =	{2024},
  volume =	{299},
  publisher =	{Schloss Dagstuhl -- Leibniz-Zentrum f{\"u}r Informatik},
  address =	{Dagstuhl, Germany}
}

</pre>
</details>
</div>
</details>

---

<details>
<summary> 
<strong style="color:#52adc8">soid: a Tool for Legal Accountability for Automated Decision Making </strong> <br>
Judson, S., Elacqua, M., <strong>Cano, F.</strong>, Antonopoulos, T., Könighofer, B., Shapiro, S. J. & Piskac, R.
<br>
International Conference of Computer Aided Verification (<strong>CAV</strong>) 2024.
<a href="./../files/cav24-paper.pdf"
style="text-decoration: none;">
<img src="./../images/pdf-svg.svg" width=16em title="pdf"/>
</a>
</summary>
<br>
<div style="margin-left: 2em">
<strong> Abstract: </strong>
We present soid, a tool for interrogating the decision making of autonomous agents using SMT-based automated reasoning. Relying on the Z3 SMT solver and KLEE symbolic execution engine, soid allows investigators to receive rigorously proven answers to factual and counterfactual queries about agent behavior, enabling effective legal and engineering accountability for harmful or otherwise incorrect decisions. We evaluate soid qualitatively and quantitatively on a pair of examples, i) a buggy implementation of a classic decision tree inference benchmark from the explainable AI (XAI) literature; and ii) a car crash in a simulated physics environment. For the latter, we also contribute the soid-gui, a domain-specific, web-based example interface for legal and other practitioners to specify factual and counterfactual queries without requiring sophisticated programming or formal methods expertise.
<br>
<br>
<details><summary>BibTex:</summary>
<pre>
@inproceedings{judson2024soid,
  title={soid: {A} Tool for Legal Accountability for Automated Decision Making},
  author={Judson, Samuel and Elacqua, Matthee and Cano, Filip and Antonopoulos, Timos and K{\"o}nighofer, Bettina and Shapiro, Scott J. and Piskac, Ruzica},
  booktitle = {Computer Aided Verification - 36th International Conference, {CAV}},
  series       = {Lecture Notes in Computer Science},
  volume       = {14682},
  pages        = {233--246},
  publisher    = {Springer},
  year         = {2024}
}


</pre>
</details>
</div>
</details>

---

<details>
<summary> 
<strong style="color:#52adc8">'Put the Car on the Stand': SMT-based Oracles for Investigating Decisions</strong> <br>
Judson, S., Elacqua, M., <strong>Cano, F.</strong>, Antonopoulos, T., Könighofer, B., Shapiro, S. J. & Piskac, R.
<br>
ACM Symposium on Computer Science and Law (<strong>CSLAW</strong>) 2024.
<a href="./../files/cslaw24-paper.pdf"
style="text-decoration: none;">
<img src="./../images/pdf-svg.svg" width=16em title="pdf"/>
</a>
</summary>
<br>
<div style="margin-left: 2em">
<strong> Abstract: </strong>
Principled accountability in the aftermath of harms is essential to
the trustworthy design and governance of algorithmic decision
making. Legal theory offers a paramount method for assessing culpability: putting the agent ‘on the stand’ to subject their actions
and intentions to cross-examination. We show that under minimal
assumptions automated reasoning can rigorously interrogate algorithmic behaviors as in the adversarial process of legal fact finding.
We use the formal methods of symbolic execution and satisfiability
modulo theories (SMT) solving to discharge queries about agent
behavior in factual and counterfactual scenarios, as adaptively formulated by a human investigator. We implement our framework
and demonstrate its utility on an illustrative car crash scenario.
<br>
<br>
<details><summary>BibTex:</summary>
<pre>
@inproceedings{judson2024put,
  title={'Put the Car on the Stand': {SMT}-based Oracles for Investigating Decisions},
  author={Judson, Samuel and Elacqua, Matthee and Cano, Filip and Antonopoulos, Timos and K{\"o}nighofer, Bettina and Shapiro, Scott J. and Piskac, Ruzica},
  booktitle    = {Proceedings of the Symposium on Computer Science and Law, {CSLAW}
                  2024, Boston, MA, USA, March 12-13, 2024},
  pages        = {73--85},
  publisher    = {ACM},
  year         = {2024}
}


</pre>
</details>
</div>
</details>

---


## 2023 ##

---

<details>
<summary> 
<strong style="color:#52adc8">Analyzing Intentional Behavior in Autonomous Agents under Uncertainty</strong> <br>
<strong>Cano Córdoba, F.</strong>, Judson, S., Antonopoulos, T., Bjørner, K., Shoemaker, N., Shapiro, S. J., Piskac, R. & Könighofer, B.
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
<a href="./../files/ijcai23-slides.pptx" style="text-decoration: none;">
<img src="./../images/slides-icon.svg" width=16em title="Slides"/>
</a>
<a href="https://recorder-v3.slideslive.com/?share=84865&s=0c054fdc-adfd-4ef6-8302-5a3f3710089b" style="text-decoration: none;">
<img src="./../images/video-icon.svg" width=16em title="Talk recording"/>
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


<details>
<summary> 
<strong style="color:#52adc8">Formal XAI via Syntax-Guided Synthesis</strong> <br>
Bjørner, K., Judson, S., <strong>Cano, F.</strong>, Goldman, D. , Shoemaker, N., Piskac, R. & Könighofer, B.
<br>
Bridging the Gap Between AI and Reality (<strong>AISoLA</strong>) 2023.
<a href="../files/isola23-paper.pdf"
style="text-decoration: none;">
<img src="./../images/pdf-svg.svg" width=16em title="pdf"/>
</a>
<a href="https://github.com/kbjorner/synthesis" style="text-decoration: none;">
<img src="./../images/github-icon.svg" width=16em title="Repository"/>
</a>
<a href="./../files/aisola2023-slides.pptx" style="text-decoration: none;">
<img src="./../images/slides-icon.svg" width=16em title="Slides"/>
</a>
</summary>
<br>
<div style="margin-left: 2em">
<strong> Abstract: </strong>
In this paper, we propose a novel application of syntax-guided synthesis to find symbolic representations of a model’s decision-making process, designed for easy comprehension and validation by humans. Our approach takes input-output samples from complex machine learning models, such as deep neural networks, and automatically derives interpretable mimic programs. A mimic program precisely imitates the behavior of an opaque model over the provided data. We discuss various types of grammars that are well-suited for computing mimic programs for tabular and image input data. Our experiments demonstrate the potential of the proposed method: wesuccessfully synthesized mimic programs for neural networks trained on the MNIST and the Pima Indians diabetes data sets. All experiments were performed using the SMT-based cvc5 synthesis tool.
<br>
<br>
<details><summary>BibTex:</summary>
<pre>
@inproceedings{DBLP:conf/vecos/BjornerJCGSPK23,
  author       = {Katrine Bj{\o}rner and
                  Samuel Judson and
                  Filip Cano and
                  Drew Goldman and
                  Nicholas Shoemaker and
                  Ruzica Piskac and
                  Bettina K{\"{o}}nighofer},
  title        = {Formal {XAI} via Syntax-Guided Synthesis},
  booktitle    = {AISoLA},
  series       = {Lecture Notes in Computer Science},
  volume       = {14380},
  pages        = {119--137},
  publisher    = {Springer},
  year         = {2023}
}

</pre>
</details>
</div>
</details>


---


<details>
<summary> 
<strong style="color:#52adc8">Continuous Engineering for Trustworthy Learning-Enabled Autonomous Systems</strong> <br>
Bensalem, S., Katsaros, P., Nickovic, D., Liao, B. H.-C., Ruiz Nolasco, R., Abl El Salman Ahmed, M., Beyene, T. A., <strong>Cano, F.</strong>, 
Delacourt, A., Esen, H., Forrai, A., He, W., Huang, X., Kekatos, N., Könighofer, B., Paulitsch, M., Peled, D., Ponchant, M., Sorokin, L., Tong, S., Wu, C.
<br>
Bridging the Gap Between AI and Reality (<strong>AISoLA</strong>) 2023.
<a href="https://link.springer.com/content/pdf/10.1007/978-3-031-46002-9_15.pdf"
style="text-decoration: none;">
<img src="./../images/pdf-svg.svg" width=16em title="pdf"/>
</a>
</summary>
<br>
<div style="margin-left: 2em">
<strong> Abstract: </strong>
Learning-enabled autonomous systems (LEAS) use machine learning (ML) components for essential functions of autonomous operation, such as perception and control. LEAS are often safety-critical. The development and integration of trustworthy ML components present new challenges that extend beyond the boundaries of system’s design to the system’s operation in its real environment. This paper introduces the methodology and tools developed within the frame of the FOCETA European project towards the continuous engineering of trustworthy LEAS. Continuous engineering includes iterations between two alternating phases, namely: (i) design and virtual testing, and (ii) deployment and operation. Phase (i) encompasses the design of trustworthy ML components and the system’s validation with respect to formal specifications of its requirements via modeling and simulation. An integral part of both the simulation-based testing and the operation of LEAS is the monitoring and enforcement of safety, security and performance properties and the acquisition of information for the system’s operation in its environment. Finally, we show how the FOCETA approach has been applied to realistic continuous engineering workflowsfor three different LEAS from automotive and medical application domains.
<br>
<br>
<details><summary>BibTex:</summary>
<pre>
@inproceedings{DBLP:conf/vecos/BensalemKNLNABCDEFHHKKPPPSTW23,
  author       = {Saddek Bensalem and
                  Panagiotis Katsaros and
                  Dejan Nickovic and
                  Brian Hsuan{-}Cheng Liao and
                  Ricardo Ruiz Nolasco and
                  Mohamed Abd El Salam Ahmed and
                  Tewodros A. Beyene and
                  Filip Cano and
                  Antoine Delacourt and
                  Hasan Esen and
                  Alexandru Forrai and
                  Weicheng He and
                  Xiaowei Huang and
                  Nikolaos Kekatos and
                  Bettina K{\"{o}}nighofer and
                  Michael Paulitsch and
                  Doron Peled and
                  Matthieu Ponchant and
                  Lev Sorokin and
                  Son Tong and
                  Changshun Wu},
  title        = {Continuous Engineering for Trustworthy Learning-Enabled Autonomous
                  Systems},
  booktitle    = {AISoLA},
  series       = {Lecture Notes in Computer Science},
  volume       = {14380},
  pages        = {256--278},
  publisher    = {Springer},
  year         = {2023}
}

</pre>
</details>
</div>
</details>


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

