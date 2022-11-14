
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";

function MovieCard({movie}) {
  return (
    <Card style={{ width: '18rem',margin:'20px'
    }}>
      <Card.Img variant="top" src={movie.posterurl} />
      <Card.Body>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Text>
         {movie.description}
        </Card.Text>
          <div>
          <ReactStars
    count={5}
   
    size={24}
    activeColor="#ffd700" edit={false} value={movie.rating}
  />,</div>
      
      </Card.Body>
    </Card>
  )
}

export default MovieCard