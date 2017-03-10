import { UserStore } from './models/user-store';
import userController from './controllers/users-controller';
import * as cool from './lib/utility';
import './script';
import $ from 'jquery';


import "../styles/site.less";
import "jquery-ui/themes/dark-hive/jquery-ui.css";

console.log('LOADING APPLICATION');

const store = new UserStore();
const $mount = $('#mount');
userController($mount, store);


cool.func1();
cool.func2();

console.log('something');
