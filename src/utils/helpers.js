function getAfterDaysDate(day) {
  let today = new Date();
  let afterDate = new Date();
  afterDate.setDate(today.getDate() + day);
  return afterDate
}


export default getAfterDaysDate;