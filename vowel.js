function vowels(str) {
    let arr = ['a', 'i', 'e', 'o', 'u'],
        count = 0;
        str = str.toLowerCase();
        
    for (let i of str) {
        if (arr.includes(i)) {
            count++;
        }
    }
    return count;
}

vowels('loik');