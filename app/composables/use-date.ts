export function useDate() {
  let today = new Date();

  let date = today.toLocaleString("ru-RU", {
    hour12: false,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  let number = `${today.getDate()}${today.getMonth() + 1}${today.getMinutes()}${today.getSeconds()}`;

  let fullYear = today.getFullYear();

  return { date, number, fullYear };
}
