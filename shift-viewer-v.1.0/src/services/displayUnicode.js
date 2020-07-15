const displayUnicode = (duty) => {
  switch (duty) {
    case "night":
      return "🌙";
    case "day":
      return "☀";
    default:
      return "-";
  }
};

export default displayUnicode;