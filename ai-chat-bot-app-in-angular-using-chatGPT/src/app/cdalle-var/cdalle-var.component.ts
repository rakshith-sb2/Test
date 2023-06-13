import { Component, OnInit } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { environment } from 'src/environments/environment';


const hasOwnPropFailSafe = (obj: any, prop: string) => {
  return obj.hasOwnProperty(prop) ? obj[prop] : '';
}

@Component({
  selector: 'app-cdalle-var',
  templateUrl: './cdalle-var.component.html',
  styleUrls: ['./cdalle-var.component.css']
})
export class CdalleVarComponent implements OnInit {

  imageResults="";
  ngOnInit(): void {
  }
  title = 'dall-e';
  imageSearch: File | any;
  numberOfImages?: 2;
  openAIImageResults: any;
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
   
   
 

  getText(data:string) {
    return data.split('\n').filter(f=>f.length>0);
  }

//   async onImageSelect(file: any) {
//     this.fetchingImages = true;
//     this.numberOfImages=2;

//     let configuration = new Configuration({apiKey: environment.apiKey});
//     let openai = new OpenAIApi(configuration);
//     try {
//       const result = await openai.createImageVariation({
//         prompt: this.imageSearch,
//         n: this.numberOfImages,
//         size: '512x512'
//       });
//       this.openAIImageResults = result.data.data.map(e => e.url) as string[];
//       this.errorCallingAPI = undefined;
//     } catch (e: unknown) {
//       this.errorCallingAPI = e;
//       console.log('e', e)
//     } finally {
//       this.fetchingImages = false;
//     }
//   }
// }

async onImageSelect(event: any) {
  const file:File=event.target.files[0];
  
  //const file = (event.target as HTMLInputElement)?.files[0];
  if (!file) {
    return;
  } this.fetchingImages = true;
  this.numberOfImages = 2;
this.openAIImageResults=null;
  const configuration = new Configuration({ apiKey: environment.apiKey });
  const openai = new OpenAIApi(configuration);
  try {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async (e) => {

      const imageData = file;
      const result = await openai.createImageVariation(
        file,
        this.numberOfImages,
         "512*512"
      );
      console.log(result.data.data[0].url);
      this.openAIImageResults = result.data.data[0];
      //this.errorCallingAPI = undefined;
      };
  } catch (e) {
    this.errorCallingAPI = e;
    console.log('e', e);
  }
  }
}

