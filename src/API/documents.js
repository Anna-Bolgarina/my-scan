import mainInstance from "./Api";

 const documentsFetch = async (data) => {
    const response = await mainInstance.post('documents', data);
    return response
}
export default documentsFetch;