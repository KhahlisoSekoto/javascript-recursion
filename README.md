# JavaScript Recursion & Sorting Challenges

This project is part of my learning journey through The Odin Project's Full Stack JavaScript curriculum.

I worked on two Computer Science topics: **recursion and sorting algorithms**. The goal was to practise solving problems using JavaScript and understand how recursive functions work.

## 🚀 Projects Implemented

### 1. Fibonacci Sequence (`fibonacci.js`)

I created two functions that return an array containing the first `n` Fibonacci numbers.

- **Iterative (`fibs`):** Uses a `for` loop to generate Fibonacci numbers by adding the previous two numbers.
- **Recursive (`fibsRec`):** Uses recursion to generate Fibonacci numbers. The function calls itself until it reaches a base case, then returns the results.

This exercise helped me understand the difference between using loops and recursion to solve the same problem.

### 2. Merge Sort Algorithm (`mergeSort.js`)

I implemented the Merge Sort algorithm using a method called **Divide and Conquer**.

The algorithm works in two steps:

- **Split:** The array is divided into smaller halves until each subarray contains only one element.
- **Merge:** The smaller arrays are combined back together in sorted order by comparing their values.

This exercise helped me practise recursion and understand how a sorting algorithm works.

## 🛠️ What I Learned & Debugging Challenges

Recursion was one of the most challenging topics for me. I made several mistakes while working on these exercises, but debugging helped me understand my code better.

Here are some of the problems I faced:

- **Understanding the Call Stack:** I used `console.log()` to follow how recursive functions call themselves and return their results.

- **Stack Overflow Error:** I encountered `RangeError: Maximum call stack size exceeded` because a variable wasn't changing during recursion. This prevented my function from reaching its base case. I fixed the problem by correcting how the variable was updated.

- **Infinite Loop in Merge Sort:** I forgot to update a pointer while comparing elements in the arrays. This caused an infinite loop. I fixed it by making sure the pointer moved forward after processing an element.

- **Returning `undefined`:** One of my functions returned `undefined` instead of an array. This caused problems when other parts of my code tried to use the result. I learned why returning the correct value from a base case is important.

 ### 💡 My Biggest Takeaway

One of the biggest lessons I learned is that **recursion needs a clear base case and a way to move toward that base case**.

I also learned that debugging is an important part of programming. Sometimes a small mistake, like forgetting to update a variable, can stop the entire function from working.

These exercises challenged me, but they helped me improve my problem-solving skills and become more comfortable working with JavaScript.

## 📦 How to Run

Make sure you have Node.js installed on your computer.

**Run the Fibonacci script:**

```bash
node fibonacci.js
```

**Run the Merge Sort script:**

```bash
node mergeSort.js
```

## 📚 Learning Resource

This project was completed as part of [The Odin Project](https://www.theodinproject.com/) Full Stack JavaScript curriculum.