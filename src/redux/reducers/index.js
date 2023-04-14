const initialState = {
  favourites: {
    content: [],
  },
};

// lo stato iniziale è quello che viene generato automaticamente ad ogni refresh del browser, per poi essere modificato di nuovo ( in maniera "immutable")

// il reducer è una PURE FUNCTION (funzione pura), quindi non modificherà mai i suoi parametri direttamente

const mainReducer = (state = initialState, action) => {
  // da questa funzione, IN OGNI CASO o SITUAZIONE, dovremo PER FORZA ritornare IL NUOVO STATO globale dell'app
  switch (action.type) {
    // qui inseriamo i vari casi, per i diversi "type" degli oggetti "action" che arriveranno con la "dispatch"
    case "ADD_TO_FAVOURITE":
      return {
        ...state,
        favourites: {
          ...state.cart,
          content: [...state.favourites.content, action.payload],
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
