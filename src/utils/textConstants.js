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
  gptPrompt : "prioritizing efficiency in API call time Act as expert and catchy email writers, Assume I am requesting for a refferal and request as me, make use of the personal information provided, articulate a best refferal message. Give me 4 different refferal messages which should have 130 to 170 word count,  in object form which differ from each other and the object structure sholud be as follows   {sub: subject one, reffralmsg: reffral msg1} give it in a way that i have a  where i can map over it easily, Please note give the object as per exapmle json, fill in the details provided where ever neccesary"

}

export default { INPUT_TYPE, EMPTY_LABEL, REGEX,GPT_FEED };
