function* generator() {
    yield 0;
}

let iterator = generator();
let value;

do {
    value = iterator.next();
} while (!value.done);


