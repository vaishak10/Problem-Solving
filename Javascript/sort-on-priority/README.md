## Problem Statement

Sort nested arrays based on highest priority, if priority are equal then sort them based on timestamps.

Example: 
```
input: [["9:00am", 2], ["12:00pm", 3], ["4:00pm", 4], ["11:00am", 3],["9:00am", 4]];

output: [
  [ '9:00am', 4 ],
  [ '4:00pm', 4 ],
  [ '11:00am', 3 ],
  [ '12:00pm', 3 ],
  [ '9:00am', 2 ]
]

```