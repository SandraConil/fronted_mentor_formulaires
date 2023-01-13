import {Routes} from '@angular/router';
import { HeaderComponent} from './header/HeaderComponent';
import { Page2Component} from './app/page2/Page2Component';
import {Page3Component} from './app/page3/Page3Component';
import {Page4Component} from './app/page4/Page4Component';

const ROUTES : Routes = [
    {path:'header', component : HeaderComponent },
    {path:'page2', component : Page2Component },
    {path:'page3', component : Page3Component },
    {path:'page4', component : Page4Component },

]

export {ROUTES};