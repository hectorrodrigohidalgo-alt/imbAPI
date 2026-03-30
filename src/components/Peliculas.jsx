import {useContext} from 'react';
import { DataContext } from '../context/DataContext';
import ItemPeliculas from './ItemPeliculas';

const Peliculas = () => {
    const {isLoading, data} = useContext(DataContext);

    return ( 
        <div className='movies-content'>
            {
                !isLoading && data ?
                    data.map((item, index) =>(
                        <ItemPeliculas
                        key={`${item.imdbID}-${index}`}
                        id={item.imdbID}
                        title={item.Title}
                        type={item.Type}
                        year={item.Year}
                        poster={item.Poster}
                        />


                    ))
                : ""
            }
        </div>
     );
}
 
export default Peliculas;