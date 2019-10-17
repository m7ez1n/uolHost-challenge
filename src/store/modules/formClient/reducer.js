import produce from 'immer';

export default function client(state = [], action) {
  switch (action.type) {
    case '@client/NEW_CLIENT_SUCCESS':
      return produce(state, draft => {
        const { id, name, cpf, email, phone, status } = action;

        draft.push(id, name, cpf, email, phone, status);
      });
    default:
      return state;
  }
}
