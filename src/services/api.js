import axios from "axios";

// process.env.githubEndpoint = "https://api.github.com";

// GET https://api.gastronaut.ai/codeTest/:restaurantId
// For Testing available restaurantIds: 'neo-heidelberg', 'schillingroofbar'
export const restaurantApi = axios.create({
  baseURL: "https://api.gastronaut.ai/codeTest/"
});

// GET https://api.gastronaut.ai/v02/language/codeTest/:language
// Currently Available: de, en
export const languageApi = axios.create({
  baseURL: "https://api.gastronaut.ai/v02/language/codeTest/"
});
