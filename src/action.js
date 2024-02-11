import openai from "./utils/openAi";
const makeApiCall = async (customGptQuery) => {
  try {
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "assistant", content: customGptQuery }],
      model: "gpt-3.5-turbo",
    });

    return gptResults;
  } catch (error) {
    if (error.response && error.response.status === 429) {
      setTimeout(() => makeApiCall(customGptQuery), 500);
    } else {
      console.error("API error:", error);
    }
  }
};

const filterGptData = (response) =>{

  const temp = response.split("\n\n");
  const combinedString = temp.join('');


const matches = combinedString.match(/\{[^\}]*}/g);


const arrayOfObjects = matches?.map(match => {
  try {
    
    const cleanedMatch = match.replace(/[^\x20-\x7E]/g, '');
    return JSON.parse(cleanedMatch);
  } catch (error) {
    console.error('Error parsing JSON:', error);
    console.log('Problematic JSON:', match);
    return null;
  }
});


const filteredArrayOfObjects = arrayOfObjects?.filter(Boolean);
const tempOBJ =  filteredArrayOfObjects;
return tempOBJ;

}



const commonFunc = {
  makeApiCall,
  filterGptData
};

export default commonFunc;
