import { Component, ViewChild, OnInit,
  OnDestroy, Input, Output, EventEmitter } from '@angular/core';

//RXJs
import { Subject } from 'rxjs';
//import { debounceTime, distinctUntilChanged } from 'rxjs';;

//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-search-box-only',
  templateUrl: './searchbox.html',
  styleUrls: ['./searchbox.scss'],
  host:{
    "class":"app-search-box"
  }
})
export class SearchBoxOnly implements OnInit, OnDestroy {
  //reference to search inpue
  //@ViewChild('searchTerm') searchBox;
  //input placeholder
  @Input() searchPlaceholder = "Search";
  //search stream
  @Output() searchFor = new EventEmitter()
  //search stream
  term$ = new Subject<any>();
  inputSearch:string;
  constructor() { }
  ngOnInit() {
    //hook search input
    //debugger
    this.term$
      //.debounceTime(500)
      //.distinctUntilChanged()
      .subscribe((find) => {
        // trigger only on enter
        if ([13, 40, 38].includes(find.keyCode)) {
          this.searchFor.emit(find.target.value);
        }
        //emit search request
        //this.searchFor.emit(find.target.value);
      },(e) => {
        console.error(e)
      });
  }
  emitSearch(){
    if (this.inputSearch){
      this.searchFor.emit(this.inputSearch);
    }
  }
  resetSearch(){
    this.inputSearch=null;
    this.searchFor.emit("");
  }
  ngOnDestroy(){
    this.term$.unsubscribe();
  }
}
