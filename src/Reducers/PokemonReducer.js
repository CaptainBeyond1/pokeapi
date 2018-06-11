export default function reducer(state = {
    pokemonList: []
}, action)
{
    switch (action.type) {
        case 'FETCHED_POKEMON': {
            return {
                ...state,
                pokemonList: action.payload
            }
        }
        default: return state;
    }
}