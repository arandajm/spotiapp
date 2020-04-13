import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
})
export class TarjetasComponent implements OnInit {
  @Input()
  items: any[] = [];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  verItem(item: any) {
    console.log(item);
    let itemId = item.type === 'artist' ? item.id : item.artists[0].id;
    console.log(itemId);
    // Navigate to artist route with the itemId
    this.router.navigate(['/artist', itemId]);
  }
}
