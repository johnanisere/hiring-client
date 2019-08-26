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

export function toIso(date, time) {
  let newDate = new Date(date);

  let year = newDate.getFullYear(),
    month = newDate.getMonth(),
    day = newDate.getDate();

  let x = time.split(':');

  let hour = x[0].trim();
  let min = x[1].trim();

  let expectedDate = new Date(year, month, day, hour, min);
  return expectedDate;
}
