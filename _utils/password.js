const parsePassword = function (text) {
    // Parsing passcode from text
    return text.slice('/auth '.length);
};

const comparePassword = function (candidate, final) {
    return candidate === final;
};


module.exports.parsePassword = parsePassword;
module.exports.comparePassword = comparePassword;
