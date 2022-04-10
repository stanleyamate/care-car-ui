import React,{ useEffect } from "react";
import { axiosPrivate } from "../components/api/axios";
import useAuth from "./useAuth";

const useAxiosPrivate=()=>{
    const { auth }=useAuth();
     
        // const requestIntercept= axiosPrivate.interceptors.request.use(
        //     config=>{
                    
        //             config.headers['authorization'] = `Bearer ${token}`;
        //             console.log(config.headers['authorization'])
        //             return config
        //     },(err)=>{ return Promise.reject(err)}
        // )
        // return axiosPrivate.interceptors.request.eject(requestIntercept);
        
    return axiosPrivate;
}

export default useAxiosPrivate