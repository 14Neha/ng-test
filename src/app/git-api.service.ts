import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {distinctUntilChanged} from 'rxjs/operators' ;
import {switchMap} from 'rxjs/operators' ; 

import 'rxjs'; 
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitApiService {
  baseUrl: string = 'https://api.github.com/search/users?q=';
  constructor(private httpclient: HttpClient, private http:Http) { }
  //data:any;
  getUserData(){
      return this.httpclient.get('https://api.github.com/users');
     }
  getUserRepoData(userName){
   //console.log('user name', userName);
   /*var detail = this.httpclient.get('https://api.github.com/users/'+ userName + '/repos');
   var data = [];
   //data.push(userName);
          data.push(detail);*/
  return this.httpclient.get('https://api.github.com/users/'+ userName + '/repos');//data.map(res => res.json());
  }
  searchUserData(term) {
    console.log("services start", term);
    return this.http
        .get(this.baseUrl + term)
        .pipe(map(res => res.json()));
        // console.log("services end");
  }
}
