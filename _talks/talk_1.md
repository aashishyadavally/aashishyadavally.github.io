---
layout: post
title: [Conference] Talk at SANER 2022.
date: 2022-03-12 00:00:00
inline: false
related_posts: false
---

|:---: | :--- |
| **Title** | Phrase2Set: Phrase-to-Set Machine Translation and its Software Engineering Applications|
| **Venue** | Virtual |
| **Abstract** | *Machine translation has been applied to software engineering (SE) problems, e.g., software tagging, language migration, bug localization, auto program repair, etc. However, machine translation primarily supports only sequence-to-sequence transformations and falls short during the translation/transformation from a phrase or sequence in the input to a set in the output. An example of such a task is tagging the input text in a software library tutorial or a forum entry text with a set of API elements that are relevant to the input. In this work, we propose Phrase2Set, a context-sensitive statistical machine translation model that learns to transform a phrase of a mixture of code and texts into a set of code or text tokens. We first design a token-to-token algorithm that computes the probabilities of mapping individual tokens from phrases to sets. We propose a Bayesian network-based statistical machine translation model that uses these probabilities to decide a trans-lation process that maximizes the joint translation probability. To achieve that, we consider the context of the tokens in the source side and that in the target side via their relative co-occurrence frequencies. We evaluate Phrase2Set in three SE applications: (1) tagging the fragments of texts in a tutorial with the relevant API elements, (2) tagging the StackOverflow entries with relevant API elements, (3) text-to-API translation. Our empirical results show that Phrase2Set achieves high accuracy and outperforms the state-of-the-art models in all three applications. We also provide the lessons learned and other potential applications.* |
| **Links** | [[video]](https://www.youtube.com/watch?v=oDpN6pkcoKc)|
