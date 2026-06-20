## Lesson 1: Positional Number systems & Conversions

Digital systems, unlike humans, rely on binary (base-2), octal (base-8) and hexadecimal (base-16) representations.

### 1. Positional Notation & Base

Any number in base (radix) $r$ can be expressed as a power series:

```math
N = a_{n-1}r^{n-1} + a_{n-2}r^{n-2} + \dots + a_1r^1 + a_0r^0 + a_{-1}r^{-1} + a_{-2}r^{-2} + \dots + a_{-m}r^{-m}
```

Where:

- $r$ is the radix (base).
- $a_j$ are coefficients, restricted to the range $0 \le a_j \le r - 1$.
- The radix point separates the integer part from the fractional part.

### 2. Conversion Methodologies

#### A. Base-$r$ to Decimal

To convert any number from base-$r$ to decimal, expand it using the power series and and evaluate the sum in decimal.

#### B. Decimal to Base-$r$ (Integer Part)
To convert the decimal integer to base-$r$, use **successive division**:

1. Divide the decimal integer by $r$.
2. Record the remainder. The remainder becomes a coefficient of the target base, starting with $a_0$ (LSD[^id1]).

3. Use the integer quotient from the division as the new dividend.
4. Repeat the process until the integer quotient is $0$. The final remainder is $a_{n-1}$ (MSD[^id2]).

#### C. Decimal to Base-$r$ (Fractional Part)

To convert a decimal fraction to base-$r$, use **successiv multiplication**:

1. Multiply the fractional part by $r$.
2. Record the integer part of the product, it will be the fractional coefficient, starting with $a_{-1}$, then $a_{-2}$ and so on.
3. The remaining fractional part will be used as the new fractioanl part in step 1.
4. Repeat until the fractional part becomes $0$ or until desired precision is achieved.

---

## Examples

### Example 1: Convert $(109.625)_{10}$ to binary

**Step 1: Convert the integer part $(109)$**

```math
\begin{array}{rcccl}
109 / 2 & = & 54 & \text{remainder} & 1 \quad (\text{LSD, } a_0) \\
54 / 2  & = & 27 & \text{remainder} & 0 \quad (a_1) \\
27 / 2  & = & 13 & \text{remainder} & 1 \quad (a_2) \\
13 / 2  & = & 6  & \text{remainder} & 1 \quad (a_3) \\
6 / 2   & = & 3  & \text{remainder} & 0 \quad (a_4) \\
3 / 2   & = & 1  & \text{remainder} & 1 \quad (a_5) \\
1 / 2   & = & 0  & \text{remainder} & 1 \quad (\text{MSD, } a_6) \\
\end{array}
```

Reading from bottom to top:

```math
(109)_{10} = (1101101)_2
```

**Step 2: Convert the fractional part $(109)$**

```math
\begin{array}{rcccl}
0.625 \times 2 & = & 1.250 & \to \text{Integer part: } 1 \quad (a_{-1}) \\
0.250 \times 2 & = & 0.500 & \to \text{Integer part: } 0 \quad (a_{-2}) \\
0.500 \times 2 & = & 1.000 & \to \text{Integer part: } 1 \quad (a_{-3}) \\
\end{array}
```

Reading the fractional parts from top to bottom:

```math
(0.625)_{10} = (0.101)_2
```

**Step 3: Combine the results**

```math
(109.625)_{10} = (1101101.101)_2
```

### Example 2: Convert $(3B2.4)_{12}$ (base-12) to decimal

in base-12, $\text{A} = 10$ and $\text{B} = 11$

We expand it using powers of 12:

```math
\begin{align}
N &= 3 \times 12^2 + 11 \times 12^1 + 2 \times 12^0 + 4 \times 12^{-1} \\
&= 3 \times 144 + 11 \times 12 + 2 \times 1 + 4 \times \frac{1}{12} \\
&= 432 + 132 + 2 + \frac13\\
&\approx 566.33333
\end{align}
```

Thus:

```math
(3B2.4)_{12} \approx (566.33)_{10}
```

---

## Practice

**Exercise 1:**

Convert the decimal number $(219.375)_{10}$ to octal (base-8).

<details><summary>Solution:</summary>
<img src="https://raw.githubusercontent.com/m-sarabi/computer-learning-markdown/refs/heads/main/digital-design/Chapter01/E01-01.png">
</details>

---
**Exercise 1:**

Convert the base-6 number $(532.14)_6$ to its decimal equivalent.

<details><summary>Solution:</summary>
<img src="https://raw.githubusercontent.com/m-sarabi/computer-learning-markdown/refs/heads/main/digital-design/Chapter01/E01-02.png">
</details>
---

[^id1]: least signigicant digit
[^id2]: most significant digit