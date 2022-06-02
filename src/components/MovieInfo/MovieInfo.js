import React from 'react';

const MovieInfo = (movie) => {
    const {a,p,img} = movie
    return (
        <div>
            {img}
            <br/>
            {a}
            <br/>
            {p}
        </div>
    );
};

export default MovieInfo;