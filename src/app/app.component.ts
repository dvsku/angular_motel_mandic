import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(
        private titleService: Title,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private translate: TranslateService
    ) {}

    private titleKey: string;

    ngOnInit() {
        const title = this.titleService.getTitle();
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                map(() => {
                    let child = this.activatedRoute.firstChild;
                    while (child.firstChild) {
                        child = child.firstChild;
                    }
                    if (child.snapshot.data['title']) {
                        this.titleKey = child.snapshot.data['title'];
                        return this.titleKey;
                    }
                    return title;
                })
            )
            .subscribe((ttl: string) => {
                this.translate.get(ttl).subscribe((title) => {
                    this.titleService.setTitle(title);
                });
            });

        this.translate.onLangChange.subscribe(() => {
            const title = this.translate.instant(this.titleKey);
            this.titleService.setTitle(title);
        });
    }
}
