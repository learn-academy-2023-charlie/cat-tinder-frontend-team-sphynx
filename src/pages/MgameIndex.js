import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink} from "reactstrap"

const MgameIndex = ({ mgames }) => {
  return (
    <main className="mgame-index-cards">
      {mgames.map((mgame, index) => {
        return (
          <Card
            style={{
              width: '18rem'
            }}
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
                {mgame.file_size}
              </CardSubtitle>
            </CardBody>
            <img
              alt={`profile of ${mgame.name}`}
              src={mgame.img}
              width="100%"
            />
            <CardBody>
              <CardText>
                {mgame.summary}
              </CardText>
              <CardLink href="#">
                apple link
              </CardLink>
              <CardLink href="#">
                extra Link
              </CardLink>
            </CardBody>
          </Card>
        )
      })}
    </main>
  )
}
export default MgameIndex
