export function formatDate(inputDate) {
  const date = new Date(inputDate);
  if (isNaN(date)) return "Invalid Date";

  const options = { day: "numeric", month: "long", year: "numeric" };
  return date.toLocaleDateString("en-GB", options);
}
