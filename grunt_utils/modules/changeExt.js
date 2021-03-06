"use strict";

module.exports = function(path, ext) {
    var result = path;
    var lastDotIndex = result.lastIndexOf(".");

    if (lastDotIndex > -1) {
        result = result.substring(0, lastDotIndex + 1) + ext;
    }

    return result;
}
