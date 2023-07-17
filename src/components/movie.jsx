import React from 'react';

function Movie(props) {
    const {
        Title: title,
        Year: year,
        ImdbID: id,
        Type: type,
        Poster: poster,
    } = props;

    return (
        <div className='movie card' id={id}>
            <div className='card-image waves-effect waves-block waves-light'>
                {poster === 'N/A' ? (
                    <img
                        className='activator'
                        src={`https://placehold.co/300x450?text=${title}`}
                        alt='poster'
                    />
                ) : (
                    <img className='activator' src={poster} alt='poster' />
                )}
            </div>
            <div className='card-content'>
                <span className='card-title activator grey-text text-darken-4'>
                    {title}
                </span>
                <p>
                    {year}
                    <span className='right'>{type}</span>
                </p>
            </div>
        </div>
    );
}

export { Movie };
