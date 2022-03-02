import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../_services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public roomId: string;
  public messageText: string;

  public messageArray: { user: string, message: string }[] = [];
  private storageArray: any[] = [];

  public showScreen = false;
  public phone: string;
  public currentUser;
  public selectedUser;
  constructor(private chatService:ChatService) { }

  ngOnInit(): void {
  }

  sendMessage(): void {

    console.log(this.currentUser);
    this.chatService.sendMessage({
      user: this.currentUser.name,
      room: this.roomId,
      message: this.messageText
    });

    this.storageArray = this.chatService.getStorage();
    const storeIndex = this.storageArray
      .findIndex((storage) => storage.roomId === this.roomId);

    if (storeIndex > -1) {
      this.storageArray[storeIndex].chats.push({
        user: this.currentUser.name,
        message: this.messageText
      });
    } else {
      const updateStorage = {
        roomId: this.roomId,
        chats: [{
          user: this.currentUser.name,
          message: this.messageText
        }]
      };

      this.storageArray.push(updateStorage);
    }

    this.chatService.setStorage(this.storageArray);
    this.messageText = '';
  }
}
