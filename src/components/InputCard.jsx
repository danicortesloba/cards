import PropTypes from 'prop-types'
import { useState } from 'react'
const InputCard = ({updateData}) => {

    const initialCard = {
        title:"",
        description: "",
        border: "",
        background: ""
    }
const [card, setCard] = useState(initialCard)

const manageChange = (e) => {
    const {name, value} = e.target
    setCard({ ...card, [name]: value })
}

const handleSubmit = (e) => {
    e.preventDefault()
    updateData(card)
    setCard(initialCard)
}

    return(
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="title">
                <h3 className="label">Title</h3>
                <input
                className="input"
                id="title"
                type="text"
                name="title"
                value={card.title}
                onChange={manageChange}
                placeholder="title"
                />
            </label>
            <label htmlFor="description">
            <h3 className="label">Description</h3>
                <input
                className="input"
                id="description"
                type="text"
                name="description"
                value={card.description}
                onChange={manageChange}
                placeholder="description"
                />
            </label>
            <label htmlFor="border">
            <h3 className="label">Border</h3>
                <input
                className="input"
                id="border"
                type="text"
                name="border"
                value={card.border}
                onChange={manageChange}
                placeholder="border"
                />
            </label>
            <label htmlFor="background">
            <h3 className="label">Background</h3>
                <input
                className="input"
                id="background"
                type="text"
                name="background"
                value={card.background}
                onChange={manageChange}
                placeholder="background"
                />
            </label>
            <button className= "submit"type="submit">Agregar Tarjeta</button>
        </form>
    )

  
}
InputCard.propTypes = {
    updateData: PropTypes.func
}


export default InputCard



