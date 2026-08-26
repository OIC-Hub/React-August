function Card({children}){
    return(
        <>
        <div style={{width: "100px", height: "100px", backgroundColor: "red"}}>
            {children}
        </div>
        
        </>
    )
}

export default Card