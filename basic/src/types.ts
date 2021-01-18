// types TS

// boolean
let isOpen: boolean;
isOpen = true || false;

// string
let message: string;
message = 'foo' || "foo" || `foo`;

// number
let total: number;
total = 100;

// array
let items: string[];
items = ['foo', 'bar'];

let collection: Array<string>;
collection = ['foo', 'bar'];

// tuple
let title: [number, string];
title = [1, 'foo'];

// enum
enum Colors {
	white = '#fff',
	black = '#000'
};

// any (Dont recommended)
let thing: any;
thing = 'everything';

// void (empty)
function logger(): void {
	console.log('foo');
};

// null | undefined
type other = string | undefined;

// never
function error(): never {
	throw new Error("error");
};

// object
let cart: object;
cart = {
	key: "foo"
};

// type inference
