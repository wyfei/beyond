import {Component} from '@angular/core';

//引入输入component
import {InputItem} from './inputItem';
import {CheckableItem, Item} from './checkableItem';
//引入总结component
import {Counter} from './counter';

@Component({
    selector: 'my-app',
    template: `
    <h1>My First Angular 2 App</h1>
    <!--
        在template里，增加input-item和counter的使用
        input-item里，捕获onItemAdded事件，传递给addItem方法
    -->
    <input-item (onItemAdded)="addItem($event)"></input-item>
    <!--
        使用*ngFor遍历items变量。详情:
        https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ngFor
    -->
    <checkable-item *ngFor="let itemInfo of items; let i = index" [item]="itemInfo" (onItemClicked)="toggle($event, i)">
    </checkable-item>
    <!--
        counter里，传入items
    -->
    <counter [items]="items"></counter>
    `,
    directives: [InputItem, CheckableItem, Counter]
})
export class AppComponent {
    //声明items为成员变量
    items: Item[] = [];

    //当捕获到onItemAdded事件时，调用该方法，添加新item到items里
    //注：根据Immutable策略，生成新的items
    addItem(item: Item) {
        this.items = [...this.items, item];
    }

    //点击checkable-item时，置反其isChecked属性
    //注：根据Immutable策略，生成新的items
    toggle(item: Item, index: number) {
        this.items = [
            ...this.items.slice(0, index),
            { isChecked: !item.isChecked, txt: item.txt },
            ...this.items.slice(index + 1)
        ];
    }
}