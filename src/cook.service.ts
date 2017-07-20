import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class CookService{
  constructor(public http:Http) {}

  all(){
    return this.http.get('http://localhost:3000/dds')
      .map(res=>res.json().data)
  };
  alld_more(){
  return this.http.get('http://localhost:3000/dpc')
    .map(res=>res.json().data)
  }
  alld_two(){
    return this.http.get('http://localhost:3000/d_two')
      .map(res=>res.json().data)
  }
  allfound(){
    return this.http.get('http://localhost:3000/found')
      .map(res=>res.json().data)
  }
}
