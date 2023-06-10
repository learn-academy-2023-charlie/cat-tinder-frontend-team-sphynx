import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"

const MgameNew = ({ createMgame }) => {

  const navigate = useNavigate()

  const [newMgame, setNewMgame] = useState({
    name: "",
    game_type: "",
    file_size: "",
    summary:"",
    img: ""
  })

  const handleChange = (e) => {
    setNewMgame({ ...newMgame, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    createMgame(newMgame)
    navigate("/mgameindex")
  }

  return(
    
    <div
    className="create-form"
    >

      <h3>Adding new mobile game</h3>
      <br></br>
      <Form>
        <FormGroup>
          <Label for="mgame-name">Please enter the game name here:</Label>
          <Input 
            id="mgame-name"
            type="text" 
            name="name"
            placeholder="Your favourite game" 
            onChange={handleChange} 
            value={newMgame.name} 
          />
        </FormGroup>

        <FormGroup>
          <Label for="mgame-type">What kind of game is it?</Label>
          <Input 
            id="mgame-type"
            type="text" 
            name="game_type" 
            placeholder="RPG, MMO, FPS, MOBA or Idle game?" 
            onChange={handleChange} 
            value={newMgame.game_type} 
          />
        </FormGroup>

        <FormGroup>
          <Label for="mgame-file">File size of your game?</Label>
          <Input
            id="mgame-file" 
            type="text" 
            name="file_size"
            placeholder="1 GB or whatever size" 
            onChange={handleChange} 
            value={newMgame.file_size} 
          />

        </FormGroup>

        <FormGroup>
          <Label for="mgame-summary">Give some game summary</Label>
          <Input 
            id="mgame-summary"
            type="text" 
            name="summary" 
            placeholder="Da best game" 
            onChange={handleChange} 
            value={newMgame.summary} 
          />
        </FormGroup>

        <FormGroup>
          <Label for="mgame-img">Provide a cool image of the game!</Label>
          <Input 
            id="mgame-img"
            type="url" 
            name="img" 
            placeholder="https://tenor.com/" 
            onChange={handleChange} 
            value={newMgame.img} 
          />
        </FormGroup>

        <Button onClick={handleSubmit} name="submit">
          Submit Game
        </Button>
      </Form>

    </div>
    
  )
}

export default MgameNew