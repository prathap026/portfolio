import { Component } from '@angular/core';
import { CohereService } from '../services/cohere.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  data = new Date();  
  constructor (private cohereService:CohereService){}
  userMessage: string = '';
  botResponse: string = '';

  async onSendMessage() {
    if (this.userMessage.trim()) {
      const response = await this.cohereService.chat(this.userMessage);
      //this.botResponse=  `You said: "${this.userMessage}". This is a response from the bot.${response}`;
       this.botResponse = response;  // Update the bot response in the UI
      this.userMessage = '';  
    }
  }
   
}
