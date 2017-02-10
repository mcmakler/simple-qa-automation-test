import angular from 'angular';
import headerBarComponent from './headerBar.component';

const headerBar = angular.module('headerBar', [])
.component('headerBar', headerBarComponent);

export { headerBar };
