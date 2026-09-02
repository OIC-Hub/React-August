import { useEffect, useState } from "react"

function Effect(){
    // const [count, setCount] = useState(0);

    // useEffect(() => {
    //     document.title =  `count is ${count}`
    // }, [count])




    // const [name, setName] = useState("");
    // const [greeting, setGreeting] = useState("")

    // useEffect(() => {
    //     if(name !== ""){
    //         setGreeting(`Hello ${name}`)
    //     }else(
    //         setGreeting("")
    //     )
    // }, [name])



    const [countdown, setCountdown] = useState(0)

    useEffect(() => {
        // if (countdown === 0) return;

    const timer = setInterval(() => {
        setCountdown(countdown + 1)
    }, 1000)


        return() => clearTimeout(timer)
    }, [countdown])

    return(
        <>
        {/* <p>{count}</p> */}
        {/* <button onClick={() => setCount(count + 1)}>Click</button> */}

        {/* <input 
        type="text"
         value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter your Name"
         />

         <h1>{greeting}</h1> */}


         <p>{countdown}</p>
        </>
    )
}

export default Effect;