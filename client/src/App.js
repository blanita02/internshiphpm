import React from "react"
import { useEffect } from "react"
import "./App.css"

//You can't use let or const outside of a function
const sayHello = () => {
    let message = "Hello"
    console.log(message)
}
// The IIFE Functions
const IIFE = (() => {
    let message = "Hello"
    console.log(message)
})()
// A closure function
const closureExample = () => {
    let message = "Hello"
    const sayHello = () => {
        console.log(message)
    }
    return sayHello
}
// this keyword
function testThis() {
    console.log(this)
}
const testBind = testThis.bind({ name: "John" })
// A function with default parameters, you must always declare the normal parameters first
const defaultParameters = (x = 1, y = 2, z = 3) => {
    return x + y + z
}

//some rest parameters functions, you can use it with a lot of things, like arrays, objects and forEach, map etc
const restParameters = (...args) => {
    let sum = 0
    for (let arg of args) sum += arg
    return sum
}
function App() {
    useEffect(() => {
        let numbers = [1, 2, 3, 4, 5]
        sayHello()
        testThis()
        testBind()
        console.log(defaultParameters())
        console.log(defaultParameters(2, 3, 3))
        console.log(restParameters(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
        console.log(restParameters(...numbers))
    }, [])
    const price = 20

    let x = 1
    let y = 2
    let s = "Hello"

    //eval can be dangerous
    console.log(eval("x + y + 1"))
    console.log(eval("s + ' John'"))
    console.log(eval("x + y + s"))
    //some parsing
    console.log(parseInt("10"))
    console.log(parseInt("F", 16))

    return (
        <div className="main-container">
            {typeof price} {price}
            <div></div>
        </div>
    )
}

export default App
