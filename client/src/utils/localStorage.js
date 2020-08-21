export const getSavedStateIds = () => {
  const savedStateIds = localStorage.getItem('saved_state_search')
    ? JSON.parse(localStorage.getItem('saved_state_search'))
    : [];

  return savedStateIds;
};

export const saveStateIds = (stateIdArr) => {
  if (stateIdArr.length) {
    localStorage.setItem('saved_state_search', JSON.stringify(stateIdArr));
  } else {
    localStorage.removeItem('saved_state_search');
  }
};

export const removeStateId = (stateId) => {
  const savedStateIds = localStorage.getItem('saved_state_search')
    ? JSON.parse(localStorage.getItem('saved_state_search'))
    : null;

  if (!savedStateIds) {
    return false;
  }

  const updatedSavedStateIds = savedStateIds?.filter((savedStateId) => savedStateId !== stateId);
  localStorage.setItem('saved_state_search', JSON.stringify(updatedSavedStateIds));

  return true;
};

