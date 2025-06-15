export const formatDateDots = (currentDate: Date) => {
  const day = String(currentDate.getUTCDate()).padStart(2, '0');
  const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0');
  const year = currentDate.getUTCFullYear().toString().slice(2);

  return `${day}.${month}.${year}`;
};

export const formatDate = (currentDate: string) => {
  const date = new Date(currentDate);

  return date.toISOString().replace('T', ' ').substring(0, 16);
};
