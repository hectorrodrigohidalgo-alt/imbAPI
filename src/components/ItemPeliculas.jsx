import imageDefault from '/notfound.png';
import { Link } from 'react-router-dom';

const ItemPeliculas = ({id,title,type,year,poster}) => {
    let image = poster === "N/A" ? imageDefault : poster
    return (  
        <Link to={`/movies/${id}`}>
        <article>
            <div className="item-movie" style={{backgroundImage:`url(${image})`}}>
                <div className="info">
                <h4>{title}</h4>

                <p className="row-info"><span>{type}</span><span>{year}</span></p>
                </div>

            </div>
        </article>
        </Link>
    );
}
 
export default ItemPeliculas;