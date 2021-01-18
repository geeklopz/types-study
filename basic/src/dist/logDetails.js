"use strict";
// union
function logDetails(uid, item) {
    console.log("A product with " + uid + " has a title as " + item + ".");
}
;
logDetails(123, "tenis");
logDetails("123", "tenis");
function logInfo(uid, item) {
    console.log("A product with " + uid + " has a title as " + item + ".");
}
;
logInfo(123, "tenis");
logInfo("123", "tenis");
function renderPlatform(platform) {
    return platform;
}
;
renderPlatform('ios');
