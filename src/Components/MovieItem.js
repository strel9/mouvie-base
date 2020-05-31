
import React, { Component } from 'react'
import Rating from './Rating'
import nullMovie from '../Components/no_foto.jpg'
export default class MovieItem extends Component {

    constructor() {
        super();
        this.state = {
            willWatch: false
        }
    }

    render() {
        const { movie, removeMovie, addMovieToWillWatch, removeMovieToWillWatch } = this.props;
        // const percentage = 66;

        return (
            <div className="row">
                <div className="card-img col-6">
                    {movie.poster_path
                        ? (
                            <img className="card-img-top"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />)
                        : (
                            <img className="card-img-top"
                                src={nullMovie} alt="" />)

                    }

                </div>
                <div className="card-body col-6">
                    <h6 className="card-title">{movie.title}</h6>
                    {/* <div className="mb-0">Rating: {movie.vote_average}</div> */}
                    <Rating vote={movie.vote_average} />

                    <div className="d-flex justify-content-between align-items-center">
                        {this.state.willWatch ?
                            (
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={() => {
                                        this.setState({
                                            willWatch: false
                                        })
                                        removeMovieToWillWatch(movie)
                                    }
                                    }
                                >Remove Will Watch
                                </button>
                            )
                            :
                            (
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => {
                                        this.setState({
                                            willWatch: true
                                        })
                                        addMovieToWillWatch(movie)
                                    }
                                    }
                                >Will Watch
                                </button>
                            )
                        }
                        <button
                            className="btn btn-primary" onClick={removeMovie.bind(null, movie)}>Del movie
                    </button>
                    </div>
                    <div>
                        Подробнее...
                    </div>
                </div>
            </div >
        )
    }
}


// const MovieItem = (props) => {
//     const { movie, removeMovie, addMovieToWillWatch } = props;

//     return (
//         <div className="card">
//             <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} alt="" />
//             <div className="card-body">
//                 <h6 className="card-title">{movie.title}</h6>
//                 <div className="d-flex justify-content-between align-items-center">
//                     <p className="mb-0">Rating: {movie.vote_average}</p>
//                     <button
//                         type="button"
//                         className="btn btn-secondary"
//                         onClick={addMovieToWillWatch.bind(null, movie)} >Will Watch
//                         </button>
//                 </div>
//                 <button
//                     className="btn btn-primary" onClick={removeMovie.bind(null, movie)}>Del movie
//                     </button>
//             </div>
//         </div>
//     )
// }

// export default MovieItem;