import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from './person';

import 'rxjs/add/operator/map';

import * as _ from 'lodash';

@Injectable()
export class PersonsService {

  private BASE_URL = 'http://localhost:8080/persons';

  constructor(private httpClient: HttpClient) {}

  findAll() {
    return this.httpClient
      .get<Person[]>(this.BASE_URL)
      .map(data => _.values(data));
  }

}
