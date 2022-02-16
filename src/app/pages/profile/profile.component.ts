import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
currentUser:any;
disableForm=true;
  constructor() { }

  ngOnInit(): void {
  }
save(){

}
edit(){
  this.disableForm = false;
}
}
