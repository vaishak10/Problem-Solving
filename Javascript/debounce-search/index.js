function debounce(fn, delay) {
    let timer;
    
    return function(...args) {
      // Clear the previous timer if the function is called again within the delay
      console.log("timer: ", timer)
      clearTimeout(timer);
      
      // Set a new timer that will invoke the function after the delay
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
}
  
function searchQuery(query) {
console.log("Searching for:", query);
}

const debouncedSearch = debounce(searchQuery, 300);

debouncedSearch("apple");  
debouncedSearch("banana");  
debouncedSearch("cherry");  

/*
Explanation:
debounce function- It accepts a function (fn) and a delay (delay) as arguments.
Inside, we create a timer variable to keep track of the setTimeout.
Whenever the returned function is called, we clear the previous timer with clearTimeout(timer) (if any).
We then set a new timer with setTimeout that will invoke the function after the specified delay.
Only the last call (after the delay) will trigger the function execution.

searchQuery function- This simulates the function that you want to debounce (like a search handler).

Testing the debounce- When debouncedSearch is called multiple times in quick succession, it only executes the function after 300ms of no further calls.

Output:
Only "Searching for: cherry" is logged after the 300ms delay, even though "apple" and "banana" were also called.
*/
  