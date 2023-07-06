import { Component } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent {

  titre:string="1. Opérations sur un tableau";
 
  tab=[15,46,0,89,80];
  style:string="italic";
  tclass:string="btn btn-success";
  colorier(nb:number){
    if(nb%3==0)
      return "magenta";
    return "blue";
  }
  
  onFontstyleModif(){
    if (this.style=="italic"){
      this.style="normal";
      this.tclass="btn btn-danger";}
    else{this.style="italic";
    this.tclass="btn btn-success";
  }
    console.log(this.style);
    console.log(this.tclass);
  }

  onAfficher(ind:number){
   
      console.log(this.tab[ind] + " a pour position " + (ind + 1) +"/" + this.tab.length);
   
    
  }

}
