import {Component, OnInit} from '@angular/core';
import {CheckableItem, Item} from './checkableItem';
//������һ��component
@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><checkable-item [item]="itemInfo" (onItemClicked)="toggle($event)"></checkable-item>',
	directives: [CheckableItem]
})
export class AppComponent implements OnInit {

    itemInfo: Item;

    //��ʵ��OnInit�ӿ�ʱ��������дngOnInit����
    //����OnInit�������
    //https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html#!#hooks-overview
    ngOnInit() {
        //�趨��ʼֵ
        //���������1����������������
        this.itemInfo = {
            isChecked: false,
            txt: 'Hello World!'
        };
    }

    //���������3�������component���¼�Ҫ
    //ð�ݵ������(���÷�)
    toggle(item: Item) {
        //����ȡ��CheckableItem�ĵ���¼�ʱ��
        //��itemInfo���¸�ֵ������isChecked�÷�
        //ע�����¸�ֵ�Ǹ��������4���Ĳ��ɱ���
        this.itemInfo = {
            isChecked: !item.isChecked,
            txt: item.txt
        };
    }
}