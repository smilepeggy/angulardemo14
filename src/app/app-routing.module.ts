import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// 配置路由
import { HomeComponent } from './components/home/home.component';
import { PcontentComponent } from './components/pcontent/pcontent.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // 記得要配置id 接受動態路由的值
  { path: 'pcontent/:id', component: PcontentComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
