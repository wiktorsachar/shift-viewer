const getDayName = (dateArray) => {
  const date = new Date(...dateArray).getDay();
  switch (date) {
    case 0:
      return "ND";
    case 1:
      return "PN";
    case 2:
      return "WT";
    case 3:
      return "ŚR";
    case 4:
      return "CZW";
    case 5:
      return "PT";
    case 6:
      return "SO";
    default:
      return "error";
  }
};

export default getDayName;