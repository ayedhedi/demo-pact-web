import {Component, OnInit} from '@angular/core';
import {PersonsService} from './persons.service';
import {Person} from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  persons: Person[];

  constructor(private personsService: PersonsService) {}

  ngOnInit(): void {
    this.personsService
      .findAll()
      .subscribe(p => this.persons = p);
  }
}
