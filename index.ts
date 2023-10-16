import {fileURLToPath} from "url";
import path from "path";
import {LlamaModel, LlamaContext, LlamaChatSession} from "node-llama-cpp";

// model name
//const MODEL_NAME = "mistral-7b-instruct-v0.1.Q5_K_M.gguf";
const MODEL_NAME = "llama-2-7b.Q5_K_M.gguf";

// get the models directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const modelsDirectory = path.join(__dirname, "../models");
const modelsPath = path.join(modelsDirectory, MODEL_NAME);


const model = new LlamaModel({
    modelPath : modelsPath
});

const context = new LlamaContext({model});
const session = new LlamaChatSession({context});

const warmupPrompt = "who would win at arm wrestling: pikachu or mr tickle?";
console.log("Human: " + warmupPrompt);

const warmupResponse = await session.prompt(warmupPrompt);

// show the results
console.log("AI: " + warmupResponse);

const prompt = "Answer in one word.  What is the opposite of true?";
console.log("Human: " + prompt);

const startTime = Date.now();
const response = await session.prompt(prompt);
const endTime = Date.now();

// show the results
console.log("AI: " + response);
console.log(`Execution Time: ${endTime - startTime} ms`);