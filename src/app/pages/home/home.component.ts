import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  familyList: any = ['Family', 'Navigator', 'XYZ']
  preferdmode:any = ['Contact', 'Email','Web'];
  preferedMode:string='';
  constructor() { }

  ngOnInit(): void {
  }
  changefamily(e){
    console.log(e.target.value);
    if(e.target.value== 'Family'){
      this.preferedMode = this.preferdmode[0];
    }else{
      this.preferedMode = this.preferdmode[1];
    }
  }
}
