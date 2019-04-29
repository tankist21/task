function polindrom(str) {
    str = str.toLowerCase();
    str1 = str.split('').reverse().join('');
        if (str === str1) {
        return true;
        } else return false;
    }

polindrom('pop pop');
