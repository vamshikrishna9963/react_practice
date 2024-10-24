


export const Lists=(props)=>{
    const {text}=props
    console.log(props)
    return(
        <>
        {
            props.map(each=><>
            <ul>
                <li>{each}</li>
            </ul>
            </>)
        }
        </>
    )
}