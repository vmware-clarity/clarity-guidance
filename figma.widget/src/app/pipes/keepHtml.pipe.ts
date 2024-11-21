import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'keepHtml',
    pure: false,
    standalone: true,
})
export class EscapeHtmlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {
    }

    transform(content: any) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    }
}