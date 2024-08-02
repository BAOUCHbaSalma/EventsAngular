import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  constructor(private router : Router){}
  ngOnInit(): void {

  }

  check = false;
  logout(check : boolean) {
    if(check){
      localStorage.removeItem('jwt');
    this.router.navigateByUrl('');
    
  }else{
    console.log('//:')

  }
}
}
