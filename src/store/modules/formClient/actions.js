export function addNewClientRequest(id, name, cpf, email, phone, status) {
  return {
    type: '@client/NEW_CLIENT_REQUEST',
    id,
    name,
    cpf,
    email,
    phone,
    status,
  };
}

export function addNewClientSuccess(id, name, cpf, email, phone, status) {
  return {
    type: '@client/NEW_CLIENT_SUCCESS',
    id,
    name,
    cpf,
    email,
    phone,
    status,
  };
}
