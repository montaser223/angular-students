import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {

  constructor(myAR:ActivatedRoute,
              private myService:UsersService) {
    this.id = myAR.snapshot.params.id;

   }
  id:string
  user:any
  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    this.myService.getUserById(this.id)
    .subscribe({
      next:(user)=>{
        console.log(user)
        this.user = user;
      },
      error:(err)=>{
        console.log(err)
      } 
    })
  }

}
