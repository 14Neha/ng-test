import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {GitApiService } from '../git-api.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public isCollapsed = true;
  info;
  results: Object;
  searchTerm$ : {
    login?: String;
  } = {};
  submitted = false;
  key: string = 'login'; //set default
  reverse: boolean = false;
  login: string;
  repo;

  sort(key){
    console.log('key', key);
    this.key = key;
    this.reverse = !this.reverse;
  }
  constructor(private gitApiService: GitApiService) { 

  }

  ngOnInit() {
   // let gitData = [];
    this.gitApiService.getUserData().subscribe(results => {
      this.results = results;

      console.log(this.results);
      //console.log(this.results[9].login);
      //console.log(this.results.length);
      //result[10, repo]
      for (var i = 0; i < 30; i++) { 
        //console.log(this.results[i].login);
       this.gitApiService.getUserRepoData(this.results[i].login).subscribe(res => {
          this.repo = res;//Array
          console.log(this.repo)
       
        });
      }
  });
 
}
search(form: NgForm){
  this.submitted = true;

 if(this.searchTerm$.login == ''){
  this.gitApiService.getUserData().subscribe(results => {
    this.results = results;
  });
 }else{
  this.gitApiService.searchUserData(this.searchTerm$.login)
  .subscribe(results => {
    this.results = results.items;
    console.log("result", results);
  });
 }


}
}
