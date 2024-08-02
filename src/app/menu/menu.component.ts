import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DecodejwtService } from '../service/decodejwt.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  idUser:any

  constructor(private router : Router,private srv:DecodejwtService){}

  ngOnInit(): void {
    const token=localStorage.getItem('jwt')
    this.srv.getIdByUsername(token).subscribe(id=>{
      this.idUser=id

    })

  }

  check = false;
  logout(check : boolean) {
    if(check){
      localStorage.removeItem('jwt');
    this.router.navigateByUrl('');
    
  }else{
    console.log('')

  }
}
}
