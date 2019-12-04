import differenceInCalendarMonths from "date-fns/differenceInCalendarMonths";
import differenceInCalendarYears from "date-fns/differenceInCalendarYears";

export const errorMessageExtrator = error => {
  if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.error
  ) {
    return error.response.data.message || error.response.data.error;
  } else {
    return error.message;
  }
};

export function toNormalDate(date) {
  return new Date(date).toDateString();
}

export function monthDiff(laterDate, earlierDate) {
  const splittedLaterDate = laterDate.split("-");
  const splittedEarlierDate = earlierDate.split("-");
  let diff = differenceInCalendarMonths(
    new Date(splittedLaterDate[0], splittedLaterDate[1], 1),
    new Date(splittedEarlierDate[0], splittedEarlierDate[1], 1)
  );
  if (diff <= 0) {
    return "(less than a month)";
  } else if (diff > 0 && diff < 12) {
    return `(${diff} months)`;
  } else {
    return `(${Math.round(diff / 12)} years)`;
  }
}

export function yearDiff(laterDate, earlierDate) {
  const splittedLaterDate = laterDate.split("-");
  const splittedEarlierDate = earlierDate.split("-");
  let diff = differenceInCalendarYears(
    new Date(splittedLaterDate[0], splittedLaterDate[1], 1),
    new Date(splittedEarlierDate[0], splittedEarlierDate[1], 1)
  );
  if (diff < 1) {
    return splittedLaterDate[0];
  } else if (diff > 1) {
    return `${splittedEarlierDate[0]} - ${splittedLaterDate[0]}`;
  } else {
    return splittedLaterDate[0];
  }
}

export function checkMyDateWithinRange(myDate, startDate = new Date()) {
  if (startDate <= myDate) {
    return "Please choose a future date";
  }
  return myDate;
}
