import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { User } from '../user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router:Router,public main:MainService) { }

  ngOnInit(): void {
  }

  title = 'advertisementformcomponent';
  categories=['Furniture','Hardware','Mobile'];

  categoryHasError=true;

  submitted=false;
  errorMsg='';

  userModel=new User('','Yash','','');

  arraydata:formData[]=[];

  validateCategory(value:any){
     if(value==='default'){
       this.categoryHasError=true;
     }else{
       this.categoryHasError=false;
     }
  }

  onSubmit(userForm:NgForm){
    this.arraydata.push(userForm.value);
    console.log(this.arraydata);

  }

  onEdit(){
    this.router.navigate(['/edit']);
  }

  onDelete(){
    let len=this.main.arr.length;
    this.main.arr=this.main.arr.splice(len-2,len-1);
  }
}

  interface formData{
     title: string,
    name: string,
     category: string,
    description: string
  }
