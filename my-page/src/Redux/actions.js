export const actionTypes = {
  UPDATE_AUTH: 'UPDATE_AUTH',
  UPDATE_SETTINGS: 'UPDATE_SETTINGS',
};

export const updateAuth = (user) => ({
  type: actionTypes.UPDATE_AUTH,
  payload: user
});
