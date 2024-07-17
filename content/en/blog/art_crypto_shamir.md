---
title: Shamir Secret Sharing, a cryptographic matter.
description: A quick exploration in the maths behind this algorithm
image:
  src: https://media.paxpar.tech/illus_art_shamirMath.png
authors:
  - name: Thierry Lacroix
date: 2024-06-11
---

# Shamir Secret Sharing, a cryptographic matter.

I didn't think I would have to open my math books this summer, yet here I am.

Cryptography is such a deep and fascinating branch of mathematics; I'm always very interested in widening my knowledge.

At the early stages of my work with @arundo.tech, I had the opportunity to discover the Shamir Secret Sharing algorithm, which can be used in some cases while working with sensitive PDF documents.

But how does it work?

In this article, I will focus on the mathematical approach using an easy case where we want to create a quorum of 2 among 3 parties.

The algorithm uses one of the magic powers of math: **polynomials**!    

Let $s$ be the number I want to encrypt. I will create a line whose equation is $f(x)=px+s$, with $p$ being a random number and $f(0)=s$. Now I can assign each party a share of the secret as a point on the line with coordinates $(x,f(x))$, where $x$ is a number that I choose.
 
![Exemple GeoGebra](https://media.paxpar.tech/illus_art_shamirMath.png)

**Warning!** Each party must be identified with a unique $x$ value

Now any party can plot their point on a graph, but since it is alone, it cannot access the secret. This is because, for the party, the line can be rotated in any direction. 
But, if 2 parties get together and share their part of the secret, then those two parties can trace the line and find the secret. This means that they can solve the system of 2 equations:

$$
\left\{\begin{matrix}
    px_1+s = y_1 \\
    px_2+s = y_2
\end{matrix}
\right.
$$

Hence discovering the values of $p$ and $s$. 


This very easy example shows the Shamir Secret Sharing algorithm for a quorum of 2 among $n$ parties.  
The method for any quorum of $m$ among $n$ parties is the same, but the $f$ function we are using must be a $m-1$ degree polynomial.

Thanks for reading this article. Don't forget to follow my page and take a look at my other articles on Shamir Secret Sharing for a better understanding of this algorithm!

Source : 
https://en.wikipedia.org/wiki/Shamir%27s_secret_sharing
