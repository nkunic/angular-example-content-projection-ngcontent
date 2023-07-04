import { Component, TemplateRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  @ContentChild(TemplateRef) templateRefChild: TemplateRef<any>;
}
