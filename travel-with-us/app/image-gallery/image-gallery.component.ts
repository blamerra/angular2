import {Component, Input,Output,ElementRef,EventEmitter,OnInit} from '@angular/core';

import { Image }                  from '../image-gallery/image';

@Component({
  moduleId: module.id,
  selector    :   'image-gallery',
  templateUrl :   'image-gallery.component.html',
  styleUrls   : [ 'image-gallery.component.css' ]
})

export class ImageGalleryComponent {  
  @Input('galleryImages') public galleryImages: Image [];
  @Input('imagePointer') public imagePointer:number;
  @Output('cancelEvent') cancelEvent = new EventEmitter<any>();

	public _element:any;
	public opened:boolean = false;
	
	public currentImageIndex:number;
	public loading:boolean= false;
	public showRepeat:boolean= false;
	public currentImage: Image;
	public imgSrc:string;

  constructor(public element: ElementRef) {
    this._element = this.element.nativeElement;
  }
  ngOnInit() {
      this.loading = true;
      if(this.imagePointer >= 0) {
      this.showRepeat = false;
      this.openGallery(this.imagePointer);
    } else {
      this.showRepeat = true;
    }
  }
  closeGallery() {
    this.opened = false;
    this.cancelEvent.emit(null);
  }
  prevImage() {
    this.loading = true;
    this.currentImageIndex--;
    if(this.currentImageIndex < 0) {
      this.currentImageIndex = this.galleryImages.length-1  ;
    }
    this.openGallery(this.currentImageIndex);
  }
  nextImage() {
    this.loading = true;
    this.currentImageIndex++;
    if(this.galleryImages.length === this.currentImageIndex) {
      this.currentImageIndex = 0;
    }
    this.openGallery(this.currentImageIndex);

  }
  openGallery(index : number) {
    if(!index) {
    	this.currentImageIndex = 1;
    }

    this.currentImageIndex = index;
    this.opened = true;    
		for (var i = 0; i < this.galleryImages.length; i++) {
			if (i === this.currentImageIndex ) {
			  this.currentImage = this.galleryImages[i];
			  this.loading = false;
			  break;
			}
		 }
  }
}