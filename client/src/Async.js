import react, { useEffect, useState } from "react"

const Async = () => {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])

    const asyncGetPosts = async () => {
        try {
            const response = fetch("http://localhost:5000")
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                })
            setPosts(response.data)
        } catch (err) {
            //We don't usually console log error, ofc :)))
            console.log(err)
        }
    }
    // we can put both users and posts in the same async function and concurrently waiting for them or whatever we want to do
    // Also, we can use async with promises for parallel calls
    // const asyncGetUsers = async () => {
    //     const response = await axios.get("http://localhost:5000/")
    //     setUsers(response.data)
    // }

    useEffect(() => {
        asyncGetPosts()
        // asyncGetUsers()
    }, [])

    return <div>Hello</div>
}

export default Async
