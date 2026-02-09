// Helper function to fetch all products
const fetchAllProducts = () => {
  return fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      const products = data.products;
      return products;
    });
  // .catch((error) => {
  //   console.error(error);
  // });
};
fetchAllProducts();

// Helper function to fetch a single product by ID
// const fetchProductById = (productId) => {
//   fetch("https://dummyjson.com/products/1")
//     .then((res) => res.json())
//     .then((data) => {
//       const idProduct = products.find((p) => p.productId);
//     });
// };
// fetchProductById();

// 1. Sum of all prices
const sumAllPrices = (fetchAllProducts) => {
  fetchAllProducts().then((res) =>
    res.reduce((product) => {
      acc += product.price;
    }, 0),
  );
};
sumAllPrices();
// 2. Get email of all reviewers of product X
const getReviewerEmails = (productId) => {};

// Export functions for testing
module.exports = {
  sumAllPrices,
  getReviewerEmails,
  fetchAllProducts,
  fetchProductById,
};
