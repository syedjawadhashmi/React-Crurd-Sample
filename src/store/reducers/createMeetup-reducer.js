export const CREATE_MEETUP = 'CREATE_MEETUP';
export const CREATE_MEETUP_SUCCESS = 'CREATE_MEETUP_SUCCESS';
export const CREATE_MEETUP_ERROR = 'CREATE_MEETUP_ERROR';

const INITIAL_STATE = {
  error: {
    on: false,
    message: null,
  },
  isLoading: false,
};

export const createMeetup =  (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_MEETUP:
      return {
        ...INITIAL_STATE,
        isLoading: true,
      };
    case CREATE_MEETUP_SUCCESS:
      return {
        ...INITIAL_STATE,
        isLoading: false,
      };
    case CREATE_MEETUP_ERROR:
      return {
        error: {
          on: true,
          message: 'Error happen while creating meetup!',
        },
        isLoading: false,
      };
    default:
      return state;
  }
};