export const login = (user) => ({
  type: "LOGIN",
  payload: user,
});

export const loggedInAs = (user) => ({
  type: "LOGGED_IN_AS",
  payload: user,
});

export const signUpUser = (userData) => ({
  type: "SIGN_UP",
  payload: userData
})

export const addBusiness = (business) => {
  return {
    type: "ADD_BUSINESS",
    payload: business,
  };
};

export const updateBusiness = (business) => {
  return {
    type: "UPDATE_BUSINESS",
    payload: business,
  };
};

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER',
  };
};


