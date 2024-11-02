export const daysOfWeek = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
export const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

export function getDateFromNow(daysFromNow = 1) {
  const dateFromNow = new Date().getDate() + daysFromNow;
  const dateUTC = new Date().setDate(dateFromNow);

  const fullDateFromNow = new Date(dateUTC);
  return fullDateFromNow;
}

export function moment(time: number) {
  let moment: "morning" | "afternoon" | "evening" = "morning";
  if (time < 12) {
    moment = "morning";
  }

  if (time < 16) {
    moment = "afternoon";
  }
  if (time !== 0 && time >= 16) {
    moment = "evening";
  }

  return moment;
}
