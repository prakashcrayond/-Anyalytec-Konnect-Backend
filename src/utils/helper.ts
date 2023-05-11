export const parseJwt = (token: any) => {
  return JSON.parse(Buffer.from(token, "base64").toString());
};
