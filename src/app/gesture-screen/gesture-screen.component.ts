import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gesture-screen',
  templateUrl: './gesture-screen.component.html',
  styleUrls: ['./gesture-screen.component.scss']
})
export class GestureScreenComponent implements OnInit {
user:any;
profile:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    const storedUserData = localStorage.getItem('userData');
    const storedUserData1 = localStorage.getItem('userData1');
    
    if (storedUserData) {
      this.user = JSON.parse(storedUserData);
    }
    if (storedUserData1) {
      this.profile = JSON.parse(storedUserData1);
    }
    console.log(this.user)
  }

  goBack(){
    this.router.navigate(['/home'])
  }

}
