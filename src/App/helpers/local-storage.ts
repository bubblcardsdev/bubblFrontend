const ACCESSTOKEN = "accesstoken";
const REFRESHTOKEN = "refreshtoken";
const REGISTER = "register";
const EMAIL = "email";
const COUNTRYCODE = "countryCode";
const PHONENUMBER = "phoneNumber";
const FIRSTNAME = "firstName";
const LASTNAME = "lastName";
const CLAIMNAME = "claimName";
const TokenExperiationTIme = "tokenExpirationTIme";
const PRICETOTAL = "priceTotal";
const CARDPRICE = "cardPrice";
const ITEMNUMBER = "itemNumber";
const ROUTEVAL = "routeValue";
const SHIPPINGDETAILS = "shippingDetails";
const CHECKLOGIN = "checkLogin";

const CARTVALUE = "cart";

const set = (key: string, value: string) => localStorage.setItem(key, value);
const get = (key: string) => localStorage.getItem(key);
const remove = (key: string) => localStorage.removeItem(key);
// Experation Time
export const setExperimentTime = (timeToExpire: string) =>
  set(TokenExperiationTIme, timeToExpire);
export const getExperationTime = () => get(TokenExperiationTIme);
export const removeExpirationTime = () => remove(TokenExperiationTIme);

// Token
export const getAccessToken = () => get(ACCESSTOKEN);
export const setAccessToken = (token: string) => set(ACCESSTOKEN, token);
export const removeAccessToken = () => remove(ACCESSTOKEN);

export const getfirstName = () => get(FIRSTNAME);
export const setfirstName = (firstname: string) => set(FIRSTNAME, firstname);
export const removefirstName = () => remove(FIRSTNAME);

export const getlastName = () => get(LASTNAME);
export const setlastName = (lastname: string) => set(LASTNAME, lastname);
export const removelastName = () => remove(LASTNAME);

export const getRefreshToken = () => get(REFRESHTOKEN);
export const setRefreshToken = (token: string) => set(REFRESHTOKEN, token);
export const removeRefreshToken = () => remove(REFRESHTOKEN);

export const getEmail = () => get(EMAIL);
export const setEmail = (email: string) => set(EMAIL, email);
export const removeEmail = () => remove(EMAIL);

export const getcountryCode = () => get(COUNTRYCODE);
export const setcountryCode = (countryCode: string) =>
  set(COUNTRYCODE, countryCode);
export const removecountryCode = () => remove(COUNTRYCODE);

export const getphoneNumber = () => get(PHONENUMBER);
export const setphoneNumber = (phoneNumber: string) =>
  set(PHONENUMBER, phoneNumber);
export const removephoneNumber = () => remove(PHONENUMBER);

export const getclaimName = () => get(CLAIMNAME);
export const setclaimName = (claimLinkName: string) =>
  set(CLAIMNAME, claimLinkName);
export const removeclaimName = () => remove(CLAIMNAME);

export const setRegisterData = (user: object) =>
  set(REGISTER, JSON.stringify(user));
export const getRegisterData = () => {
  const registerData = get(REGISTER);
  return registerData ? JSON.parse(registerData) : null;
};
export const removeRegisterData = () => remove(REGISTER);

// For Add to Cart

// For set the value in Cart Item
export const setCartValue = (cart: any[]) =>
  set(CARTVALUE, JSON.stringify(cart));

// For get the value from Cart Item
export const getCartValue = () => get(CARTVALUE);
// For set the total Price

export const setPriceValue = (priceTotal: any) => set(PRICETOTAL, priceTotal);
export const setCardPrice = (cardPrice: any) => set(CARDPRICE, cardPrice);
export const setItemNumber = (itemNumber: any) => set(ITEMNUMBER, itemNumber);
export const getPriceValue = () => get(PRICETOTAL);
export const getCardPrice = () => get(CARDPRICE);
export const getItemNumber = () => get(ITEMNUMBER);
export const removeCartValue = () => remove(CARTVALUE);
export const removePriceValue = () => remove(PRICETOTAL);

export const setRouteValue = (routeValue: string) => set(ROUTEVAL, routeValue);
export const getRouteValue = () => get(ROUTEVAL);
export const removeRouteVal = () => remove(ROUTEVAL);

export const setShippingDetails = (shipping: any) =>
  set(SHIPPINGDETAILS, JSON.stringify(shipping));
export const getShippingDetails = () => get(SHIPPINGDETAILS);
export const removeShippingDetails = () => remove(SHIPPINGDETAILS);

export const setCheckLogin = (checkLogin: any) => set(CHECKLOGIN, checkLogin);
export const getCheckLogin = () => get(CHECKLOGIN);
export const removeCheckLogin = () => remove(CHECKLOGIN);
