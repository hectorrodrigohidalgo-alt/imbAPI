import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import imageDefault from '/notfound.png';

const SingleMovie = () => {
    const {id} = useParams();
    const {isLoading, error, data} = useFetch(`&i=${id}`);
    

    if (isLoading) {
        return <div className="loading">Cargando...</div>;
    }

    if (error) {
        return <div className="error">Error al cargar la película</div>;
    }

    if (!data) {
        return <div className="error">No se encontró la película</div>;
    }

    const {Poster, Title, Plot, Year, Country, Director, Runtime} = data;
    let image = Poster === "N/A" ? imageDefault : Poster
    return ( 
        <div className="single-movie">
            <img src={image} alt={Title} crossOrigin="anonymous" />
            <div className="single-info">
                <h2>{Title}</h2>
                <p>{Plot}</p>
                <p><strong>País:</strong> {Country}</p>
                <p><strong>Año:</strong> {Year}</p>
                <p><strong>Director:</strong> {Director}</p>
                <p><strong>Duración:</strong> {Runtime}</p>
            </div>
        </div>
    );
}
 
export default SingleMovie;