import React, {useState, useEffect} from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"

const MgameEdit = ({ mgames , updateMgame, destroyMgame }) => {

  const { id } = useParams()
  console.log(id)

  const navigate = useNavigate()

  const [editMgame, setEditMgame] = useState({
    name: "",
    game_type: "",
    file_size: "",
    summary: "",
    img: ""
  })

  useEffect(() => {
    const currentMgame = mgames?.find((mgame) => mgame.id === +id);
    if (currentMgame) {
      setEditMgame({
        name: currentMgame.name,
        game_type: currentMgame.game_type,
        file_size: currentMgame.file_size,
        summary: currentMgame.summary,
        img: currentMgame.img
      });
    }
  }, [mgames, id]);

  const handleChange = (e) => {
    setEditMgame({ ...editMgame, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    updateMgame(editMgame, +id)
    navigate(`/mgameshow/${id}`)
  } 

  return(
    <div
      className="edit-form"
    >
      <h3>Mobile game editing page</h3>
      <br></br>
      <Form>
        <FormGroup>
          <Label for="mgame-name">Please enter the game name here:</Label>
          <Input 
            type="text" 
            name="name"
            value={editMgame.name} 
            onChange={handleChange} 
          />
        </FormGroup>

        <FormGroup>
          <Label for="mgame-type">What kind of game is it?</Label>
          <Input 
            type="text" 
            name="game_type"
            value={editMgame.game_type} 
            onChange={handleChange}
             
          />
        </FormGroup>

        <FormGroup>
          <Label for="mgame-file">File size of your game?</Label>
          <Input
            type="text" 
            name="file_size"
            value={editMgame.file_size}  
            onChange={handleChange} 
          />

        </FormGroup>

        <FormGroup>
          <Label for="mgame-summary">Give some game summary</Label>
          <Input 
            type="text" 
            name="summary" 
            value={editMgame.summary} 
            onChange={handleChange} 
          />
        </FormGroup>

        <FormGroup>
          <Label for="mgame-img">Provide a cool image of the game!</Label>
          <Input 
            type="url" 
            name="img" 
            value={editMgame.img} 
            onChange={handleChange} 
          />
        </FormGroup>

        <Button onClick={handleSubmit} name="submit">
          Submit update to game
        </Button>

        {' | '}

        <Button
        color="dark"
         href={`/mgameshow/${id}`}
        >
          Back
        </Button>

        {' | '}

        <br></br>

        <Button
         color="danger"
         onClick={() => destroyMgame(id)}
         className="delete"
        >
          Delete this game
        </Button>

      </Form>

    </div>
  )
}

export default MgameEdit