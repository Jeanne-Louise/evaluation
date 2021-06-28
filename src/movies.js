import React from 'react';
import Movie from './movie.js'


function Movies(props) {
    const { contenu } = props;
    const movies = props.contenu.map(movie => <Movie key={movie.id} movie={movie} />)
    return(
        <div>{movies}</div>
    )
    
}

export default Movies

