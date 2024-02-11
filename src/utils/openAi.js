import OpenAI from "openai";
import { GPT_KEY } from "./textConstants";

const key = GPT_KEY;


if (!key) {
  throw new Error('The OPENAI_API_KEY is missing or empty.');
}

const openai = new OpenAI({
    apiKey: key,
    dangerouslyAllowBrowser : true,
  });

  export default openai;