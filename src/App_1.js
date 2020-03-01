import React from 'react';
//import Potato from './Potato';
import PropTypes from 'prop-types';

// props in component are put as arguments
// ES6 syntax props.favorite === { property }
function Food({name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  );
}

// Practice .map 
// .map takes a function and applies that function to each item in an array, makes an array with the results and returns it.
/*
const friends = ["dal", "mark", "lynn", "japan guy"];
friends.map(current => {
  console.log(current);
  return 0;
});
*/

// elements of React needs to be 'unique', so we add unique id to each object. key id is used only internally for React
const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 5  
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9  
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.8
  },
  {
    id: 4,
    name: "Donkatsu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 5.5  
  },
  {
    id: 5,
    name: "Gimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.7  
  }
];

// prints out errors about props in console
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

// put it in curly brackets and its JavaScript
function App_1() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
        key={dish.id}
        name={dish.name}
        picture={dish.image}
        rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App_1;
