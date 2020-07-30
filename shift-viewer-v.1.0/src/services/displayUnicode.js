const displayUnicode = (duty) => {
  switch (duty) {
    case "night":
      return "noc 🌙";
    case "day":
      return "dzień ☀";
    default:
      return "wolne -";
  }
};

export default displayUnicode;