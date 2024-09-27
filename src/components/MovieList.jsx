
const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;

    return (
        <>
            {props.movies.map((movie, index) => {
                return <div className="image-container d-flex justify-center-start m-3" key={index}> <img src={movie.Poster} alt="Movie" /> 
                    <div className="overlay d-flex align-items-center justify-center">
                        <FavouriteComponent />
                    </div>
                </div>
            })}
        </>
    )
}

export default MovieList;