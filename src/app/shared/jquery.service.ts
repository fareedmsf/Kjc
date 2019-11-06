import { Injectable } from '@angular/core';


declare var $: any;
@Injectable()

export class jqueryclass {

    initialfuncion() {
       console.log( window.location.origin);
       console.log( window.location.href);
       console.log( window.location.pathname);
       if(window.location.pathname == "/112" )
       {
           $("#nactop").show();
       }else{
        $("#nactop").hide();
       }
        
    }
}