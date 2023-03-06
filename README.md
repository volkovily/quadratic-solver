# Quadratic Equation Solver

This is a simple console application that solves quadratic equations.

 ## How to build and run the project

Install dependencies by running:
```bash
$ npm install
```
To run the application in interactive mode:
```bash
$ node index.js
```
To run the application in non-interactive mode:
```bash
$ node index.js <file>
```

## File format for non-interactive mode

The file for non-interactive mode should contain three space-separated numbers representing the coefficients `a`, `b`, and `c`.

Here is how file `input.txt` could look like:
```
2 3.5 -1
```

## How it works
**Interactive mode:**
```
$ node index.js
a = 2
b = 5
c = -3
The equation is: (2)x^2 + (5)x + (-3) = 0
There are 2 roots:
x1 = 0.5
x2 = -3
```
> **Note**: `a`, `b`, and `c` are input by user:

**Non-interactive mode:**
```
$ node index.js input.txt
The equation is: (2)x^2 + (3.5)x + (-1) = 0
There are 2 roots:
x1 = 0.25
x2 = -2
```

## Revert commit
There is a [revert commit](https://github.com/volkovily/quadratic-solver/commit/5a55302dbcd4d7c4bc5669601209eb2193d1357c) in the project. 
