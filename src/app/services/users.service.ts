import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly baseURL: string = "http://localhost:3000/users"
  constructor(private myclient: HttpClient) {
    console.log('service ctor')
  }
  getUsers() {
    let response = this.myclient.get(this.baseURL, {
      observe: 'response'
    });
    // console.log(response)

    return response
  }

  getUserById(id: string) {
    return this.myclient.get(`${this.baseURL}/${id}`)
  }

}

        //   this.myObservable = new Observable((observer)=>{
        //     console.log('observable started')
        //     let number = 0;
        //     setInterval(()=>{
        //       observer.next(number++)
        //       if(number == 5){
        //         observer.error('MAX')
        //       }
        //     },1000)
        //   })
        //  }

        //  myObservable:Observable<number>
        //  getNumbers(){
        //    return this.myObservable
        //  }