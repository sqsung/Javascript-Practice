function Foo(a, b) {
    'use strict';
    a = 100;
    console.log(arguments);
    console.log(a, b);
}

Foo(1, 2);