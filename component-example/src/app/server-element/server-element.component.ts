import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentChecked, 
  AfterViewChecked, 
  AfterViewInit,
  AfterContentInit,
  OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string}
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef; 

  constructor() {
    console.log("constructor called")
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewChecked(): void {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngonchanges called")
    console.log(changes)
  }

  ngOnInit() {
    console.log("ngoninit called")
    console.log(this.header.nativeElement.textContent)
  }

  ngDoCheck() {
    console.log("ngdocheck called")
  }

  ngAfterContentInit() {
    console.log("ngaftercontentinit called")
    console.log(this.header.nativeElement.textContent)
  }

  ngAfterContentChecked(): void {
    
  }

  ngAfterViewInit(): void {
    
  }

}
