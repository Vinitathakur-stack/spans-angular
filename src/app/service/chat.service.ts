import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket: Socket;
  private url = 'https://backendsocketrealnode.herokuapp.com/'; // your server local path

  constructor() {
    this.socket = io(this.url, {transports: ['websocket', 'polling', 'flashsocket']});
  }
  joinRoom(data): void {
    this.socket.emit('join', data);
  }

  sendMessage(data): void {
    this.socket.emit('message', data);
  }

  getMessage(): Observable<any> {
    return new Observable<{user: string, message: string}>(observer => {
      this.socket.on('new message', (data) => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      }
    });
  }

  getStorage() {
    const storage: any = localStorage.getItem('chats');
    return storage ? JSON.parse(storage) : [];
  }

  setStorage(data) {
    localStorage.setItem('chats', JSON.stringify(data));
  }
}
