// Write your solution here!
const append = ["Milo", "Otis", "Garfield"] // .push("Odie")
const prepend = ["Milo", "Otis", "Garfield"] // .unshift("Odie")
const removeFirst = ["Milo", "Otis", "Garfield"] // .shift
const removeLast = ["Milo", "Otis", "Garfield"] // .pop

function appendElement(arr , str){
    return arr.push(str)
}

function prependElement(arr , str){
    return arr.unshift(str);
}

function removeFirstElement(arr){
    return arr.shift(1)
}

function removeLastElement(arr){
    return arr.pop()
}

let a = "Odie" //forgve this, just for speed
appendElement(append , a); // not sure if this is how you want me to do this
prependElement(prepend , a);
removeFirstElement(removeFirst);
removeLastElement(removeLast)

