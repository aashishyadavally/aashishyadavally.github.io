---
layout: post
title: \[Conference\] Talks at ESEC/FSE 2023.
date: 2023-12-06 00:00:00
inline: false
related_posts: false
---

|:---: | :--- |
| **Title** | Commit-Level, Neural Vulnerability Detection and Assessment|
| **Venue** | San Francisco, CA, USA. |
| **Abstract** | *Software Vulnerabilities (SVs) are security flaws that are exploitable in cyber-attacks. Delay in the detection and assessment of SVs might cause serious consequences due to the unknown impacts on the attacked systems. The state-of-the-art approaches have been proposed to work directly on the committed code changes for early detection. However, none of them could provide both commit-level vulnerability detection and assessment at once. Moreover, the assessment approaches still suffer low accuracy due to limited representations for code changes and surrounding contexts. We propose a Context-aware, Graph-based, Commit-level Vulnerability Detection and Assessment Model, VDA, that evaluates a code change, detects any vulnerability and provides the CVSS assessment grades. To build VDA, we have key novel components. First, we design a novel context-aware, graph-based, representation learning model to learn the contextualized embeddings for the code changes that integrate program dependencies and the surrounding contexts of code changes, facilitating the automated vulnerability detection and assessment. Second, VDA considers the mutual impact of learning to detect vulnerability and learning to assess each vulnerability assessment type. To do so, it leverages multi-task learning among the vulnerability detection and vulnerability assessment tasks, improving all the tasks at the same time. Our empirical evaluation shows that on a C vulnerability dataset, VDA achieves 25.5% and 26.9% relatively higher than the baselines in vulnerability assessment regarding F-score and MCC, respectively. In a Java dataset, it achieves 31% and 33.3% relatively higher than the baselines in F-score and MCC, respectively. VDA also relatively improves the vulnerability detection over the baselines from 13.4–322% in F-score.* |
| **Links** | [[slides]](https://aashishyadavally.github.io/assets/pdf/slides-esecfse2023-(2).pdf) |

---

|:---: | :--- |
| **Title** | DeMinify: Neural Variable Name Recovery and Type Inference|
| **Venue** | San Francisco, CA, USA. |
| **Abstract** | *To avoid the exposure of original source code, the variable names deployed in the wild are often replaced by short, meaningless names, thus making the code difficult to understand and be analyzed. We introduce DeMinify, a Deep-Learning (DL)-based approach that formulates such recovery problem as the prediction of missing features in a Graph Convolutional Network–Missing Features. The graph represents both the relations among the variables and the relations among their types, in which the names or types of some nodes are missing. Moreover, DeMinify leverages dual-task learning to propagate the mutual impact between the learning of the variable names and that of their types. We conducted experiments to evaluate DeMinify in both name recovery and type prediction on a Python dataset with 180k methods and a JavaScript (JS) dataset with 322k files. For variable name prediction, in 76.7% and 81.6% of the cases in Python and JS code respectively, DeMinify can predict correctly the variables’ names with a single suggested name. DeMinify relatively improves 15.3%–40.7% and 7.7%–49.7% in top-1 accuracy over the state-of-the-art variable name recovery approaches for Python and JS code, respectively. It also relatively improves 14.5%–51.9% in top-1 accuracy over the existing type prediction approaches. Our experimental results showed that learning of data types helps improve variable name recovery and vice versa.* |
| **Links** | [[slides]](https://aashishyadavally.github.io/assets/pdf/slides-esecfse2023-(1).pdf) |
