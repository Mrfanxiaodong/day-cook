import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
const url = 'http://localhost:3000/users';
@Injectable()
export class CookService{
  loginname:string;
  constructor(public http:Http) {}

  all_p(){
    return this.http.get('http://localhost:3000/dds/all')
      .map(res=>res.json().data)
  };
  classtu(){
    return this.http.get('http://localhost:3000/dds/class')
      .map(res=>res.json().data)
  }
  fenlist(){
    return this.http.get('http://localhost:3000/dds/fenlist')
      .map(res=>res.json().data)
  }
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
  fasong(li:string){
    return this.http.post('http://localhost:3000/dds/fasong',{li:li})
      .map(res=>res.json().data)
  }
  fankui(name:string,cont:string){
    return this.http.post('http://localhost:3000/dds/fankui',{cont:cont,name:name})
      .map(res=>res=>{
        return res.json().data
      })
  }



  //分页
  /*all_fen(){
    let num = 1;
    return this.http.post('http://localhost:3000/dds/',{pagNum:num})
      .map(res=>res.json().data)
  };*/


  login(uname:string,upsd:string){
    return this.http.post(url+'/login',{uname,upsd})
      .map(res=>{

        return res.json().data
      })
  }

  register(uname:string,upsd:string){
    return this.http.post(url+'/register',{uname,upsd})
      .map(res=>{return res.json().data})
  }


  allfound(){
    return this.http.get('http://localhost:3000/dds/f')
      .map(res=>res.json().data)
  }

  cooka(){
    return this.http.get('http://localhost:3000/cookactive')
      .map(res=>res.json().data)
  }
  bozhu(){
    return this.http.get('http://localhost:3000/shares').map(res=>res.json().data)
  }
  ping(oldid){
    return this.http.get('http://localhost:3000/dds/pl'+oldid).map(res=>res.json().data)
  }
  inpp(pinglun:string,id:string,){
    return this.http.post('http://localhost:3000/dds/inp',{id,pinglun})
      .map(res=>{return res.json().data})
  }
}
