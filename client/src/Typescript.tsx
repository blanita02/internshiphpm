import React from "react"

class Car {
    model: string
    price: number
    constructor(model: string, price: number) {
        this.model = model
        this.price = price
    }
    showPrice() {
        return this.price
    }
}

interface user {
    name: string
    age: number
    email: string
}

function showUser(user: user, message?: string): string {
    return `${message} ${user.name} ${user.age} ${user.email}`
}

function showGreeting(message: string = "Good day, sir"): void {
    console.log(message)
}

const Typescript = () => {
    const scores: number[] = [1, 2, 3, 4, 5]
    let highScores: number[]
    highScores = scores.filter((score) => score > 3)
    const user: user = {
        name: "Huy",
        age: 20,
        email: "tttt@hpm.com",
    }
    console.log(showUser(user, "Hello"))
    showGreeting("Hello")
    const car = new Car("BMW", 100000)
    console.log(car.showPrice())
    return (
        <div>
            <h1>Typescript</h1>
        </div>
    )
}

export default Typescript
