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

const Typescript = () => {
    const user: user = {
        name: "Huy",
        age: 20,
        email: "tttt@hpm.com",
    }
    const car = new Car("BMW", 100000)
    console.log(car.showPrice())
    return (
        <div>
            <h1>Typescript</h1>
        </div>
    )
}

export default Typescript
