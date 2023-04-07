import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/demo/service/project.service';
import { PhotoService } from 'src/app/demo/service/photo.service';
import { Project } from 'src/app/demo/api/project';

@Component({
    templateUrl: './mediademo.component.html'
})
export class MediaDemoComponent implements OnInit {

    products!: Project[];

    images!: any[];

    galleriaResponsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    carouselResponsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    constructor(private projectService: ProjectService, private photoService: PhotoService) { }

    ngOnInit() {
        this.projectService.getProjectsSmall().then(products => {
            this.products = products;
        });

        this.photoService.getImages().then(images => {
            this.images = images;
        });
    }
    
}
