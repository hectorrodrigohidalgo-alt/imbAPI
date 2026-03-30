import { use, useEffect, useState } from "react";

const API_ENDPOINT = 'https://www.omdbapi.com/?apikey=5c3fa58f';

export const useFetch = params =>{
    const[isLoading,setIsLoading]= useState(true);
    const[error, setError]= useState(false);
    const[data,setData]= useState(null);
    

    const fetchMovie = url => {
        setIsLoading(true);
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(respuestaJson => {
                if(respuestaJson.Response ==="True"){
                    setData(respuestaJson.Search || respuestaJson);
                    setError(false);
                }
                else
                {
                    setError(true);
                }
                setIsLoading(false);
                console.log("data: ", respuestaJson)
            })
            .catch(error => console.log(error))

    }

    useEffect(() => {
        fetchMovie(`${API_ENDPOINT}${params}`)
    }, [params])
    return {isLoading, error, data}



}