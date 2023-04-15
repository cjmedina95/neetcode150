var isAnagram = function(s, t) {
    let letters = {};

    for (const letter of s) {
        if (!(letter in letters)) {
            letters[letter] = 0;
        }

        letters[letter] += 1;
    }

    for (const letter of t) {
        if (!(letter in letters)) return false;

        letters[letter] -= 1;
    }

    for (const letter in letters) {
        if (letters[letter] !== 0) return false;
    }

    return true;
};
