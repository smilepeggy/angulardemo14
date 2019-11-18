import { Component, OnInit } from '@angular/core';
// 引入服務 注意要../..
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public list: any[] = [];
  // 因為在common.service.ts中的domain 為public 所以這邊可以直接使用
  public domain: string = '';
  constructor(public common: CommonService) {
    this.domain = this.common.domain;
  }

  ngOnInit() {
    const api = 'api/productlist';
    this.common.get(api).then((response: any) => {
      console.log(response);
      this.list = response.result;
      // Property 'result' does not exist on type 'unknown'. 要改成response:any
    });
  }
}
