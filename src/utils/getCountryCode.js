export const getCountryCode = (countryName) => {
  let countryCode;
  switch (countryName) {
    case "Italy":
      countryCode = "IT";
      break;
    case "Germany":
      countryCode = "DE";
      break;
    case "France":
      countryCode = "FR";
      break;
    case "Austria":
      countryCode = "AT";
      break;
    case "Switzerland":
      countryCode = "CH";
      break;
    case "United States":
      countryCode = "US";
      break;
    case "Canada":
      countryCode = "CA";
      break;
    default:
      countryCode = "";
      break;
  }
  return countryCode;
};
