export const FETCH_MY_MEETUPS = 'FETCH_MY_MEETUPS';


const INITIAL_STATE = {
  myMeetups: {
    data: [],
    isFetched: false,
    error: {
      on: false,
      message: null,
    },
  },
};

export const fetchMeetups = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${FETCH_MY_MEETUPS}_PENDING`:
      return INITIAL_STATE;
    case `${FETCH_MY_MEETUPS}_FULFILLED`:
      return {
        myMeetups: {
          data: action.payload,
          isFetched: true,
          error: {
            on: false,
            message: null,
          },
        },
      };
    case `${FETCH_MY_MEETUPS}_REJECTED`:
      return {
        myMeetups: {
          data: [],
          isFetched: true,
          error: {
            on: true,
            message: action.payload,
          },
        },
      };
    default:
      return state;
  }
};