export function updateClientRequest(id, name, email, phone, status) {
  return {
    type: '@client/UPDATE_CLIENT_REQUEST',
    id,
    name,
    email,
    phone,
    status,
  };
}

export function updateClientSuccess(id, name, email, phone, status) {
  return {
    type: '@client/UPDATE_CLIENT_SUCCESS',
    id,
    name,
    email,
    phone,
    status,
  };
}
