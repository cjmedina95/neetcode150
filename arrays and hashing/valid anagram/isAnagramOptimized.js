// Define the isAnagram function that takes two strings s and t
var isAnagram = function(s, t) {
    // Return false if the lengths of the strings s and t are not equal
    if (s.length !== t.length) {
        return false;
    }

    // Initialize an array of length 26 with all elements set to 0
    const letters = new Array(26).fill(0);

    // Iterate over the characters of the strings s and t
    for (let i = 0; i < s.length; i++) {
        // Use charCodeAt to get the Unicode value of the character at index i in s
        // Subtract the Unicode value of the character 'a' to get the index in the letters array
        // Increment the count of the character from s in the letters array
        letters[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        letters[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    // Check the counts of all characters
    for (const count of letters) {
        // If the count is not 0, the strings are not anagrams
        if (count !== 0) {
            return false;
        }
    }

    // If all character counts match, return true (the strings are anagrams)
    return true;
};
