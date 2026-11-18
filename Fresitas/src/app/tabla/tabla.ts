
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './tabla.html',
  styleUrl: './tabla.css',
})
export class Table implements OnChanges {

  @Input() data: any[] = [];
  columns: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['columns'] && this.columns && this.columns.length > 0) {
      return;
    }
    if (this.data && this.data.length > 0) {
      this.columns = Object.keys(this.data[0]);
    } else {
      this.columns = [];
    }
  }
}
