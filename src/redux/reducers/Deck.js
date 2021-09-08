const initialState = {
    deck: []
}

function deckReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_CARD":
            return {
                ...state,
                deck: state.deck.concat(action.deck)

            }
        case "REMOVE_CARD":
            return {
                ...state,
                deck: state.deck.concat(action.deck)
                
    //             const nextDeck = [...deck];
    // const index = nextDeck.findIndex(card => card.id === id);

    // if (index !== -1) {
    //   nextDeck.splice(index, 1);
      
    } 

            
        case "INCREASE_CARD":
            // let newState = { ...state }
            // let newDeck = newState.deck
            
            let newDeck = [...state.deck]
            newDeck[action.index].count++
            
            

            return {

                ...state,
                deck: newDeck
                
            }
            
            
        case "DECREASE_CARD":
            let newDeck2 = [...state.deck]
            newDeck2[action.index].count--
            return {
                ...state,
                deck: newDeck2
            }
        default:
            return state


    }
}
export default deckReducer