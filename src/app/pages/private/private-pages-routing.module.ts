import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard-page/dashboard-page.module').then(mod => mod.DashboardPageModule),
  },
  {
    path: 'custom-address-input',
    loadChildren: () =>
      import('./custom-address-input-page/custom-address-input-page.module').then(
        mod => mod.CustomAddressInputPageModule,
      ),
  },
  {
    path: 'custom-ask',
    loadChildren: () =>
      import('./custom-ask-page/custom-ask-page.module').then(mod => mod.CustomAskPageModule),
  },
  {
    path: 'custom-alert',
    loadChildren: () =>
      import('./custom-alert-page/custom-alert-page.module').then(mod => mod.CustomAlertPageModule),
  },
  {
    path: 'custom-breadcrumb',
    loadChildren: () =>
      import('./custom-breadcrumb-page/custom-breadcrumb-page.module').then(
        mod => mod.CustomBreadcrumbPageModule,
      ),
  },
  {
    path: 'custom-card',
    loadChildren: () =>
      import('./custom-card-page/custom-card-page.module').then(mod => mod.CustomCardPageModule),
  },
  {
    path: 'custom-currency-input',
    loadChildren: () =>
      import('./custom-currency-input-page/custom-currency-input-page.module').then(
        mod => mod.CustomCurrencyInputPageModule,
      ),
  },
  {
    path: 'custom-file',
    loadChildren: () =>
      import('./custom-file-page/custom-file-page.module').then(mod => mod.CustomFilePageModule),
  },
  {
    path: 'custom-generic-http',
    loadChildren: () =>
      import('./custom-generic-http-page/custom-generic-http-page.module').then(
        mod => mod.CustomGenericHttpPageModule,
      ),
  },
  {
    path: 'custom-i18n',
    loadChildren: () =>
      import('./custom-i18n-page/custom-i18n-page.module').then(mod => mod.CustomI18nPageModule),
  },
  {
    path: 'custom-list',
    loadChildren: () =>
      import('./custom-list-page/custom-list-page.module').then(mod => mod.CustomListPageModule),
  },
  {
    path: 'custom-masks',
    loadChildren: () =>
      import('./custom-masks-page/custom-masks-page.module').then(mod => mod.CustomMasksPageModule),
  },
  {
    path: 'custom-note',
    loadChildren: () =>
      import('./custom-note-page/custom-note-page.module').then(mod => mod.CustomNotePageModule),
  },
  {
    path: 'custom-nunito',
    loadChildren: () =>
      import('./custom-nunito-page/custom-nunito-page.module').then(
        mod => mod.CustomNunitoPageModule,
      ),
  },
  {
    path: 'custom-paginator',
    loadChildren: () =>
      import('./custom-paginator-page/custom-paginator-page.module').then(
        mod => mod.CustomPaginatorPageModule,
      ),
  },
  {
    path: 'custom-filter-paginate-sort',
    loadChildren: () =>
      import('./custom-filter-paginate-sort-page/custom-filter-paginate-sort-page.module').then(
        mod => mod.CustomFilterPaginateSortPageModule,
      ),
  },
  {
    path: 'custom-select',
    loadChildren: () =>
      import('./custom-select-page/custom-select-page.module').then(
        mod => mod.CustomSelectPageModule,
      ),
  },
  {
    path: 'custom-smart-layout',
    loadChildren: () =>
      import('./custom-smart-layout-page/custom-smart-layout-page.module').then(
        mod => mod.CustomSmartLayoutPageModule,
      ),
  },
  {
    path: 'custom-table',
    loadChildren: () =>
      import('./custom-table-page/custom-table-page.module').then(mod => mod.CustomTablePageModule),
  },
  {
    path: 'custom-version',
    loadChildren: () =>
      import('./custom-version-page/custom-version-page.module').then(
        mod => mod.CustomVersionPageModule,
      ),
  },
  {
    path: 'custom-ws',
    loadChildren: () =>
      import('./custom-ws-page/custom-ws-page.module').then(mod => mod.CustomWsPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivatePagesRoutingModule {}
