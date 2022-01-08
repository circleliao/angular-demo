import {Injectable} from '@angular/core';
import {ServiceCard} from "../classes/service-card";
import {HttpClient} from "@angular/common/http";
import {Response} from "../classes/response";

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private http: HttpClient) {
  }

  getList() {
    let r: ServiceCard[] = []
    this.http.get('api/service/list').subscribe((res:any) => {
      console.log(res)
      let {data} = res;
      for (let i = 0; i < 10; i++) {
        r.push(new ServiceCard(data[i].title, data[i].icon, data[i].describe, data[i].link));
      }
    })
    return r
  }

}


