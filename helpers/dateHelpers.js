// ** The Date Format expected is 'DD/MM/YYYY hh:mm:ss'
export function compareDateFormat(date1, date2, splitter = "/") {
  // ** The split will return an array ["DD", "MM", "YYYY, hh:mm:ss"]
  // ? note: the parseInt in "YYYY, hh:mm:ss" it will returns only the integer YYYY
  const dateInfo1 = date1.split(splitter).map((str) => parseInt(str));
  const dateInfo2 = date2.split(splitter).map((str) => parseInt(str));

  // ** Comparing the year
  if (dateInfo1[2] > dateInfo2[2]) {
    return 1;
  } else if (dateInfo1[2] < dateInfo2[2]) {
    return -1;
  }

  // ** Comparing the month
  if (dateInfo1[1] > dateInfo2[1]) {
    return 1;
  } else if (dateInfo1[1] < dateInfo2[1]) {
    return -1;
  }

  // ** Comparing the day
  if (dateInfo1[0] > dateInfo2[0]) {
    return 1;
  } else if (dateInfo1[0] < dateInfo2[0]) {
    return -1;
  }

  // ** It means that they have equal date
  return 0;
}
