function *generatoFn(){
    yield 1
    yield 2
    yield 2
}
const gen=generatoFn()
console.log(gen.next().value);
console.log(gen.next().done);

