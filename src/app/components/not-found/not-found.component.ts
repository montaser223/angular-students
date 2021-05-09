import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styles: [
  ]
})
export class NotFoundComponent implements OnInit {

  constructor(private myService:UsersService) { }

  ngOnInit(): void {
    // this.myService.addToList(5)
  }

}
