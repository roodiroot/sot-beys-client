export const thousandPrice = (price) => {
  // ₽ 3 990
  price = String(price);
  let arr = [];
  if (price.length > 3) {
    for (let i = 0; i < price.length; i++) {
      if (i % 3 === 0 && i !== 0) {
        arr.push(`${price.split('').reverse()[i]} `);
      } else {
        arr.push(price.split('').reverse()[i]);
      }
    }
  } else {
    return `₽ ${price}`;
  }

  return `₽ ${arr.reverse().join('')}`;
};
