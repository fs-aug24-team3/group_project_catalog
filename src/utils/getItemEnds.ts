export const getItemEnds = (totalQuantity: number) => {
  if (totalQuantity % 10 === 1 && totalQuantity !== 11) {
    return 'amount.total1';
  } else if (
    (totalQuantity % 10 === 2 ||
      totalQuantity % 10 === 3 ||
      totalQuantity % 10 === 4) &&
    totalQuantity !== 12 &&
    totalQuantity !== 13 &&
    totalQuantity !== 14
  ) {
    return 'amount.total2';
  } else {
    return 'amount.total3';
  }
};
