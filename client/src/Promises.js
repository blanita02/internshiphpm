import react, { useEffect, useState } from "react"
import axios from "axios"

const Promises = () => {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])
    useEffect(() => {
        // const promise = axios.get("https://jsonplaceholder.typicode.com/posts")
        // promise
        //     .then((response) => {
        //         setPosts(response.data)
        //     })
        //     .then(() => {
        //         console.log(data)
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
        const tmp = new Promise(
            (resolve, reject) => {
                const promise = axios.get(
                    "https://jsonplaceholder.typicode.com/posts"
                )
                promise
                    .then((response) => {
                        resolve(response.data)
                    })
                    .catch((error) => {
                        reject(error)
                    })
                    .finally(() => {
                        console.log("Finally")
                    })
            },
            setInterval(() => {}, 1000)
        )
        let promise = axios.get("https://jsonplaceholder.typicode.com/posts")
        let promise2 = axios.get("https://jsonplaceholder.typicode.com/users")
        // There is also the allSettled method, which returns all the promises, even if they are rejected
        // There is also the some method, which returns the first promise that is resolved
        // There is also race method, which returns the first promise that is resolved or rejected so you still have to always use then and catch
        // Race is not used that much
        Promise.all([promise, promise2]).then((response) => {
            setPosts(response[0].data)
            setUsers(response[1].data)
        })
    }, [])
    return (
        <div>
            {posts.map((item) => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                </div>
            ))}
            {users.map((item) => (
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <p>{item.email}</p>
                </div>
            ))}
        </div>
    )
}

export default Promises
