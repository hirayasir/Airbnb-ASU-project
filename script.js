/**
 * Filters an array of listing cities to match the target city (case-insensitive).
 * @param {string} targetCity - The city to filter for.
 * @param {Array} listingCityArray - An array of listing cities to filter.
 * @returns {Array} - An array containing the indices of the cities that match the target city.
 */
function filterByCity(targetCity, listingCityArray) {
    // Define an array to keep track of indices
    let indices = [];
  
    // Create a loop to iterate over each element in listingCityArray
    for (let i = 0; i < listingCityArray.length; i++) {
      // Check if the target city matches the current city in the array (account for capitalization)
      if (targetCity.toLowerCase() === listingCityArray[i].toLowerCase()) {
        // If they match, add the index to the indices array
        indices.push(i);
      }
    }
  
    // Return the array of indices
    return indices;
  }
  
  /**
   * Filters an array of listing prices to match the specified price range.
   * @param {number} minPrice - The minimum price.
   * @param {number} maxPrice - The maximum price.
   * @param {Array} listingPriceArray - An array of listing prices to filter.
   * @returns {Array} - An array containing the indices of the prices that fall within the specified range.
   */
  function filterByPrice(minPrice, maxPrice, listingPriceArray) {
    // Define an array to keep track of indices
    let indices = [];
  
    // Create a loop to iterate over each element in listingPriceArray
    for (let i = 0; i < listingPriceArray.length; i++) {
      // Check if the price falls within the specified range
      if (listingPriceArray[i] >= minPrice && listingPriceArray[i] <= maxPrice) {
        // If it does, add the index to the indices array
        indices.push(i);
      }
    }
  
    // Return the array of indices
    return indices;
  }
  
  /**
   * Filters an array of listing types to match the specified types.
   * @param {Array} targetTypes - An array of target types to filter for.
   * @param {Array} listingTypeArray - An array of listing types to filter.
   * @returns {Array} - An array containing the indices of the types that match any of the target types.
   */
  function filterByTypes(targetTypes, listingTypeArray) {
    // Define an array to keep track of indices
    let indices = [];
  
    // Loop over each element in listingTypeArray
    for (let i = 0; i < listingTypeArray.length; i++) {
      // Loop over each element in targetTypes
      for (let j = 0; j < targetTypes.length; j++) {
        // Check if the current type in listingTypeArray matches any of the target types
        if (listingTypeArray[i] === targetTypes[j]) {
          // If it does, add the index to the indices array and break out of the inner loop
          indices.push(i);
          break;
        }
      }
    }
  
    // Return the array of indices
    return indices;
  }
  