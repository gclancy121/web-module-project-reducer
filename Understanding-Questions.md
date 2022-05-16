# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* 1. The user presses the 1 button.
* 
2. The one button checks what to do when clicked, and runs the "handleOneClick" function.
3. handleOneClick tells React to run a dispatch with the event type of ADD_ONE.
4. When the case of ADD_ONE is found in the reducer, it runs the block of code that is assigned to that 
case type.
5. It returns a copy of the original state, with the value under the key of "total" increased by one.


* TotalDisplay shows the total plus 1.
