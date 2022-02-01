import {Card, Button} from 'react-bootstrap';
import style from 'styled-components';

const Background = style.div`
    display: flex
`

export const MovieCard = ({id, image, name }) => {


  return (
        <Background >
          <Card style={{ width: '18rem', margin: "20px"}} id={id}>
              <Card.Img src={image}  alt="Imagen pelicula" />
              <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  </Card.Text>
                  <Button style={{background: "#176c7f"}}>
                      <svg width="22" height="22" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                          <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                      </svg>
                      Ver pelicula
                  </Button>
              </Card.Body>
          </Card>
        </Background>
  )
};
