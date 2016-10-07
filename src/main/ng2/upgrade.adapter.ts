import { UpgradeAdapter } from '@angular/upgrade';
import { AppModule } from './app.module';
import { AppComponent } from './app.component'
const upgradeAdapter = new UpgradeAdapter(AppModule);
var NgAppComponent = upgradeAdapter.downgradeNg2Component( AppComponent );
export { upgradeAdapter, NgAppComponent }