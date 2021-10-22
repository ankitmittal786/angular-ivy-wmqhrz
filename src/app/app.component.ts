import { Component, VERSION } from '@angular/core';

export interface Candidates {
  first_name: string;
  last_name: string;
  id: number;
  email: string;
  gender: string;
}

const ELEMENT_DATA: Candidates[] = [
  {
    id: 1,
    first_name: 'Jeanette',
    last_name: 'Penddreth',
    email: 'jpenddreth0@census.gov',
    gender: 'Female',
  },
  {
    id: 2,
    first_name: 'Giavani',
    last_name: 'Frediani',
    email: 'gfrediani1@senate.gov',
    gender: 'Male',
  },
  {
    id: 3,
    first_name: 'Noell',
    last_name: 'Bea',
    email: 'nbea2@imageshack.us',
    gender: 'Female',
  },
  {
    id: 4,
    first_name: 'Willard',
    last_name: 'Valek',
    email: 'wvalek3@vk.com',
    gender: 'Male',
  },
];
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayedColumns: string[] = [
    'id',
    'first_name',
    'last_name',
    'email',
    'gender',
  ];
  dataSource = ELEMENT_DATA;
  first_name = 'Angular ' + VERSION.major;
  isMale: boolean = true;
  isFemale: boolean = true;
  searchString: string = '';
  candidate: Candidates;
  isMGender: boolean = false;
  isFGender: boolean = false;
  filterData(name, val) {
    if (name == 'male') this.isMale = val;
    else this.isFemale = val;
    if ((this.isMale && this.isFemale) || (!this.isMale && !this.isFemale)) {
      console.log(this.isMale, '-', this.isFemale);
      this.dataSource = ELEMENT_DATA;
    } else {
      console.log('else');
      if (this.isFemale)
        this.dataSource = ELEMENT_DATA.filter(
          (data) => data.gender == 'Female'
        );
      else
        this.dataSource = ELEMENT_DATA.filter((data) => data.gender == 'Male');
    }
  }

  searchData(event) {
    this.searchString = event.target.value;
    if (this.searchString == '') {
      console.log('--');
      this.dataSource = ELEMENT_DATA;
    } else {
      console.log('--l');
      this.dataSource = ELEMENT_DATA.filter(
        (data) =>
          data.first_name.includes(this.searchString) ||
          data.last_name.includes(this.searchString) ||
          data.email.includes(this.searchString)
      );
    }
  }

  changeGender(val) {}
}
