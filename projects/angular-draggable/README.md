[![npm](https://img.shields.io/npm/v/angular-draggablex.svg)](https://www.npmjs.com/package/angular-draggablex)
[![npm](https://img.shields.io/npm/dt/angular-draggablex.svg)](https://www.npmjs.com/package/angular-draggablex)

# Angular-DraggableX

A angular directive provide html block to move on html plain.

### [Forked from Angular-Draggable](https://www.npmjs.com/package/angular-draggable)

#### Compatibility

| Angular-DraggableX | Angular  |
| ------------------ | -------- |
| 12.0.x             | >=12.x.x |

#### Usages

```js
import { NgDraggableModule } from 'angular-draggable';
@NgModule({
    imports: [
        ....,
        NgDraggableModule
    ],
    declarations: [YourAppComponent ],
    exports: [YourAppComponent],
    bootstrap: [YourAppComponent],
})
.....


```

```html
<div draggable style="position: relative">content</div>
```

```html
<div draggable="true">content</div>
```

```html
<div draggable="false">content</div>
```
