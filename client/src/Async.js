import react, { useEffect, useState } from "react"
import axios from "axios"

const Async = () => {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])

    const asyncGetPosts = async () => {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            )
            setPosts(response.data)
        } catch (err) {
            //We don't usually console log error, ofc :)))
            console.log(err)
        }
    }
    // we can put both users and posts in the same async function and concurrently waiting for them or whatever we want to do
    // Also, we can use async with promises for parallel calls
    const asyncGetUsers = async () => {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        )
        setUsers(response.data)
    }

    useEffect(() => {
        asyncGetPosts()
        asyncGetUsers()
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

export default Async
