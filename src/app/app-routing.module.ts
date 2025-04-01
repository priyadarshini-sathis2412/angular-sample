import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestureScreenComponent } from './gesture-screen/gesture-screen.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '' ,redirectTo: 'home', pathMatch: 'full' ,
  
},
{ path: 'home', component: HomepageComponent },
  {
    path: 'gesture_screen',
   component:GestureScreenComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
