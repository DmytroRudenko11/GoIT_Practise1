

const KEY = 'authToken';

export const setTokenToLocaleStorage = (token) => {
  localStorage.setItem(KEY, JSON.stringify(token))
};

export const getTokenFromLocaleStorage = () => {
    return JSON.parse(localStorage.getItem(KEY))
};

export const removeTokenFromLocaleStorage = () => {
    localStorage.removeItem(KEY);
}