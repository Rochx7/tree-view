export const sanitize = (str: string) => {
  const withoutAccents = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const sanitizedString = withoutAccents.toLowerCase().replace(/\s+/g, "-");
  return sanitizedString;
};
