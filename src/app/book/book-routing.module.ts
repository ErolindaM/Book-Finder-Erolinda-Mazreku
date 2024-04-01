import { RouterModule, Routes } from "@angular/router";
import { BookComponent } from "./book.component";
import { ViewDetailsComponent } from "./view-details/view-details.component";

const routes:Routes=[
    {
        path:'book',component:BookComponent,children:[
            {path:'view-details/:id',component: ViewDetailsComponent},
        ]
    }
];
export const BookRoutingModule =RouterModule.forChild(routes);
