var groupAnagrams = function(strs) {
    let uniqueAnagrams = new Map();

    for (const str of strs) {
        const sortedStr = Array.from(str).sort().join('');
        if (uniqueAnagrams.has(sortedStr)) {
            uniqueAnagrams.get(sortedStr).push(str);
        } else {
            uniqueAnagrams.set(sortedStr, [str]);
        }
    }

    return Array.from(uniqueAnagrams.values());
};
