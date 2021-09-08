export const actionAddToDeck = (nextDeck) => {
    return {
        type: "ADD_CARD",
        deck: nextDeck
    }

}

export const actionRemoveToDeck = (nextDeck) => {
    return {
        type: "REMOVE_CARD",
        deck: nextDeck
    }

}

export const actionIncrement = (index) => {
    return {
        type: "INCREASE_CARD",
        index
    }

}
export const actionDecrement = (index) => {
    return {
        type: "DECREASE_CARD",
        index
    }

}