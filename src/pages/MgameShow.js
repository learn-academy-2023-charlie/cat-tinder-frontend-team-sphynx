import React from "react"
import { useParams } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap"


const MgameShow = ({ mgames }) => {
  const { id } = useParams()
  console.log(id)

  let currentMgame = mgames?.find((mgame) => mgame.id === +id)
  console.log(currentMgame)

  return(
    <main className="mgame-show-cards">
      {currentMgame && (
              <Card
                style={{
                  width: '30rem',
                  
                }}
              >
                <CardBody>
                  <CardTitle 
                  tag="h5"
                  >
                  {currentMgame.name}
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    {currentMgame.game_type}
                    <br></br>
                    <br></br>
                    File Size: {currentMgame.file_size}
                  </CardSubtitle>
                </CardBody>
                <img
                  alt={`profile of ${currentMgame.name}`}
                  src={currentMgame.img}
                  width="100%"
                  height="100%"
                />
                <CardBody>
                  <CardText>
                    {currentMgame.summary}
                  </CardText>
                  <Button 
                  href="#"
                  >
                    IOS
                  </Button>

                  {' | '}

                  <Button 
                  href="#"
                  >
                    Andriod
                  </Button>
                
                  {' | '}

                  <Button 
                  href="#"
                  >
                    WEB
                  </Button>

                  {' | '}

                  <Button 
                  href={`/mgameedit/${currentMgame.id}`}
                  >
                    EDIT
                  </Button>

                  {' '}

                  <Button 
                  href="/mgameindex"
                  className="back-button"
                  >
                    Back
                  </Button>

                </CardBody>
              </Card>
      )}
    </main>
  )
}

export default MgameShow