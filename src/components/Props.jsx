function Props(prop){
    return(
        <>
        <img src={prop.avatar} alt="" width={"50px"} />
        <p>{prop.name} / {prop.role}</p>
        </>
    )
}

export default Props;