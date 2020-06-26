const INITIAL_STATE = {
  city: 'INITIAL VALUE',
};

const searchedCity = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@searchedCity/SET_CITY_NAME': {
      return { ...state, city: action.payload.city };
    }

    default: {
      return state;
    }
  }
};

export default searchedCity;
