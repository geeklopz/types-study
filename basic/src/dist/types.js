"use strict";
// types TS
// boolean
var isOpen;
isOpen = true || false;
// string
var message;
message = 'foo' || "foo" || "foo";
// number
var total;
total = 100;
// array
var items;
items = ['foo', 'bar'];
var collection;
collection = ['foo', 'bar'];
// tuple
var title;
title = [1, 'foo'];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
;
// any (Dont recommended)
var thing;
thing = 'everything';
// void (empty)
function logger() {
    console.log('foo');
}
;
// never
function error() {
    throw new Error("error");
}
;
// object
var cart;
cart = {
    key: "foo"
};
// type inference
