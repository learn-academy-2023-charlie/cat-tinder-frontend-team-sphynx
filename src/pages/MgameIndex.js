import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, Button} from "reactstrap"

const MgameIndex = ({ mgames }) => {
  return (
    <main className="mgame-index-cards">
      {mgames?.map((mgame, index) => {
        return (
          <Card
            style={{
              width: '20rem'
            }}
            key={index}
            >
            <CardBody>
              <CardTitle tag="h5">
               {mgame.name}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                {mgame.game_type}
                <br></br>
                <br></br>
                File Size: {mgame.file_size}
              </CardSubtitle>
            </CardBody>
            <img
              alt={`profile of ${mgame.name}`}
              src={mgame.img}
              width="100%"
              height="380px"
            />
            <CardBody>

              <Button 
              href={`/mgameshow/${mgame.id}`}
              >
                Detail
              </Button>

              {' '}

              <Button 
              href="#"
              >
                IOS
              </Button>

              {' '}

              <Button 
              href="#"
              >
                Andriod
              </Button>

              {' '}

              <Button 
              href="#"
              >
                WEB
              </Button>

            </CardBody>
          </Card>
        )
      })}
    </main>
  )
}
export default MgameIndex
