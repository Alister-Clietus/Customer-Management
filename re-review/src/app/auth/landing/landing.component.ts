import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit 
{

  constructor(private router: Router) 
  { 
  }

  ngOnInit(): void 
  {

  }

  admin()
  {
    this.router.navigate(['./admin/admin']);
  }

  user()
  {
    this.router.navigate(['./user/landing']);
  }
  

}
