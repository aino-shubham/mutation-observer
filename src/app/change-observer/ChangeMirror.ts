import { Injectable } from '@angular/core';

@Injectable({ 'providedIn': 'root' })
export class ChangeMirror {
   
    shadow;


    /**
     * @param mutation 
     * takes mutation record and check the added node.
     */
    applyChanges(mutation) {
        if (mutation.type === 'childList') {
          
            if (mutation.addedNodes) {
                var newElement;
                for (var i = 0; i < mutation.addedNodes.length; i++) {
                    newElement= mutation.addedNodes[i];
                    console.log(newElement)

                }
                
                var edit=document.getElementById('editDiv');
                console.log(this.shadow,"Inside Shadow Div")
                console.log(newElement);
                this.shadow.appendChild(newElement);
            }
            
           
        }
    }
   

    getShadow(shadow){
     this.shadow =shadow;
    }
    
}