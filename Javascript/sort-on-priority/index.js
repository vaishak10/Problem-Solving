function parseTime(timeStr) {
    const [_, hours, minutes, period] = timeStr.match(/(\d+):(\d+)(am|pm)/i);
    let hrs = parseInt(hours, 10);
    const mins = parseInt(minutes, 10);
    
    // Convert to 24-hour format
    if (period.toLowerCase() === "pm" && hrs !== 12) hrs += 12;
    if (period.toLowerCase() === "am" && hrs === 12) hrs = 0;
  
    return hrs * 60 + mins; // Convert time to minutes for easy comparison
}
  
function sortNestedArray(arr) {
    return arr.sort((a, b) => {
        // Compare priority (higher first)
        if (b[1] !== a[1]) return b[1] - a[1]; 
        // If priority is the same, compare timestamps
        return parseTime(a[0]) - parseTime(b[0]);
    });
}

const input = [["9:00am", 2], ["12:00pm", 3], ["4:00pm", 4], ["11:00am", 3],["9:00am", 4]];
const sortedArray = sortNestedArray([...input]);

console.log(sortedArray);


/* Regex Breakdown:
/(\d+):(\d+)(am|pm)/i

(\d+) → Matches one or more digits (\d means any digit, and + means one or more).

This captures the hour part (e.g., 9 in "9:00am" or 12 in "12:30pm").
: → Matches the literal colon (:) in the time format.

(\d+) → Matches another set of one or more digits (again, \d+).

This captures the minute part (e.g., 00 in "9:00am" or 30 in "12:30pm").
(am|pm) → Matches either "am" or "pm".

The | (pipe symbol) means "or", so it captures either "am" or "pm".
/i → This is a flag that makes the match case-insensitive, meaning it will match both "AM" and "am" (same for "PM" and "pm") */