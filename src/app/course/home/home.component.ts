import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router){
    
  }

  StartLearning(){
    console.log('navigate to course Syllabus page')
    // this.router.navigate(['/courseDetails'])
  }

  ngOnInit(){

  }
}

