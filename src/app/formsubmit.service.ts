import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormsubmitService {

  constructor(private client:HttpClient) { }

addUserInformation(body:any){

  return this.client.post("http://localhost:3000/users",body);


}
}
