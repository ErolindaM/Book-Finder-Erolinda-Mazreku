import { RouterModule, Routes } from "@angular/router";
import { BookComponent } from "./book.component";
import { SearchBoxComponent } from "./components/search-box/search-box.component";
import { SearchResultComponent } from "./components/search-result/search-result.component";
import { ViewDetailsComponent } from "./view-details/view-details.component";

const routes:Routes=[
    {
        path:'book',component:BookComponent,children:[
            {path:'search-box',component: SearchBoxComponent},
            {path:'search-result',component: SearchResultComponent},
            {path:'view-details/:id',component: ViewDetailsComponent},
        ]
    }
];
export const BookRoutingModule =RouterModule.forChild(routes);
