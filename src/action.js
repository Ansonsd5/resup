import openai from "./utils/openAi";
const makeApiCall = async (customGptQuery) =>{

    try{
   
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: "assistant", content: customGptQuery }],
            model: "gpt-3.5-turbo",
          });
         
          console.log(gptResults);
          return gptResults;

    }catch (error){
   
        if (error.response && error.response.status === 429) {
         
            setTimeout(() => makeApiCall(customGptQuery), 1000);
          } else {
            console.error("API error:", error);
          }
    }


}

const commonFunc = {
    makeApiCall,
}

export default commonFunc;