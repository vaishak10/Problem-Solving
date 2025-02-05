## 🚀 Problem: Debounced Search Function

### 📌 Objective  
Implement a debounce function that ensures a given function is only executed after a specified delay when no new calls have been made.

### ✅ Requirements  
- The function should accept:
  - Another function (`fn`) to execute.
  - A delay (`delay` in milliseconds).  
- If the returned function is called multiple times before the delay ends, the timer should reset.  
- The function should execute **only once** after no calls have been made for `delay` milliseconds.  

---

### 🧩 Example Usage  

```js
function searchQuery(query) {
  console.log("Searching for:", query);
}

const debouncedSearch = debounce(searchQuery, 300);

debouncedSearch("apple");  
debouncedSearch("banana");  
debouncedSearch("cherry");  

// Only "Searching for: cherry" should be logged after 300ms, ignoring previous calls
