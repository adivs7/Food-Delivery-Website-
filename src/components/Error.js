import { useRouteError } from "react-router-dom";


const Error= ()=>{

    const Err=useRouteError();
    console.log(Err);
    return(
        <div>
            <h1>OOPS! You have landed on the wrong Page</h1>
            <p>{Err.status}</p>
        </div>
    )
}

export default Error;