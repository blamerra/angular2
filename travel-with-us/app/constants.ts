import { Injectable }    from '@angular/core';

@Injectable()
export class Constants{
	public app_title: string;
	public imageGalleryUrl: string;
	public imageGalleryThumbnailUrl: string;

  constructor(){
    this.app_title = 'Travel With Us';
    //this.imageGalleryUrl = '../app/assets/image_gallery/';
    this.imageGalleryUrl = './tmp_assets/image_gallery/';
    this.imageGalleryThumbnailUrl = this.imageGalleryUrl + 'thumbnails/'
  }
}