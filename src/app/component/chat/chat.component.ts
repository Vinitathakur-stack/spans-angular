import { Component, OnInit } from "@angular/core";


@Component({
    selector: "app-chat",
    templateUrl: "./chat.component.html",
    styleUrls: ["./chat.component.css"],
})
export class ChatComponent implements OnInit {
    public roomId: string;
    public messageText: string;

    public messageArray: { user: string; message: string }[] = [];
    private storageArray: any[] = [];

    public showScreen = false;
    public phone: string;
    public currentUser;
    public selectedUser;
    constructor() {}

    ngOnInit(): void {}

   
}
