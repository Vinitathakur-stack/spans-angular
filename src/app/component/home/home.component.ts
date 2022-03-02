import { Component, OnInit } from "@angular/core";


@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
    familyList: any = ["Family", "Navigator", "XYZ"];
    preferdmode: any = ["Contact", "Email", "Web"];
    preferedMode = this.preferdmode[0];

    isLoggedIn = true;
    
    public messageText: string;

    public messageArray: { user: string; message: string }[] = [];
    private storageArray: any[] = [];

    public showScreen = false;
    public phone: string;
    public currentUser;
    public selectedUser;

  

    constructor() {
       
    }

    ngOnInit(): void {
    
    }
    changefamily(e) {
        console.log(e.target.value);
        if (e.target.value == "Family") {
            this.preferedMode = this.preferdmode[0];
        
        } else {
            this.preferedMode = this.preferdmode[1];
           
        }
    }

 
}
