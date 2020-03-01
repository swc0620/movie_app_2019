import React from 'react';
import axios from "axios";
import Movie from './components/Movie.js';
import "./components/Movie.css";

class App_3 extends React.Component{
  state = {
    isLoading: true,
    movies: [],
    /* Declaring your 'state' in the future in advance is not required.
    But it is a good practice to plan it in advance.
    */
    // book: true
  };

  // Way 1
  /*
  async componentDidMount() {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };
  */

  // Way 2
  getMovies = async () => {
    const {
      data : {
        data : {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    // first 'movies' is the one in the 'state', second 'moives' is the one from 'axios' 
    /*
    this.setState({movies: movies}, isLoading: false);
    */
   // But because they share same name, we can make a shortcut because javascript is not stupid and understands them
    this.setState({movies, isLoading: false});
  };

  componentDidMount() {
    this.getMovies();
  }

  /* The code below looks exactly like HTML, but it is JSX/JavaScript
  Therefore, istead of using 'class' we need to use 'className' in order to avoid confusion*/
  /* Similarly, 'label' in HTML has 'for', which is actually a loop in JSX/JavaScript.
  Therefore, we need to use 'htmlFor' instead of 'for'*/
  render(){
    const {isLoading, movies} = this.state;
    return ( 
    <section className="container">
      {isLoading 
        ? (<div className="loader">
            <span className="loader_text">"Loading..."</span>
          </div>)
        : (<div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id} 
                id={movie.id} 
                year={movie.year} 
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}  
              />))
            }
          </div>
        )}
    </section>
    );
  }
}


export default App_3;
