import { Component, OnInit } from '@angular/core';
// 動態路由 獲取id
import { ActivatedRoute } from '@angular/router';
// 引入服務 注意要../..
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'app-pcontent',
  templateUrl: './pcontent.component.html',
  styleUrls: ['./pcontent.component.scss']
})
export class PcontentComponent implements OnInit {

  public domain: string = '';
  public list: any = {}; // 改掉原本的public list: any[] = [];
  constructor(public route: ActivatedRoute, public common: CommonService) {
    this.domain = this.common.domain;
  }

  ngOnInit() {
    this.route.params.subscribe((value: any) => {
      console.log(value); // {id: "5ac1f04bd1bef433a42614cd"}
      // 調用requestContent方法, angular中調用方法直接this.方法
      this.requestContent(value.id); // 傳入value.id
    });
  }

  /* 請求數據 http://a.itying.com/api/productcontent?id=5ac1a22011f48140d0002955
  傳api/productcontent?id=5ac1a22011f48140d0002955
  */
  requestContent(id) {

    // const api = 'api/productcontent?id=' + id;
    const api = 'api/productcontent?id=' + id;

    // 因為用promise封裝所以用then
    this.common.get(api).then((response: any) => {
      console.log(response); // {result: Array(1)}
      console.log(response.result[0]);
      this.list = response.result[0];
    });

  }

}
