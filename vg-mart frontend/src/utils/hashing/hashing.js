export const encodeString = (str) => {
    return btoa(str);
};

export const decodeString = (encodedStr) => {
    return atob(encodedStr);
};