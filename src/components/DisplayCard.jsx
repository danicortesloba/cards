import PropTypes from 'prop-types'

const DisplayCard = ({data}) => {

    return (
        <div className="cardContainer">
        {data.map((card, index) => (
            <div key={index} className="card" style={{borderColor: card.border, backgroundColor: card.background}}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
            </div>
        ))}
        </div>
        
    )
    
}

DisplayCard.propTypes = {
    data: PropTypes.array
}

export default DisplayCard

