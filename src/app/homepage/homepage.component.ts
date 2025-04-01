import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  
 
  constructor(private router: Router ){}

  ngOnInit(): void {
  }

  gestureScreen(){
    console.log("Clicked")
   
    localStorage.setItem('userData', JSON.stringify(
      { name: 'Sara', age: 22, email: 'Sara@example.com' ,img:'https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600',
        Qualify:'Doctor',star:'Poosam',Regilon:'Hindu-Kaya',place:'Chennai',height:'5.5',
      }
    ));
    localStorage.setItem('userData1', JSON.stringify( {name: 'Pragati',
    age: 27,
    height: '5 ft 5 in',
    profession: 'Doctor, MBBS',
    religion: 'Hindu - Kayastha',
    location: 'Chennai, Tamil Nadu',
    image: 'https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600',
   }));


    this.router.navigate(["/gesture_screen"]);
  }

}
