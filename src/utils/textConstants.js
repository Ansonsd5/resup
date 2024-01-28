const INPUT_TYPE = {
  TEXTBOX: "TEXTBOX",
  SEARCH_DROPDOWN : "SEARCH DROPDOWN",
};

const REGEX = {
  nameRegex : /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
  alphabetsOnly: /^[a-zA-Z]+$/,

};

const EMPTY_LABEL = {
  HEADER: "Oops! There is nothing to show",
  DETAILS: "You can try generating templates by entering your details",
};

const GPT_FEED  = {

}

export default { INPUT_TYPE, EMPTY_LABEL, REGEX, };
