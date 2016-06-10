import {Component, OnInit} from '@angular/core';
import {CheckableItem, Item} from './checkableItem';
//声明第一个component
@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><checkable-item [item]="itemInfo" (onItemClicked)="toggle($event)"></checkable-item>',
	directives: [CheckableItem]
})
export class AppComponent implements OnInit {

    itemInfo: Item;

    //当实现OnInit接口时，必须重写ngOnInit方法
    //关于OnInit，详见：
    //https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html#!#hooks-overview
    ngOnInit() {
        //设定初始值
        //根据需求第1条，包含两个属性
        this.itemInfo = {
            isChecked: false,
            txt: 'Hello World!'
        };
    }

    //根据需求第3条，点击component后，事件要
    //冒泡到父组件(调用方)
    toggle(item: Item) {
        //当获取到CheckableItem的点击事件时，
        //给itemInfo重新赋值，并将isChecked置反
        //注：重新赋值是根据需求第4条的不可变性
        this.itemInfo = {
            isChecked: !item.isChecked,
            txt: item.txt
        };
    }
}