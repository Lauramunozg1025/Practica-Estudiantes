import {getData} from '../components/Api'

export const getMoviesByName = async (name = '') => {

    const results = await getData();
    const movies = results.results

    name= name.toLocaleLowerCase();
   return movies.filter(movie => movie.name.toLocaleLowerCase().includes(name));
    
};

