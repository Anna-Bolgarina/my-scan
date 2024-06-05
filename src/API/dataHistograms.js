import mainInstance from "./Api";

 const dataHistograms = async (data) => {
    const response = await mainInstance.post('objectsearch/histograms', data);
    return response
}
export default dataHistograms;