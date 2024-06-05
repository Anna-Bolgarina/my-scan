import mainInstance from "./Api";

const accountInfoFetch = async () => {
  const response = await mainInstance.get("account/info");
  return response;
};
export default accountInfoFetch;
