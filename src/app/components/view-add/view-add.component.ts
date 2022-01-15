import { Component, OnInit } from '@angular/core';
import { View } from '../../models/view.model';
import { ViewService } from '../../services/view.service';

@Component({
  selector: 'app-view-add',
  templateUrl: './view-add.component.html',
  styleUrls: ['./view-add.component.scss'],
})
export class ViewAddComponent implements OnInit {
  view: View = {
    title: '',
    body: '',
    published: false,
  };
  submitted = false;

  constructor(private viewService: ViewService) {}

  ngOnInit(): void {}

  saveView(): void {
    const data = {
      title: this.view.title,
      body: this.view.body,
    };

    this.viewService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }

  newView(): void {
    this.submitted = false;
    this.view = {
      title: '',
      body: '',
      published: false,
    };
  }
}
