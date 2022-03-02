import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../_services/chat.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  familyList: any = ['Family', 'Navigator', 'XYZ']
  preferdmode:any = ['Contact', 'Email','Web'];
  preferedMode:string='';

  public roomId: string='';
  public messageText: string='';
  public messageArray: { user: string, message: string }[] = [];
  private storageArray:any[] = [];

  public showScreen = false;
  public phone: string;
  public currentUser;
  public selectedUser;

  public userList = [
    {
      id: 1,
      name: 'The Swag Coder',
      phone: '9876598765',
      image: 'assets/user/user-1.png',
      roomId: {
        2: 'room-1',
        3: 'room-2',
        4: 'room-3'
      }
    },
    {
      id: 2,
      name: 'Wade Warren',
      phone: '9876543210',
      image: 'assets/user/user-2.png',
      roomId: {
        1: 'room-1',
        3: 'room-4',
        4: 'room-5'
      }
    },
    {
      id: 3,
      name: 'Albert Flores',
      phone: '9988776655',
      image: 'assets/user/user-3.png',
      roomId: {
        1: 'room-2',
        2: 'room-4',
        4: 'room-6'
      }
    },
    {
      id: 4,
      name: 'Dianne Russell',
      phone: '9876556789',
      image: 'assets/user/user-4.png',
      roomId: {
        1: 'room-3',
        2: 'room-5',
        3: 'room-6'
      }
    }
  ];

  constructor(  private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.getMessage()
    .subscribe((data: { user: string, room: string, message: string }) => {
      // this.messageArray.push(data);
      if (this.roomId) {
        setTimeout(() => {
          this.storageArray = this.chatService.getStorage();
          const storeIndex = this.storageArray
            .findIndex((storage) => storage.roomId === this.roomId);
          this.messageArray = this.storageArray[storeIndex].chats;
        }, 500);
      }
    });
    this.currentUser = this.userList.find(user => user.phone === '9988776655');
    this.userList = this.userList.filter((user) => user.phone !== '9988776655');
    this.selectedUser = this.userList.find(user => user.phone === '9876556789');
    this.roomId = this.selectedUser.roomId[this.currentUser.id];
    this.messageArray = [];

    this.storageArray = this.chatService.getStorage();

    const storeIndex = this.storageArray .findIndex((storage) => storage.roomId === this.roomId);

          if (storeIndex > -1) {
            this.messageArray = this.storageArray[storeIndex].chats;
          }

          this.join(this.currentUser.name, this.roomId);
  }
  changefamily(e){
    console.log(e.target.value);
    if(e.target.value== 'Family'){
      this.preferedMode = this.preferdmode[0];
    }else{
      this.preferedMode = this.preferdmode[1];
    }
  }

 

  sendMessage(): void {
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
  selectUserHandler(phone: string): void {
    this.selectedUser = this.userList.find(user => user.phone === phone);
    this.roomId = this.selectedUser.roomId[this.currentUser.id];
    this.messageArray = [];

    this.storageArray = this.chatService.getStorage();
    const storeIndex = this.storageArray
      .findIndex((storage) => storage.roomId === this.roomId);

    if (storeIndex > -1) {
      this.messageArray = this.storageArray[storeIndex].chats;
    }

    this.join(this.currentUser.name, this.roomId);
  }

  join(username: string, roomId: string): void {
    this.chatService.joinRoom({user: username, room: roomId});
  }
}
