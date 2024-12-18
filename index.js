//Creating a Server with Express.js
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

//requiring path
const path = require('path');


//Importing the PalmAPI
const { TextServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");


//Extra Needed Dependencies
const bodyParser = require('body-parser');
const cors = require('cors');

//MiddleWares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}))

//Declaring the PORT as 8080 or the value that the host gives
const PORT = 8080 || process.env.PORT;

app.get("/",(req,res)=>{
    res.send("hello world");
})

//Fetching Data Using The API

const MODEL_NAME = "models/text-bison-001";
const API_KEY = "AIzaSyDIYhcti3wq0CUt9jHK_UsA6ku4SKomhoc";

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});


//Bhagavad Gita

app.post('/gita', (req, res) => {
    try{

        const promptString = "according to bhagavad gita :" + req.body.question + "explain in detail description";
        const stopSequences = [];

  client.generateText({
    // required, which model to use to generate the result
    model: MODEL_NAME,
    // optional, 0.0 always uses the highest-probability result
    temperature: 0,
    // optional, how many candidate results to generate
    candidateCount: 1,
    // optional, number of most probable tokens to consider for generation
    top_k: 40,
    // optional, for nucleus sampling decoding strategy
    top_p: 0.95,
    // optional, maximum number of output tokens to generate
    max_output_tokens: 1024,
    // optional, sequences at which to stop model generation
    stop_sequences: stopSequences,
    // optional, safety settings
    safety_settings: [{"category":"HARM_CATEGORY_DEROGATORY","threshold":1},{"category":"HARM_CATEGORY_TOXICITY","threshold":1},{"category":"HARM_CATEGORY_VIOLENCE","threshold":2},{"category":"HARM_CATEGORY_SEXUAL","threshold":2},{"category":"HARM_CATEGORY_MEDICAL","threshold":2},{"category":"HARM_CATEGORY_DANGEROUS","threshold":2}],
    prompt: {
      text: promptString,
    },
}).then(result => {
        res.json(result[0]?.candidates[0]?.output); // the ?. operator checks if the value is undefined or not. If it is found undefined then it stops and sends empty string
});
}
catch(e){
    res.json("fail");
}
});


//Quran

app.post('/quran', (req, res) => {
    try{

        const promptString = "according to quran :" + req.body.question + ",explain in brief";
        const stopSequences = [];

  client.generateText({
    // required, which model to use to generate the result
    model: MODEL_NAME,
    // optional, 0.0 always uses the highest-probability result
    temperature: 0.25,
    // optional, how many candidate results to generate
    candidateCount: 1,
    // optional, number of most probable tokens to consider for generation
    top_k: 40,
    // optional, for nucleus sampling decoding strategy
    top_p: 0.95,
    // optional, maximum number of output tokens to generate
    max_output_tokens: 1024,
    // optional, sequences at which to stop model generation
    stop_sequences: stopSequences,
    // optional, safety settings
    safety_settings: [{"category":"HARM_CATEGORY_DEROGATORY","threshold":1},{"category":"HARM_CATEGORY_TOXICITY","threshold":1},{"category":"HARM_CATEGORY_VIOLENCE","threshold":2},{"category":"HARM_CATEGORY_SEXUAL","threshold":2},{"category":"HARM_CATEGORY_MEDICAL","threshold":2},{"category":"HARM_CATEGORY_DANGEROUS","threshold":2}],
    prompt: {
      text: promptString,
    },
}).then(result => {
        res.json(result[0]?.candidates[0]?.output); // the ?. operator checks if the value is undefined or not. If it is found undefined then it stops and sends empty string
});
}
catch(e){
    res.json("fail");
    // console.log(e);
}
});


//Bible

