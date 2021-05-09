import { Component, OnInit ,Input} from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('userInfo') user:User = {
    id:'',
    name:'',
    age:NaN,
    city:'',
    email:'' 
  } 

}
