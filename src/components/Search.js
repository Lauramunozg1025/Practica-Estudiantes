import React, {useEffect} from 'react';
import useSearch  from './useSearch';
import { useNavigate, useLocation } from 'react-router-dom';
import querystring from 'query-string';
import { getMoviesByName }from '../selectors/getMoviesByName';
import { MovieCard } from './Movies';

export const Seacrh = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {q = ''} = (querystring.parse(location.search));

    const [values, handleInputChange] = useSearch({
        searchText: q
    })

    const { searchText } = values;

    useEffect(() => {
      getMovies();
    }, [searchText]);
    

    const getMovies = async () => {
        const moviesFiltered = await getMoviesByName(searchText);
        console.log(moviesFiltered);

    }


    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`)
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search"
                    className="form-control"
                    name="searchText"
                    autoComplete="off"
                    name="searchText"
                    value={searchText}
                    onChange={handleInputChange}
                    style={{marginLeft: "10px"}}
                />
        
            </form>
                
                {/* <div className="col-7">
                    <h4> Results </h4>
                    <hr />
               
                    {
                        moviesFiltered.map(movie => (
                            <MovieCard key={movie.id}
                                {...movie} />
                        ))
                    }
                </div> */}
            

        </div>
    )
}