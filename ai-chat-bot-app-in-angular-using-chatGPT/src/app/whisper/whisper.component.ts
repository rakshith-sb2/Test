import { Component } from '@angular/core';
import { Configuration, CreateTranscriptionResponse, OpenAIApi } from 'openai';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-whisper',
  templateUrl: './whisper.component.html',
  styleUrls: ['./whisper.component.css']
})
export class WhisperComponent {
  errorCallingAPI: any;
  transcription!: string;

  

  async onaudioSelect(): Promise<void> {
    try {

    const configuration = new Configuration({
      apiKey: environment.apiKey,
    });

    const openai = new OpenAIApi(configuration);

    const audioFile = new File(['audio-input'], 'audio.mp3');
    const response = await axios.post<CreateTranscriptionResponse>(
      'https://api.openai.com/v1/audio/transcriptions',

      {
        headers: {
          // 'Content-Type': 'audio/mpeg',
          Authorization: `Bearer ${configuration.apiKey}`,
        },
        params: {
          model: 'whisper-1',

         },
      }
    );
  

    this.transcription = response.data.text;
    console.log(this.transcription);
  } catch (error) {
    console.log(error); 
  }
  }
}
