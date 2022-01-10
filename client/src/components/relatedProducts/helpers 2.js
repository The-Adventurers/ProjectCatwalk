const getOutfitCard = (currentProduct, results) => {
  let outfit = setProductInfo(currentProduct);
  outfit = setStylesInfo(outfit, results[0].data.results);
  outfit.rating = calculateRating(results[1].data.ratings) || 0;
  return outfit;
}

const getRelatedCards = (results) => {
  let allProductInfo = [];
  for (var i = 0; i < results.length; i+=3) {
    let productInfo = setProductInfo(results[i]);
    productInfo = setStylesInfo(productInfo, results[i + 1].results)
    productInfo.rating = calculateRating(results[i + 2].ratings) || 0;
    allProductInfo.push(productInfo);
  }
  return allProductInfo;
}

const setProductInfo = (currentProduct) => {
  let outfit = {
    id: currentProduct.id,
    category: currentProduct.category,
    name: currentProduct.name,
    defaultPrice: currentProduct.default_price,
    features: currentProduct.features
  }
  return outfit;
}

const setStylesInfo = (product, styles) => {
  for (let i = 0; i < styles.length; i++) {
    if (styles[i]['default?']) {
      product.thumbnailUrl = styles[i].photos[0].thumbnail_url;
      if (styles[i].sale_price) {
        product.salePrice = styles[i].sale_price;
      }
    }
  }
  product.thumbnailUrl = product.thumbnailUrl || styles[0].photos[0].thumbnail_url;
  return product;
}

const calculateRating = (ratings) => {
  let numberOfRatings = 0;
  let totalRating = 0;
  for (let key in ratings) {
    numberOfRatings += Number(ratings[key]);
    totalRating += (Number(key) * Number(ratings[key]));
  }
  return totalRating / numberOfRatings;
}

const starConverter = (rating) => {
  const starRatings = {
    0 : "☆☆☆☆☆",
    1 : "★☆☆☆☆",
    2 : "★★☆☆☆",
    3 : "★★★☆☆",
    4 : "★★★★☆",
    5 : "★★★★★"
  };
  let newRating = Math.round(rating);
  return starRatings[newRating];
};

export { getOutfitCard, getRelatedCards, starConverter };