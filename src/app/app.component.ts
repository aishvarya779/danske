import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'danske';
  selected = 'Home';
  list: any[] = [];

  constructor(private _appService: AppService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._appService.getData().subscribe(
      (res: any) => {
        console.log(res);
        this.list = res.data;
      },
      err => {
        console.log(err);
      }
    );
  }

  toggle(type) {
    this.selected = type;
  }
}
