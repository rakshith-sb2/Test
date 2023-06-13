import {Component, isDevMode} from '@angular/core';
import { Configuration, OpenAIApi } from "openai";
import { environment } from 'src/environments/environment';

import { gptModels } from '../models/constants';
import { ResponseModel } from '../models/gpt-response';

const hasOwnPropFailSafe = (obj: any, prop: string) => {
  return obj.hasOwnProperty(prop) ? obj[prop] : '';
}

@Component({
  selector: 'app-dalle',
  templateUrl: './dalle.component.html',
  styleUrls: ['./dalle.component.css']
})
export class DalleComponent  {

  //openai!: OpenAIApi;
  title = 'dall-e';
  imageSearch = '';
  numberOfImages?: 1;
  openAIImageResults: string[] = [];
  apiKey?: string = hasOwnPropFailSafe(environment, 'openAIKey')
  fetchingImages = false;
  errorCallingAPI?: unknown;

  constructor() {
    // if (this.apiKey) {
    //   const configuration = new Configuration({
    //     apiKey: this.apiKey
    //   });

    //   this.openai = new OpenAIApi(configuration);
    // }
  }
  ngOnInit(): void {
  }

   
 

  getText(data:string) {
    return data.split('\n').filter(f=>f.length>0);
  }

  async generateImage() {
    this.fetchingImages = true;
    this.numberOfImages=1;

    let configuration = new Configuration({apiKey: environment.apiKey});
    let openai = new OpenAIApi(configuration);
    try {
      const result = await openai.createImage({
        prompt: this.imageSearch,
        n: this.numberOfImages,
        size: '512x512'
      });
      this.openAIImageResults = result.data.data.map(e => e.url) as string[];
      this.errorCallingAPI = undefined;
    } catch (e: unknown) {
      this.errorCallingAPI = e;
      console.log('e', e)
    } finally {
      this.fetchingImages = false;
    }
  }
}
