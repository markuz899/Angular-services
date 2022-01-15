import { Component, OnInit } from '@angular/core';
import { View } from '../../models/view.model';
import { ViewService } from '../../services/view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  views?: View[];
  currentView: View = {};
  currentIndex = -1;
  title = '';

  constructor(private viewService: ViewService) {}

  ngOnInit(): void {
    this.retrieveViews();
  }

  retrieveViews(): void {
    this.viewService.getAll().subscribe({
      next: (data) => {
        this.views = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  refreshList(): void {
    this.retrieveViews();
    this.currentView = {};
    this.currentIndex = -1;
  }

  setActiveView(view: View, index: number): void {
    this.currentView = view;
    this.currentIndex = index;
  }

  removeAllViews(): void {
    this.viewService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e),
    });
  }

  searchTitle(): void {
    this.currentView = {};
    this.currentIndex = -1;

    this.viewService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.views = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
}
