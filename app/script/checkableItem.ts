import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
    //脏检查策略，OnPush指当且仅当传入参数的reference发生变更时
    //触发组件重绘。这和React中的shouldComponentUpdate异曲同工，
    //不过更先进(因为React还是需要手动实现的)
    //这也是上一步里itemInfo必须重新赋值的原因
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'checkable-item',
    //仅在当前component作用域下有效的class
    styles: [`
        .deleted{
            text-decoration: line-through;
        }
    `],
    //template就如我们需求里的描述那样，由一个input标签和
    //一个label标签组成
    template: `
    <div>
        <input type="checkbox" [ngModel]="item.isChecked" (click)="clickItem($event)">
        <label [class.deleted]="item.isChecked">{{ item.txt }}</label>
    </div>
    `
})
export class CheckableItem {
    //item被声明为Input，即会在父组件传入参数时用到
    @Input() item: Item;
    //onItemClicked被声明为Output，用来在用户点击input标签
    //时向上冒泡事件
    @Output() onItemClicked = new EventEmitter();

    //监听input上的click事件，当用户点击时，首先阻止默认行为
    //因为是否变化(重绘)是由父组件决定的
    //然后冒泡点击事件
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