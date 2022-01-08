import {Component, OnInit} from '@angular/core';
import {EntryService} from "../../services/entry.service";
import {ServiceCard} from "../../classes/service-card";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  items: ServiceCard[] =[];

  constructor(private entry:EntryService) {
  }

  ngOnInit(): void {
   this.items = this.entry.getList()
  }

}

