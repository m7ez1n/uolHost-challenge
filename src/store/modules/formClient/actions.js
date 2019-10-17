export function addNewClientRequest(client) {
  return {
    type: '@client/NEW_CLIENT_REQUEST',
    client,
  };
}

export function addNewClientSuccess(client) {
  return {
    type: '@client/NEW_CLIENT_SUCCESS',
    client,
  };
}
