export const sliseAddress = (value: string) => {
  if (value.length >= 9) {
    const newValue = value.slice(0, 4) + '...' + value.slice(-4);
    return newValue;
  }

  return value;
};
