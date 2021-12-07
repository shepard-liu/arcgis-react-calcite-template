exports.toCssClassName = function (name) {
    let cssName = '';

    for (let i = 0; i < name.length; ++i) {
        const char = name.charAt(i);
        if (char.match(/[A-Z]/) && i != 0)
            cssName += '-';
        cssName += char.toLowerCase();
    }

    return cssName;
}

exports.yesOrNoFromString = function (str) {

    const yesOrNo = str.trim().toLowerCase();
    if (yesOrNo === 'y' || yesOrNo === 'yes') {
        return true;
    }
    return false;
}