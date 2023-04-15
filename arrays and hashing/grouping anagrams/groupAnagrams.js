var groupAnagrams = function(strs) {
    
    let uniqueAnagrams = {};
    let anagramGroups = [];

    for (const str of strs) {
        sortedStr = Array.from(str).sort().join('');
        if (sortedStr in uniqueAnagrams) {
            uniqueAnagrams[sortedStr].push(str);
        }
        else {
            uniqueAnagrams[sortedStr] = [str];
        }
    }

    for (const key in uniqueAnagrams) {
        anagramGroups.push(uniqueAnagrams[key]);
    }

    return anagramGroups;
};
