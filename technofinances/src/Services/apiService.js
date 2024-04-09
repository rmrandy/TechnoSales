// import axios from "axios";

// const updateAIModelSettings = async () => {
//   const options = {
//     method: "POST",
//     url: "https://askpdf1.p.rapidapi.com/api/v1/ai-model-settings/update",
//     headers: {
//       "content-type": "application/json",
//       "X-RapidAPI-Key": "b1a6e3c499msh234621e7f28f4d2p1f6ee9jsn01edeb2a2996",
//       "X-RapidAPI-Host": "askpdf1.p.rapidapi.com",
//     },
//     data: {
//       openai_key: "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
//       chat_agent_model: "gpt-3.5-turbo-1106",
//       chat_agent_model_temp: 0.5,
//       chat_tools_model: "text-davinci-003",
//       chat_tools_model_temp: 1,
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     return response.data;
//   } catch (error) {
//     console.error("Error al actualizar la configuración del modelo AI:", error);
//     throw error;
//   }
// };

// export { updateAIModelSettings };