app.post('/bible', (req, res) => {
    try{

        const promptString = "according to bible :" + req.body.question + "explain in detail description";
        const stopSequences = [];

  client.generateText({
    // required, which model to use to generate the result
    model: MODEL_NAME,
    // optional, 0.0 always uses the highest-probability result
    temperature: 0.25,
    // optional, how many candidate results to generate
    candidateCount: 1,
    // optional, number of most probable tokens to consider for generation
    top_k: 40,
    // optional, for nucleus sampling decoding strategy
    top_p: 0.95,
    // optional, maximum number of output tokens to generate
    max_output_tokens: 1024,
    // optional, sequences at which to stop model generation
    stop_sequences: stopSequences,
    // optional, safety settings
    safety_settings: [{"category":"HARM_CATEGORY_DEROGATORY","threshold":1},{"category":"HARM_CATEGORY_TOXICITY","threshold":1},{"category":"HARM_CATEGORY_VIOLENCE","threshold":2},{"category":"HARM_CATEGORY_SEXUAL","threshold":2},{"category":"HARM_CATEGORY_MEDICAL","threshold":2},{"category":"HARM_CATEGORY_DANGEROUS","threshold":2}],
    prompt: {
      text: promptString,
    },
}).then(result => {
        res.json(result[0]?.candidates[0]?.output); // the ?. operator checks if the value is undefined or not. If it is found undefined then it stops and sends empty string
});
}
catch(e){
    res.json("fail");
    // console.log(e);
}
});


//Tipitaka

app.post('/tripitaka', (req, res) => {
    try{

        const promptString = "according to tripitaka :" + req.body.question + "explain in detail description";
        const stopSequences = [];

  client.generateText({
    // required, which model to use to generate the result
    model: MODEL_NAME,
    // optional, 0.0 always uses the highest-probability result
    temperature: 0.25,
    // optional, how many candidate results to generate
    candidateCount: 1,
    // optional, number of most probable tokens to consider for generation
    top_k: 40,
    // optional, for nucleus sampling decoding strategy
    top_p: 0.95,
    // optional, maximum number of output tokens to generate
    max_output_tokens: 1024,
    // optional, sequences at which to stop model generation
    stop_sequences: stopSequences,
    // optional, safety settings
    safety_settings: [{"category":"HARM_CATEGORY_DEROGATORY","threshold":1},{"category":"HARM_CATEGORY_TOXICITY","threshold":1},{"category":"HARM_CATEGORY_VIOLENCE","threshold":2},{"category":"HARM_CATEGORY_SEXUAL","threshold":2},{"category":"HARM_CATEGORY_MEDICAL","threshold":2},{"category":"HARM_CATEGORY_DANGEROUS","threshold":2}],
    prompt: {
      text: promptString,
    },
}).then(result => {
        res.json(result[0]?.candidates[0]?.output); // the ?. operator checks if the value is undefined or not. If it is found undefined then it stops and sends empty string
});
}
catch(e){
    res.json("fail");
    // console.log(e);
}
});


//Chat One on One

app.post('/chat/:chatname', (req, res) => {
    try{

        const promptString = `suppose you are lord ${req.params.chatname}, now answer me:  ${req.body.question},  explain`;
        const stopSequences = [];

  client.generateText({
    // required, which model to use to generate the result
    model: MODEL_NAME,
    // optional, 0.0 always uses the highest-probability result
    temperature: 0,
    // optional, how many candidate results to generate
    candidateCount: 1,
    // optional, number of most probable tokens to consider for generation
    top_k: 40,
    // optional, for nucleus sampling decoding strategy
    top_p: 0.95,
    // optional, maximum number of output tokens to generate
    max_output_tokens: 1024,
    // optional, sequences at which to stop model generation
    stop_sequences: stopSequences,
    // optional, safety settings
    safety_settings: [{"category":"HARM_CATEGORY_DEROGATORY","threshold":1},{"category":"HARM_CATEGORY_TOXICITY","threshold":1},{"category":"HARM_CATEGORY_VIOLENCE","threshold":2},{"category":"HARM_CATEGORY_SEXUAL","threshold":2},{"category":"HARM_CATEGORY_MEDICAL","threshold":2},{"category":"HARM_CATEGORY_DANGEROUS","threshold":2}],
    prompt: {
      text: promptString,
    },
}).then(result => {
        res.json(result[0]?.candidates[0]?.output); // the ?. operator checks if the value is undefined or not. If it is found undefined then it stops and sends empty string
});
}
catch(e){
    res.json("fail");
}
});

//Use Static File

app.use(express.static(path.join(__dirname,"./client/dist")));

app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,"./client/dist/index.html"));
});



//Listening to the server on given Port :

server.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})