// import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

const AppAuth = (props) => {
    const {AppAuthentication} = props;
    const navigate = useNavigate()
    const login = localStorage.getItem("login");
    console.log(login, "check")
  
    // useEffect(() => {
    //   if(login === null){
    //     navigate("/login")
    // }
    // }, [])
    return(
        <>
            <AppAuthentication />
        </>
    )
}

export default AppAuth;