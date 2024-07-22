import OpenAI from 'openai';
import { OPENAI_KEY } from './constant';

const openai = new OpenAI({
  apiKey: process.env[OPENAI_KEY], // This is the default and can be omitted
  dangerouslyAllowBrowser:true,
 apiKey: 'My API Key'

});

export default openai;






// utils/openai.js
// import { Configuration, OpenAIApi } from 'openai';

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_KEY,
// });

// const openai = new OpenAIApi(configuration);

// export default openai;


