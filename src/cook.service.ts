import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
const url = 'http://localhost:3000/users';
@Injectable()
export class CookService{
  constructor(public http:Http) {}
  all_p(){
    return this.http.get('http://localhost:3000/dds/all')
      .map(res=>res.json().data)
  };
  all_seven(){
    return this.http.get('http://localhost:3000/dds')
      .map(res=>res.json().data)
  };
  all_sevenmore(){
  return this.http.get('http://localhost:3000/dds/t')
    .map(res=>res.json().data)
  }
  alld_seventwo(){
    return this.http.get('http://localhost:3000/dds/d_w')
      .map(res=>res.json().data)
  }
  //分页
  /*all_fen(){
    let num = 1;
    return this.http.post('http://localhost:3000/dds/',{pagNum:num})
      .map(res=>res.json().data)
  };*/


  login(){
    return this.http.get(url)
      .map(res=>{return res.json().data})
  }

  register(uname:string,upsd:string){
    return this.http.post(url,{uname,upsd})
      .map(res=>{return res.json().data})
  }
  allfound(){
    return this.http.get('http://localhost:3000/found')
      .map(res=>res.json().data)
  }
}
