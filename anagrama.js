function buildObj(str) {
    str = str.toLowerCase();
    const  obj = {};
    for (let i of str.replace(/[^\w]/g)) {
        obj[i] = obj[i] + 1 || 1
    }
    return obj;
}

function anagrama(str1, str2) {
    const obj1 = buildObj(str1);
    const obj2 = buildObj(str2);
if (Object.keys(obj1).length !== Object.keys(obj2).length){
    return false;
} 
for (let i in obj1) {
    if (obj1[i] !== obj2[i]) {
        return false;
    }
}
return true;
}

anagrama('cat', 'act');
