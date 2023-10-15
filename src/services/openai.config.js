import axios from 'axios';

const model = "text-davinci-003"
const baseURL = `https://api.openai.com/v1/engines/${model}/completions`
// https://api.openai.com/v1/completions
// https://api.openai.com/v1/chat/completions

// export function aiRequest(message){
//     const data = {
//         prompt: `${message}`,
//         temperature: 0.2,
//         max_tokens: 2000,
//         top_p: 1,
//         frequency_penalty: 0.5,
//         presense_penalty: 0,
//     }
//     //console.log(import.meta.env.VITE_OPENAI_API_KEY)
//     //console.log(data)

//     return axios.post(baseURL, data, {
//         headers: {
//             'content-type': 'application/json;charset=UTF-8',
//             'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
//         },
//     });
// } 

// import axios from "axios";

// const model = "text-davinci-003";
// const baseURL = `https://api.openai.com/v1/engines/${model}/completions`;

export function aiRequest(message) {
  const data = {
    prompt: `${message}`,
    temperature: 0.2,
    max_tokens: 3000,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  };

  return axios.post(baseURL, data, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },
  });
}