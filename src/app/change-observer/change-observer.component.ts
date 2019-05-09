import { Component, OnInit, EventEmitter, Output, ElementRef, Injectable, ViewChild } from '@angular/core';
import { ChangeMirror } from './ChangeMirror';

@Component({
  selector: 'app-change-observer',
  templateUrl: './change-observer.component.html',
  styleUrls: ['./change-observer.component.css']
})

export class ChangeObserverComponent implements OnInit {

  shadow;
  element;
  
  constructor(private changemirror: ChangeMirror, element: ElementRef) {
    this.element = element;
  }

  ngOnInit() {
    this.createShadowRoot();
    this.observer.observe(this.targetNode, this.config);
  }

  /**
   *  Select the node that will be observed for mutations
   */
  targetNode = document.getElementById('editDiv');

  /**
   * Options for the observer (which mutations to observe)
   */
   
  config = {
    childList: true,
    attributes: true,
    subtree: true
  };

  /*
   * observe the change of gthe target node
   */
  observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      this.changemirror.applyChanges(mutation);
    });
  });

  
/**
 * Create shadow dom
  */
  createShadowRoot() {
    var shadowroot = this.element.nativeElement;
    console.log(shadowroot);
    this.shadow = shadowroot.attachShadow({ mode: 'open' });
    var element1 = document.createElement('div');
    element1.setAttribute("class", "shadow")
    element1.innerHTML = "hello world";
    this.shadow.appendChild(element1);
    console.log(element1);
    this.changemirror.getShadow(element1)
  }
}

