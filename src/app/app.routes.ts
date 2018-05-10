import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponentComponent } from './home-component/home-component.component';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { ContactsComponentComponent } from './contacts-component/contacts-component.component';
import { ServicesComponentComponent } from './services-component/services-component.component';

export const routes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomeComponentComponent
	},
	{
		path: 'contact',
		component: ContactsComponentComponent
	},
	{
		path: 'products',
		component: ProductsComponentComponent,
	},
	{
		path: 'services',
		component: ServicesComponentComponent
	},


];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);