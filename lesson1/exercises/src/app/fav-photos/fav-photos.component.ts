import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstarwarsalways.files.wordpress.com%2F2014%2F05%2Fstwars2015002_cov.jpg&f=1&nofb=1';
  image2 = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette1.wikia.nocookie.net%2Fstarwars%2Fimages%2F6%2F67%2FSWKOTOR11-FC.jpg%2Frevision%2Flatest%3Fcb%3D20070116220336&f=1&nofb=1';
  image3 = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Foyster.ignimgs.com%2Fwordpress%2Fstg.ign.com%2F2014%2F07%2FStar_Wars_1_Cassaday_cov-720x1067.jpg&f=1&nofb=1';

  constructor() { }

  ngOnInit() {
  }

}