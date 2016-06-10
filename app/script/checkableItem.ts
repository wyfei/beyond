import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
    //������ԣ�OnPushָ���ҽ������������reference�������ʱ
    //��������ػ档���React�е�shouldComponentUpdate����ͬ����
    //�������Ƚ�(��ΪReact������Ҫ�ֶ�ʵ�ֵ�)
    //��Ҳ����һ����itemInfo�������¸�ֵ��ԭ��
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'checkable-item',
    //���ڵ�ǰcomponent����������Ч��class
    styles: [`
        .deleted{
            text-decoration: line-through;
        }
    `],
    //template���������������������������һ��input��ǩ��
    //һ��label��ǩ���
    template: `
    <div>
        <input type="checkbox" [ngModel]="item.isChecked" (click)="clickItem($event)">
        <label [class.deleted]="item.isChecked">{{ item.txt }}</label>
    </div>
    `
})
export class CheckableItem {
    //item������ΪInput�������ڸ�����������ʱ�õ�
    @Input() item: Item;
    //onItemClicked������ΪOutput���������û����input��ǩ
    //ʱ����ð���¼�
    @Output() onItemClicked = new EventEmitter();

    //����input�ϵ�click�¼������û����ʱ��������ֹĬ����Ϊ
    //��Ϊ�Ƿ�仯(�ػ�)���ɸ����������
    //Ȼ��ð�ݵ���¼�
    clickItem(e: MouseEvent) {
        e.preventDefault();
        this.onItemClicked.emit(this.item);
    }
}


export interface ToggleItemHandler {
    (item: Item): void;
}

export interface Item {
    isChecked?: boolean;
    txt?: string;
}