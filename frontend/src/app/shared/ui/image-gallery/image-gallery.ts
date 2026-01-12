import {Component, input} from '@angular/core';
import { ImgPipe } from "@shared/pipes/img.pipe";

@Component({
    selector: 'app-image-gallery',
    imports: [ImgPipe],
    templateUrl: './image-gallery.html',
    standalone: true,
    styleUrl: './image-gallery.css'
})
export class ImageGallery {

  images = input.required<ImageType[]>();
}
