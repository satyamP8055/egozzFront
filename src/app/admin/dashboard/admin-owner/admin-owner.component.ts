import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/web.service';
import { EgozzService } from 'src/app/egozz.service';

@Component({
  selector: 'app-admin-owner',
  templateUrl: './admin-owner.component.html',
  styleUrls: ['./admin-owner.component.css']
})
export class AdminOwnerComponent implements OnInit {

  constructor(private webService:WebService, private service:EgozzService) { }

  ngOnInit() {
    this.token=localStorage.getItem("token");
    console.log("Initialized");
    this.getOwners();
  }

  url:string=this.service.host+"/api/owner";
  token:string;
  owners:any[]=[];

  getOwners(){
    console.log("Gonna Fetch Owners");
    this.webService.sendGetRequestWithToken(this.url,this.token).subscribe(res=>{
      if(res.status=="success")
        this.owners=res.data;
      console.log(res);
    });
  }

}
