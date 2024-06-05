 const ArrayIds = (data) => {
  return data.items.map(idObj => idObj.encodedId)
}
export default ArrayIds