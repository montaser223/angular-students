import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ],
})
export class UsersComponent implements OnInit,OnDestroy {

  constructor(private myService: UsersService) { }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe()
  }
  subscriber:any
  users:User[] = []

  ngOnInit(): void {
    this.subscriber = this.myService.getUsers()
      .subscribe({
        next: (response) => {
          this.users = response.body as User[]
        },
        error: (err) => {
          console.log(err)
        }
      })
  }



}

      // let subscriber = this.myService.getNumbers()
      // .subscribe({
      //   next:(data)=>{
      //     console.log(data)
      //     if(data == 3){
      //       subscriber.unsubscribe()
      //     }
      //   },
      //   error:(err)=>{
      //     console.log(err)
      //   }
      // })