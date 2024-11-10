import { Routes } from '@angular/router';
import { InputViewComponent, ButtonViewComponent, ToggleViewComponent, CheckboxViewComponent} from '@gama-ui/view';

export const routes: Routes = [
    {path: '', redirectTo: 'components/toggle', pathMatch: 'full'},
    {path: 'components/input', component: InputViewComponent},
    {path: 'components/button', component: ButtonViewComponent},
    {path: 'components/toggle', component: ToggleViewComponent},
    {path: 'components/checkbox', component: CheckboxViewComponent},

];
