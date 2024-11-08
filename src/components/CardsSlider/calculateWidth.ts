export const calculateWidth = (windowWidth: number) => {
  if (windowWidth < 768) {
    const result = (windowWidth / 3.2) * 0.01;

    return Number(result.toFixed(2));
  }

  const result = (windowWidth / 2.56) * 0.01;

  if (result > 4) {
    return 4;
  }

  return Number(result.toFixed(2));
};
