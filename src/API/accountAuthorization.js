import mainInstance from "./Api";

/**
 * 
 * {login:string, password:string}
 * @returns ({accessToken:string, expire:string})
 */

const accountAuthorizationFetch = async (data) => {
  const response = await mainInstance.post("account/login", data);
  return response;
};
export default accountAuthorizationFetch;
