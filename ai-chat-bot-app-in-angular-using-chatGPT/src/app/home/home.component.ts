import { Component,isDevMode } from '@angular/core';
import {Configuration, OpenAIApi} from "openai";
import { environment } from 'src/environments/environment';

import { gptModels } from '../models/constants';
import { ResponseModel } from '../models/gpt-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent  {

  response!: ResponseModel | undefined;
  gptModels = gptModels
  promptText='';
  showSpinner = false;
  
constructor(
  
) {}



checkResponse() {
  this.invokeGPT();
}
 async checkResponse1() {
  
  try{
    this.response =undefined;
    let configuration = new Configuration({apiKey: environment.apiKey});
    let openai = new OpenAIApi(configuration);
    const data=document.getElementById("selectedText")as HTMLInputElement;
    const exedata=document.getElementById("executedData")as HTMLInputElement;
    let requestData={
      model: 'text-davinci-003',//'text-davinci-003',//"text-curie-001",
      prompt: data.value,//this.generatePrompt(animal),
      temperature: 0.2,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      best_of:1,
    };
    this.showSpinner = true;
    let apiResponse =  await openai.createCompletion(requestData);

    let response1 = apiResponse.data as ResponseModel;
    exedata.value=response1.choices[0].text;
    this.showSpinner = false;
  }catch(error:any) {
    this.showSpinner = false;
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      
    }
  }
}

getText(data:string) {
  return data.split('\n').filter(f=>f.length>0);
}

async invokeGPT() {

  if(this.promptText.length<2)
  return;

  try{
    this.response =undefined;
    let configuration = new Configuration({apiKey: environment.apiKey});
    let openai = new OpenAIApi(configuration);

    let requestData={
      model: 'text-davinci-003',//'text-davinci-003',//"text-curie-001",
      prompt: this.promptText,//this.generatePrompt(animal),
      temperature: 0.7,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };
    this.showSpinner = true;
    let apiResponse =  await openai.createCompletion(requestData);

    this.response = apiResponse.data as ResponseModel;

    this.showSpinner = false;
  }catch(error:any) {
    this.showSpinner = false;
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      
    }
  }
}


onSelect(choice:string)
{
  const selectedText = document.getElementById("selectedText") as HTMLInputElement;
  selectedText.value='';
  const newText = this.promptText + choice;
  selectedText.value=newText;
}


}


