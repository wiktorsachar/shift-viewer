const displayUnicode = (duty, pictogram) => {
  switch (duty) {
    case "night":
      return pictogram ? "🌙" : "noc";
    case "day":
      return pictogram ? "☀" : 'dzień';
    default:
      return pictogram ? "-" : "wolne";
  }
};

export default displayUnicode;