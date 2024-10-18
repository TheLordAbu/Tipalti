export const formatDate = (date: string): string => {
  const newDate = new Date(date);
  const time = newDate.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
  });
  const formattedDate = newDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  });
  return `${time} - ${formattedDate}`;
};
