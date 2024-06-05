import mainInstance from "./Api";

 const publicationIdFetch = async (data) => {
    const response = await mainInstance.post('objectsearch', data);
    return response
}
export default publicationIdFetch;