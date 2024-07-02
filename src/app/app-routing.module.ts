import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dead-end',
    loadChildren: () => import('./dead-end/dead-end.module').then( m => m.DeadEndPageModule)
  },
  {
    path: 'get-keys',
    loadChildren: () => import('./get-keys/get-keys.module').then( m => m.GetKeysPageModule)
  },
  {
    path: 'out-front-door',
    loadChildren: () => import('./out-front-door/out-front-door.module').then( m => m.OutFrontDoorPageModule)
  },
  {
    path: 'go-sleep',
    loadChildren: () => import('./go-sleep/go-sleep.module').then( m => m.GoSleepPageModule)
  },
  {
    path: 'blanket-ending',
    loadChildren: () => import('./blanket-ending/blanket-ending.module').then( m => m.BlanketEndingPageModule)
  },
  {
    path: 'mclaren',
    loadChildren: () => import('./mclaren/mclaren.module').then( m => m.MclarenPageModule)
  },
  {
    path: 'kia-soul',
    loadChildren: () => import('./kia-soul/kia-soul.module').then( m => m.KiaSoulPageModule)
  },
  {
    path: 'grocery',
    loadChildren: () => import('./grocery/grocery.module').then( m => m.GroceryPageModule)
  },
  {
    path: 'gas-station',
    loadChildren: () => import('./gas-station/gas-station.module').then( m => m.GasStationPageModule)
  },
  {
    path: 'fast-or-slow',
    loadChildren: () => import('./fast-or-slow/fast-or-slow.module').then( m => m.FastOrSlowPageModule)
  },
  {
    path: 'road-rage-ending',
    loadChildren: () => import('./road-rage-ending/road-rage-ending.module').then( m => m.RoadRageEndingPageModule)
  },
  {
    path: 'at-gas-station',
    loadChildren: () => import('./at-gas-station/at-gas-station.module').then( m => m.AtGasStationPageModule)
  },
  {
    path: 'buy-lottery',
    loadChildren: () => import('./buy-lottery/buy-lottery.module').then( m => m.BuyLotteryPageModule)
  },
  {
    path: 'give-lottery',
    loadChildren: () => import('./give-lottery/give-lottery.module').then( m => m.GiveLotteryPageModule)
  },
  {
    path: 'dont-give-lottery',
    loadChildren: () => import('./dont-give-lottery/dont-give-lottery.module').then( m => m.DontGiveLotteryPageModule)
  },
  {
    path: 'but-gas-milk',
    loadChildren: () => import('./but-gas-milk/but-gas-milk.module').then( m => m.ButGasMilkPageModule)
  },
  {
    path: 'gas-milk-ending',
    loadChildren: () => import('./gas-milk-ending/gas-milk-ending.module').then( m => m.GasMilkEndingPageModule)
  },
  {
    path: 'arrive-at-grocery',
    loadChildren: () => import('./arrive-at-grocery/arrive-at-grocery.module').then( m => m.ArriveAtGroceryPageModule)
  },
  {
    path: 'red-shirt-blue-shirt-ending',
    loadChildren: () => import('./red-shirt-blue-shirt-ending/red-shirt-blue-shirt-ending.module').then( m => m.RedShirtBlueShirtEndingPageModule)
  },
  {
    path: 'beige-ending',
    loadChildren: () => import('./beige-ending/beige-ending.module').then( m => m.BeigeEndingPageModule)
  },
  {
    path: 'magenta-ending',
    loadChildren: () => import('./magenta-ending/magenta-ending.module').then( m => m.MagentaEndingPageModule)
  },
  {
    path: 'slow-mclaren',
    loadChildren: () => import('./slow-mclaren/slow-mclaren.module').then( m => m.SlowMclarenPageModule)
  },
  {
    path: 'fast-slow-mclaren-grocery',
    loadChildren: () => import('./fast-slow-mclaren-grocery/fast-slow-mclaren-grocery.module').then( m => m.FastSlowMclarenGroceryPageModule)
  },
  {
    path: 'fast-slow-mclaren-gas',
    loadChildren: () => import('./fast-slow-mclaren-gas/fast-slow-mclaren-gas.module').then( m => m.FastSlowMclarenGasPageModule)
  },
  {
    path: 'slow-gas-mclaren',
    loadChildren: () => import('./slow-gas-mclaren/slow-gas-mclaren.module').then( m => m.SlowGasMclarenPageModule)
  },
  {
    path: 'slow-grocery-mclaren',
    loadChildren: () => import('./slow-grocery-mclaren/slow-grocery-mclaren.module').then( m => m.SlowGroceryMclarenPageModule)
  },
  {
    path: 'fast-mclaren',
    loadChildren: () => import('./fast-mclaren/fast-mclaren.module').then( m => m.FastMclarenPageModule)
  },
  {
    path: 'pulled-over-mclaren',
    loadChildren: () => import('./pulled-over-mclaren/pulled-over-mclaren.module').then( m => m.PulledOverMclarenPageModule)
  },
  {
    path: 'license-registration',
    loadChildren: () => import('./license-registration/license-registration.module').then( m => m.LicenseRegistrationPageModule)
  },
  {
    path: 'finger-guns',
    loadChildren: () => import('./finger-guns/finger-guns.module').then( m => m.FingerGunsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
