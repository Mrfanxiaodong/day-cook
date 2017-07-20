import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

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

}
