export const getAllFeatured = `*[_type == 'featured']{...,restaurant[] ->{...,dishes[]->}}`;

  export const getAllCategories = `*[_type == 'category']`;
  export const getRestaurantById = (id) => {
    
  }