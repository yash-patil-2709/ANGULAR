import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Edit } from '../edit';
import { MainService } from '../main.service';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {

  constructor(private router:Router,public main:MainService) { }

  ngOnInit(): void {
  }
  categories=['Furniture','Hardware','Mobile'];

  categoryHasError=true;
  submitted=false;
   errorMsg='';
  editModel=new Edit('','','','','');

  validateCategory(value:any){
     if(value==='default'){
       this.categoryHasError=true;
     }else{
       this.categoryHasError=false;
     }
  }

  onSubmit(value:any){
    let id=this.main.arr.indexOf(value.edit);
    this.main.arr[id].title=value.title;
    this.main.arr[id].name=value.name;
    this.main.arr[id].category=value.category;
    this.main.arr[id].description=value.description;

    this.router.navigate(['']);
  }
}
