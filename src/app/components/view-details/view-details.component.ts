import { Component, Input, OnInit } from '@angular/core';
import { View } from '../../models/view.model';
import { ViewService } from '../../services/view.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss'],
})
export class ViewDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentView: View = {
    title: '',
    body: '',
    published: false,
  };
  message = '';

  constructor(
    private viewService: ViewService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getView(this.route.snapshot.params['id']);
    }
  }

  getView(id: string): void {
    this.viewService.get(id).subscribe({
      next: (data) => {
        this.currentView = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentView.title,
      body: this.currentView.body,
      published: status,
    };

    this.message = '';

    this.viewService.update(this.currentView.id, data).subscribe({
      next: (res) => {
        console.log(res);
        this.currentView.published = status;
        this.message = res.message
          ? res.message
          : 'The status was updated successfully!';
      },
      error: (e) => console.error(e),
    });
  }

  updateView(): void {
    this.message = '';

    this.viewService.update(this.currentView.id, this.currentView).subscribe({
      next: (res) => {
        console.log(res);
        this.message = res.message
          ? res.message
          : 'This tutorial was updated successfully!';
      },
      error: (e) => console.error(e),
    });
  }

  deleteView(): void {
    this.viewService.delete(this.currentView.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/tutorials']);
      },
      error: (e) => console.error(e),
    });
  }
}
