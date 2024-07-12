export const stringDate = (date: string, language: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
  const newDate = new Date(date);

  return newDate.toLocaleDateString(language, options);
}