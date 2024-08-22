import Notecontext from "./Notecontext"

const Notestate=(props)=>
{

    const state ={
        "name": "Harry",
        "class": "5b"

    }
    return(
        <Notecontext.provider value={state}>
            {props.children}
        </Notecontext.provider>
    )



}