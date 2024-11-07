export const calculateWidth = (windowWidth: number) => {
  if (windowWidth > 1050) {
    return 4;
  }

  if (windowWidth > 997) {
    return 3.6;
  }

  if (windowWidth > 880) {
    return 3.3;
  }

  if (windowWidth > 767) {
    return 3;
  }

  if (windowWidth > 639) {
    return 2;
  }

  if (windowWidth > 550) {
    return 1.8;
  }

  if (windowWidth > 485) {
    return 1.6;
  }

  if (windowWidth > 429) {
    return 1.4;
  }

  if (windowWidth > 400) {
    return 1.3;
  }

  if (windowWidth > 370) {
    return 1.2;
  }

  if (windowWidth > 336) {
    return 1.1;
  }

  return 1;
};
