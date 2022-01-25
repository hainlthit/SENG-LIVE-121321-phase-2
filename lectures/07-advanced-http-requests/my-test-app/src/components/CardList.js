// Will accept an array of Card objects as props
import Card from './Card';

function CardList({ cards, handleRemoveCard, handleEditCard }) {
    // cards => props object
    // { cards } => props.cards

    return (
        <div className="card-list">
            <h2 className="component-name">CardList Component</h2>
            <br />

            {[...cards].reverse().map(card => {
                return (
                    <Card 
                        key={card.id} 
                        card={card}
                        title={card.title} 
                        content={card.content} 
                        handleRemoveCard={handleRemoveCard}
                        handleEditCard={handleEditCard}
                        // 🚧 Pass handleRemoveCard() and handleEditCard as props
                    />
                );
            })}
        </div>
    );
}

export default CardList; 