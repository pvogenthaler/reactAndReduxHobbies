let nextHobbyId = 0;

export const addHobby = (text) => ({
  type: 'ADD_HOBBY',
  id: nextHobbyId++,
  text
});
