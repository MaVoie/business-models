export function userExistsInStore(state) {
  if (state?.user?.uid && state.user.uid?.trim() !== "") {
    return true;
  }
  return false;
}

export function getSendinBlueFormatDate(date) {
  if (date?.includes("/")) {
    const dateInfo = date.split("/");
    return `${dateInfo[0]}-${dateInfo[1]}-${dateInfo[2]}`;
  }
  return "";
}

export function getNewUserAnonym() {
  return {
    uid: "",
    firstName: "",
    lastName: "",
    email: "",
    note: 0,
    comment: "",
    createDate: new Date().toLocaleString("fr-Fr"),
    updateDate: "",
    questionnaire: [],
  };
}

export function isEmailValidRFC822(email) {
  if (typeof email !== "string") {
    // Handle Error
    throw new Error("Invalid input of email");
  }
  const regex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  // We do the matching with lower cases because the regex only contains lower cases
  return email.toLowerCase().match(regex);
}
