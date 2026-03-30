import { useState, useContext } from "react";
import { DataContext, DataProvider } from "../context/DataContext";

const FormBuscador = () => {
    const[title,setTitle]= useState("");
    const {setQuery, error}= useContext(DataContext);
    // const{data}=useFetch("&s=spidermanas")
    const handleSubmit = e =>{
        e.preventDefault();

        setQuery(title);
        console.log("title: ", title);
    }
    return (
        <div className="form-buscador">
            <h1>Peliculas Clasicas</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Titulo de la Pelicula" onChange={e =>setTitle(e.target.value)} />
                <input type="submit" value="Search" />
            </form>
            {error && <p className="error">Pelicula no encontrada</p>}
        </div>
     );
}
 
export default FormBuscador;