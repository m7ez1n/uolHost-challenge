import produce from 'immer';

export default function client(state = [], action) {
  switch (action.type) {
    case '@client/UPDATE_CLIENT_SUCCESS':
      return produce(state, draft => {
        const clientIndex = draft.findIndex(c => c.id === action.id);

        if (clientIndex) {
          draft[clientIndex] = action;
        }
      });
    default:
      return state;
  }
}
