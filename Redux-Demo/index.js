const CAKE_ORDERED = 'CAKE_ORDERED';

// Action
function orderCake() {
    return {
        type: CAKE_ORDERED,
        quantity: 1,
    }
}

const initialState = {
    numberOfCakes : 10
}


// (previousState, action) => newState

const reducer = (state = initialState, action) => {
    switch(action.type){
        case CAKE_ORDERED:
            return {
                numberOfCakes: state.numberOfCakes - 1;
            }
    }
}