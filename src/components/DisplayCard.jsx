import PropTypes from 'prop-types'

const DisplayCard = ({data, removeData}) => {

 

    return (
        <div className="cardContainer">
        {data.map((card, index) => (
            <div key={index} className="card" style={{borderColor: card.border, backgroundColor: card.background}}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <button onClick={() => removeData(index)}>Eliminar</button>
            </div>
        ))}
        </div>
        
    )
    
}

DisplayCard.propTypes = {
    data: PropTypes.array,
    removeData: PropTypes.func
}

export default DisplayCard

