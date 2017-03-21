const hobby = (state, action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return {
        id: action.id,
        text: action.text,
      };
    default:
      return state;
  }
};

const hobbies = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        hobby(undefined, action)
      ];
    default:
      return state;
  }
};

module.exports.hobbies = hobbies;
