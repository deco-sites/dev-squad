export const encode = (json: string) => {
  return btoa(json);
};

export const decode = (base64: string) => {
  return atob(base64);
};
