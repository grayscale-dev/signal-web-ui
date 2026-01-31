/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import type { Components } from '@signal-web-ui/core/dist/custom-elements';

import { defineCustomElement as defineSignalAppShell } from '@signal-web-ui/core/dist/custom-elements/signal-app-shell.js';
import { defineCustomElement as defineSignalBadge } from '@signal-web-ui/core/dist/custom-elements/signal-badge.js';
import { defineCustomElement as defineSignalBreadcrumbs } from '@signal-web-ui/core/dist/custom-elements/signal-breadcrumbs.js';
import { defineCustomElement as defineSignalButton } from '@signal-web-ui/core/dist/custom-elements/signal-button.js';
import { defineCustomElement as defineSignalCard } from '@signal-web-ui/core/dist/custom-elements/signal-card.js';
import { defineCustomElement as defineSignalCheckbox } from '@signal-web-ui/core/dist/custom-elements/signal-checkbox.js';
import { defineCustomElement as defineSignalCombobox } from '@signal-web-ui/core/dist/custom-elements/signal-combobox.js';
import { defineCustomElement as defineSignalDataTable } from '@signal-web-ui/core/dist/custom-elements/signal-data-table.js';
import { defineCustomElement as defineSignalFeatureTable } from '@signal-web-ui/core/dist/custom-elements/signal-feature-table.js';
import { defineCustomElement as defineSignalFileUpload } from '@signal-web-ui/core/dist/custom-elements/signal-file-upload.js';
import { defineCustomElement as defineSignalHeading } from '@signal-web-ui/core/dist/custom-elements/signal-heading.js';
import { defineCustomElement as defineSignalInput } from '@signal-web-ui/core/dist/custom-elements/signal-input.js';
import { defineCustomElement as defineSignalLayout } from '@signal-web-ui/core/dist/custom-elements/signal-layout.js';
import { defineCustomElement as defineSignalListItem } from '@signal-web-ui/core/dist/custom-elements/signal-list-item.js';
import { defineCustomElement as defineSignalModal } from '@signal-web-ui/core/dist/custom-elements/signal-modal.js';
import { defineCustomElement as defineSignalNavbar } from '@signal-web-ui/core/dist/custom-elements/signal-navbar.js';
import { defineCustomElement as defineSignalPage } from '@signal-web-ui/core/dist/custom-elements/signal-page.js';
import { defineCustomElement as defineSignalProgress } from '@signal-web-ui/core/dist/custom-elements/signal-progress.js';
import { defineCustomElement as defineSignalRadioGroup } from '@signal-web-ui/core/dist/custom-elements/signal-radio-group.js';
import { defineCustomElement as defineSignalSection } from '@signal-web-ui/core/dist/custom-elements/signal-section.js';
import { defineCustomElement as defineSignalSelect } from '@signal-web-ui/core/dist/custom-elements/signal-select.js';
import { defineCustomElement as defineSignalSidebar } from '@signal-web-ui/core/dist/custom-elements/signal-sidebar.js';
import { defineCustomElement as defineSignalSkeleton } from '@signal-web-ui/core/dist/custom-elements/signal-skeleton.js';
import { defineCustomElement as defineSignalSlider } from '@signal-web-ui/core/dist/custom-elements/signal-slider.js';
import { defineCustomElement as defineSignalSnackbar } from '@signal-web-ui/core/dist/custom-elements/signal-snackbar.js';
import { defineCustomElement as defineSignalSplitView } from '@signal-web-ui/core/dist/custom-elements/signal-split-view.js';
import { defineCustomElement as defineSignalSwitch } from '@signal-web-ui/core/dist/custom-elements/signal-switch.js';
import { defineCustomElement as defineSignalTable } from '@signal-web-ui/core/dist/custom-elements/signal-table.js';
import { defineCustomElement as defineSignalTabs } from '@signal-web-ui/core/dist/custom-elements/signal-tabs.js';
import { defineCustomElement as defineSignalTag } from '@signal-web-ui/core/dist/custom-elements/signal-tag.js';
import { defineCustomElement as defineSignalText } from '@signal-web-ui/core/dist/custom-elements/signal-text.js';
import { defineCustomElement as defineSignalTextarea } from '@signal-web-ui/core/dist/custom-elements/signal-textarea.js';
import { defineCustomElement as defineSignalToast } from '@signal-web-ui/core/dist/custom-elements/signal-toast.js';
import { defineCustomElement as defineSignalTooltip } from '@signal-web-ui/core/dist/custom-elements/signal-tooltip.js';
@ProxyCmp({
  defineCustomElementFn: defineSignalAppShell,
  inputs: ['padded']
})
@Component({
  selector: 'signal-app-shell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['padded'],
})
export class SignalAppShell {
  protected el: HTMLSignalAppShellElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalAppShell extends Components.SignalAppShell {}


@ProxyCmp({
  defineCustomElementFn: defineSignalBadge,
  inputs: ['size', 'soft', 'tone']
})
@Component({
  selector: 'signal-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size', 'soft', 'tone'],
})
export class SignalBadge {
  protected el: HTMLSignalBadgeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalBadge extends Components.SignalBadge {}


@ProxyCmp({
  defineCustomElementFn: defineSignalBreadcrumbs,
  inputs: ['items', 'maxItems']
})
@Component({
  selector: 'signal-breadcrumbs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['items', 'maxItems'],
  outputs: ['navigate'],
})
export class SignalBreadcrumbs {
  protected el: HTMLSignalBreadcrumbsElement;
  @Output() navigate = new EventEmitter<CustomEvent<{ id: string }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalBreadcrumbs extends Components.SignalBreadcrumbs {

  navigate: EventEmitter<CustomEvent<{ id: string }>>;
}


@ProxyCmp({
  defineCustomElementFn: defineSignalButton,
  inputs: ['disabled', 'loading', 'size', 'type', 'variant']
})
@Component({
  selector: 'signal-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'loading', 'size', 'type', 'variant'],
})
export class SignalButton {
  protected el: HTMLSignalButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalButton extends Components.SignalButton {}


@ProxyCmp({
  defineCustomElementFn: defineSignalCard,
  inputs: ['description', 'disabled', 'heading', 'href', 'interactive', 'loading', 'padded', 'selected', 'status', 'variant']
})
@Component({
  selector: 'signal-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['description', 'disabled', 'heading', 'href', 'interactive', 'loading', 'padded', 'selected', 'status', 'variant'],
})
export class SignalCard {
  protected el: HTMLSignalCardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalCard extends Components.SignalCard {}


@ProxyCmp({
  defineCustomElementFn: defineSignalCheckbox,
  inputs: ['checked', 'disabled', 'indeterminate', 'label']
})
@Component({
  selector: 'signal-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'indeterminate', 'label'],
  outputs: ['valueChange'],
})
export class SignalCheckbox {
  protected el: HTMLSignalCheckboxElement;
  @Output() valueChange = new EventEmitter<CustomEvent<{ checked: boolean }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalCheckbox extends Components.SignalCheckbox {

  valueChange: EventEmitter<CustomEvent<{ checked: boolean }>>;
}


@ProxyCmp({
  defineCustomElementFn: defineSignalCombobox,
  inputs: ['clearable', 'closeOnSelect', 'creatable', 'defaultValue', 'disabled', 'loading', 'maxSelected', 'mode', 'options', 'placeholder', 'searchable', 'value']
})
@Component({
  selector: 'signal-combobox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['clearable', 'closeOnSelect', 'creatable', 'defaultValue', 'disabled', 'loading', 'maxSelected', 'mode', 'options', 'placeholder', 'searchable', 'value'],
  outputs: ['valueChange', 'openChange', 'queryChange', 'clear'],
})
export class SignalCombobox {
  protected el: HTMLSignalComboboxElement;
  @Output() valueChange = new EventEmitter<CustomEvent<{ value: string | string[] | null }>>();
  @Output() openChange = new EventEmitter<CustomEvent<{ open: boolean }>>();
  @Output() queryChange = new EventEmitter<CustomEvent<{ query: string }>>();
  @Output() clear = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalCombobox extends Components.SignalCombobox {

  valueChange: EventEmitter<CustomEvent<{ value: string | string[] | null }>>;

  openChange: EventEmitter<CustomEvent<{ open: boolean }>>;

  queryChange: EventEmitter<CustomEvent<{ query: string }>>;

  clear: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineSignalDataTable,
  inputs: ['caption', 'columns', 'emptyText', 'getRowId', 'rows']
})
@Component({
  selector: 'signal-data-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['caption', 'columns', 'emptyText', 'getRowId', 'rows'],
  outputs: ['rowClick'],
})
export class SignalDataTable {
  protected el: HTMLSignalDataTableElement;
  @Output() rowClick = new EventEmitter<CustomEvent<{ row: Record<string, unknown> }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalDataTable extends Components.SignalDataTable {

  rowClick: EventEmitter<CustomEvent<{ row: Record<string, unknown> }>>;
}


@ProxyCmp({
  defineCustomElementFn: defineSignalFeatureTable,
  inputs: ['caption', 'columns', 'emptyText', 'filterable', 'filters', 'loading', 'pagination', 'rowKey', 'rows', 'searchable', 'selectable', 'selectedKeys']
})
@Component({
  selector: 'signal-feature-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['caption', 'columns', 'emptyText', 'filterable', 'filters', 'loading', 'pagination', 'rowKey', 'rows', 'searchable', 'selectable', 'selectedKeys'],
  outputs: ['rowClick', 'selectionChanged', 'sortChange', 'filterChange', 'searchChange', 'pageChange'],
})
export class SignalFeatureTable {
  protected el: HTMLSignalFeatureTableElement;
  @Output() rowClick = new EventEmitter<CustomEvent<{ row: Record<string, unknown> }>>();
  @Output() selectionChanged = new EventEmitter<CustomEvent<{ keys: string[] }>>();
  @Output() sortChange = new EventEmitter<CustomEvent<{ sort?: { key: string; direction: "asc" | "desc" } }>>();
  @Output() filterChange = new EventEmitter<CustomEvent<{ filters: Record<string, string> }>>();
  @Output() searchChange = new EventEmitter<CustomEvent<{ query: string }>>();
  @Output() pageChange = new EventEmitter<CustomEvent<{ pageIndex: number; pageSize: number }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalFeatureTable extends Components.SignalFeatureTable {

  rowClick: EventEmitter<CustomEvent<{ row: Record<string, unknown> }>>;

  selectionChanged: EventEmitter<CustomEvent<{ keys: string[] }>>;

  sortChange: EventEmitter<CustomEvent<{ sort?: { key: string; direction: "asc" | "desc" } }>>;

  filterChange: EventEmitter<CustomEvent<{ filters: Record<string, string> }>>;

  searchChange: EventEmitter<CustomEvent<{ query: string }>>;

  pageChange: EventEmitter<CustomEvent<{ pageIndex: number; pageSize: number }>>;
}


@ProxyCmp({
  defineCustomElementFn: defineSignalFileUpload,
  inputs: ['accept', 'disabled', 'maxFiles', 'maxSize', 'multiple', 'previews', 'progress', 'value']
})
@Component({
  selector: 'signal-file-upload',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['accept', 'disabled', 'maxFiles', 'maxSize', 'multiple', 'previews', 'progress', 'value'],
  outputs: ['fileSelect', 'upload', 'remove'],
})
export class SignalFileUpload {
  protected el: HTMLSignalFileUploadElement;
  @Output() fileSelect = new EventEmitter<CustomEvent<{ files: File[] }>>();
  @Output() upload = new EventEmitter<CustomEvent<{ files: File[] }>>();
  @Output() remove = new EventEmitter<CustomEvent<{ file: File }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalFileUpload extends Components.SignalFileUpload {

  fileSelect: EventEmitter<CustomEvent<{ files: File[] }>>;

  upload: EventEmitter<CustomEvent<{ files: File[] }>>;

  remove: EventEmitter<CustomEvent<{ file: File }>>;
}


@ProxyCmp({
  defineCustomElementFn: defineSignalHeading,
  inputs: ['align', 'level']
})
@Component({
  selector: 'signal-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['align', 'level'],
})
export class SignalHeading {
  protected el: HTMLSignalHeadingElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalHeading extends Components.SignalHeading {}


@ProxyCmp({
  defineCustomElementFn: defineSignalInput,
  inputs: ['autocomplete', 'disabled', 'inset', 'name', 'placeholder', 'readonly', 'required', 'type', 'value']
})
@Component({
  selector: 'signal-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autocomplete', 'disabled', 'inset', 'name', 'placeholder', 'readonly', 'required', 'type', 'value'],
  outputs: ['valueInput', 'valueChange'],
})
export class SignalInput {
  protected el: HTMLSignalInputElement;
  @Output() valueInput = new EventEmitter<CustomEvent<{ value: string }>>();
  @Output() valueChange = new EventEmitter<CustomEvent<{ value: string }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalInput extends Components.SignalInput {

  valueInput: EventEmitter<CustomEvent<{ value: string }>>;

  valueChange: EventEmitter<CustomEvent<{ value: string }>>;
}


@ProxyCmp({
  defineCustomElementFn: defineSignalLayout,
  inputs: ['align', 'columns', 'direction', 'divider', 'gap', 'justify', 'layout', 'minItemWidth', 'wrap']
})
@Component({
  selector: 'signal-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['align', 'columns', 'direction', 'divider', 'gap', 'justify', 'layout', 'minItemWidth', 'wrap'],
})
export class SignalLayout {
  protected el: HTMLSignalLayoutElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalLayout extends Components.SignalLayout {}


@ProxyCmp({
  defineCustomElementFn: defineSignalListItem,
  inputs: ['disabled', 'heading', 'href', 'selected', 'subtitle']
})
@Component({
  selector: 'signal-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'heading', 'href', 'selected', 'subtitle'],
  outputs: ['itemClick'],
})
export class SignalListItem {
  protected el: HTMLSignalListItemElement;
  @Output() itemClick = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalListItem extends Components.SignalListItem {

  itemClick: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineSignalModal,
  inputs: ['closeOnBackdrop', 'closeOnEsc', 'confirmText', 'defaultPosition', 'defaultSize', 'description', 'dragEnabled', 'fullscreen', 'heading', 'maxSize', 'minSize', 'open', 'resizable', 'showConfirm', 'showHeaderControls', 'size']
})
@Component({
  selector: 'signal-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['closeOnBackdrop', 'closeOnEsc', 'confirmText', 'defaultPosition', 'defaultSize', 'description', 'dragEnabled', 'fullscreen', 'heading', 'maxSize', 'minSize', 'open', 'resizable', 'showConfirm', 'showHeaderControls', 'size'],
  outputs: ['openChange', 'close', 'confirm'],
})
export class SignalModal {
  protected el: HTMLSignalModalElement;
  @Output() openChange = new EventEmitter<CustomEvent<{ open: boolean }>>();
  @Output() close = new EventEmitter<CustomEvent<void>>();
  @Output() confirm = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalModal extends Components.SignalModal {

  openChange: EventEmitter<CustomEvent<{ open: boolean }>>;

  close: EventEmitter<CustomEvent<void>>;

  confirm: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineSignalNavbar,
  inputs: ['activeItem', 'brand', 'collapsed', 'items', 'scrolled']
})
@Component({
  selector: 'signal-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activeItem', 'brand', 'collapsed', 'items', 'scrolled'],
  outputs: ['navigate'],
})
export class SignalNavbar {
  protected el: HTMLSignalNavbarElement;
  @Output() navigate = new EventEmitter<CustomEvent<{ id: string }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalNavbar extends Components.SignalNavbar {

  navigate: EventEmitter<CustomEvent<{ id: string }>>;
}


@ProxyCmp({
  defineCustomElementFn: defineSignalPage,
  inputs: ['description', 'empty', 'error', 'heading', 'loading']
})
@Component({
  selector: 'signal-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['description', 'empty', 'error', 'heading', 'loading'],
})
export class SignalPage {
  protected el: HTMLSignalPageElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalPage extends Components.SignalPage {}


@ProxyCmp({
  defineCustomElementFn: defineSignalProgress,
  inputs: ['indeterminate', 'label', 'max', 'showValue', 'size', 'state', 'type', 'value']
})
@Component({
  selector: 'signal-progress',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['indeterminate', 'label', 'max', 'showValue', 'size', 'state', 'type', 'value'],
})
export class SignalProgress {
  protected el: HTMLSignalProgressElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalProgress extends Components.SignalProgress {}


@ProxyCmp({
  defineCustomElementFn: defineSignalRadioGroup,
  inputs: ['disabled', 'name', 'options', 'value']
})
@Component({
  selector: 'signal-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'name', 'options', 'value'],
  outputs: ['valueChange'],
})
export class SignalRadioGroup {
  protected el: HTMLSignalRadioGroupElement;
  @Output() valueChange = new EventEmitter<CustomEvent<{ value: string | undefined }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalRadioGroup extends Components.SignalRadioGroup {

  valueChange: EventEmitter<CustomEvent<{ value: string | undefined }>>;
}


@ProxyCmp({
  defineCustomElementFn: defineSignalSection,
  inputs: ['collapsible', 'defaultCollapsed', 'heading', 'loading', 'subtitle']
})
@Component({
  selector: 'signal-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['collapsible', 'defaultCollapsed', 'heading', 'loading', 'subtitle'],
})
export class SignalSection {
  protected el: HTMLSignalSectionElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalSection extends Components.SignalSection {}


@ProxyCmp({
  defineCustomElementFn: defineSignalSelect,
  inputs: ['disabled', 'options', 'placeholder', 'value']
})
@Component({
  selector: 'signal-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'options', 'placeholder', 'value'],
  outputs: ['valueChange'],
})
export class SignalSelect {
  protected el: HTMLSignalSelectElement;
  @Output() valueChange = new EventEmitter<CustomEvent<{ value: string | undefined }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalSelect extends Components.SignalSelect {

  valueChange: EventEmitter<CustomEvent<{ value: string | undefined }>>;
}


@ProxyCmp({
  defineCustomElementFn: defineSignalSidebar,
  inputs: ['activeItem', 'collapsible', 'defaultCollapsed', 'heading', 'items', 'searchable']
})
@Component({
  selector: 'signal-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activeItem', 'collapsible', 'defaultCollapsed', 'heading', 'items', 'searchable'],
  outputs: ['navigate', 'toggle'],
})
export class SignalSidebar {
  protected el: HTMLSignalSidebarElement;
  @Output() navigate = new EventEmitter<CustomEvent<{ id: string }>>();
  @Output() toggle = new EventEmitter<CustomEvent<{ collapsed: boolean }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalSidebar extends Components.SignalSidebar {

  navigate: EventEmitter<CustomEvent<{ id: string }>>;

  toggle: EventEmitter<CustomEvent<{ collapsed: boolean }>>;
}


@ProxyCmp({
  defineCustomElementFn: defineSignalSkeleton,
  inputs: ['description', 'heading', 'lines', 'media', 'variant']
})
@Component({
  selector: 'signal-skeleton',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['description', 'heading', 'lines', 'media', 'variant'],
})
export class SignalSkeleton {
  protected el: HTMLSignalSkeletonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalSkeleton extends Components.SignalSkeleton {}


@ProxyCmp({
  defineCustomElementFn: defineSignalSlider,
  inputs: ['disabled', 'max', 'min', 'mode', 'showValue', 'step', 'value']
})
@Component({
  selector: 'signal-slider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'max', 'min', 'mode', 'showValue', 'step', 'value'],
  outputs: ['valueChange'],
})
export class SignalSlider {
  protected el: HTMLSignalSliderElement;
  @Output() valueChange = new EventEmitter<CustomEvent<{ value: number | [number, number] }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalSlider extends Components.SignalSlider {

  valueChange: EventEmitter<CustomEvent<{ value: number | [number, number] }>>;
}


@ProxyCmp({
  defineCustomElementFn: defineSignalSnackbar,
  inputs: ['actionLabel', 'duration', 'message', 'open', 'tone']
})
@Component({
  selector: 'signal-snackbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['actionLabel', 'duration', { name: 'message', required: true }, 'open', 'tone'],
  outputs: ['action', 'dismiss'],
})
export class SignalSnackbar {
  protected el: HTMLSignalSnackbarElement;
  @Output() action = new EventEmitter<CustomEvent<void>>();
  @Output() dismiss = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalSnackbar extends Components.SignalSnackbar {

  action: EventEmitter<CustomEvent<void>>;

  dismiss: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineSignalSplitView,
  inputs: ['collapsible', 'defaultSizes', 'minSizes', 'orientation', 'panes']
})
@Component({
  selector: 'signal-split-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['collapsible', 'defaultSizes', 'minSizes', 'orientation', 'panes'],
  outputs: ['sizesChange'],
})
export class SignalSplitView {
  protected el: HTMLSignalSplitViewElement;
  @Output() sizesChange = new EventEmitter<CustomEvent<{ sizes: number[] }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalSplitView extends Components.SignalSplitView {

  sizesChange: EventEmitter<CustomEvent<{ sizes: number[] }>>;
}


@ProxyCmp({
  defineCustomElementFn: defineSignalSwitch,
  inputs: ['checked', 'controlId', 'disabled', 'label', 'loading']
})
@Component({
  selector: 'signal-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'controlId', 'disabled', 'label', 'loading'],
  outputs: ['valueChange'],
})
export class SignalSwitch {
  protected el: HTMLSignalSwitchElement;
  @Output() valueChange = new EventEmitter<CustomEvent<{ checked: boolean }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalSwitch extends Components.SignalSwitch {

  valueChange: EventEmitter<CustomEvent<{ checked: boolean }>>;
}


@ProxyCmp({
  defineCustomElementFn: defineSignalTable,
  inputs: ['caption', 'columns', 'emptyText', 'filterable', 'filters', 'loading', 'reorderable', 'rowKey', 'rows', 'searchable']
})
@Component({
  selector: 'signal-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['caption', 'columns', 'emptyText', 'filterable', 'filters', 'loading', 'reorderable', 'rowKey', 'rows', 'searchable'],
  outputs: ['rowClick', 'reorder', 'searchChange', 'filterChange'],
})
export class SignalTable {
  protected el: HTMLSignalTableElement;
  @Output() rowClick = new EventEmitter<CustomEvent<{ row: Record<string, unknown> }>>();
  @Output() reorder = new EventEmitter<CustomEvent<{ rows: Record<string, unknown>[] }>>();
  @Output() searchChange = new EventEmitter<CustomEvent<{ query: string }>>();
  @Output() filterChange = new EventEmitter<CustomEvent<{ filters: Record<string, string> }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalTable extends Components.SignalTable {

  rowClick: EventEmitter<CustomEvent<{ row: Record<string, unknown> }>>;

  reorder: EventEmitter<CustomEvent<{ rows: Record<string, unknown>[] }>>;

  searchChange: EventEmitter<CustomEvent<{ query: string }>>;

  filterChange: EventEmitter<CustomEvent<{ filters: Record<string, string> }>>;
}


@ProxyCmp({
  defineCustomElementFn: defineSignalTabs,
  inputs: ['activeKey', 'keepAlive', 'lazy', 'orientation', 'tabs', 'validationMap', 'value', 'variant']
})
@Component({
  selector: 'signal-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activeKey', 'keepAlive', 'lazy', 'orientation', 'tabs', 'validationMap', 'value', 'variant'],
  outputs: ['valueChange'],
})
export class SignalTabs {
  protected el: HTMLSignalTabsElement;
  @Output() valueChange = new EventEmitter<CustomEvent<{ value: string }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalTabs extends Components.SignalTabs {

  valueChange: EventEmitter<CustomEvent<{ value: string }>>;
}


@ProxyCmp({
  defineCustomElementFn: defineSignalTag,
  inputs: ['disabled', 'label', 'removable', 'size', 'tone']
})
@Component({
  selector: 'signal-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', { name: 'label', required: true }, 'removable', 'size', 'tone'],
  outputs: ['remove'],
})
export class SignalTag {
  protected el: HTMLSignalTagElement;
  @Output() remove = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalTag extends Components.SignalTag {

  remove: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineSignalText,
  inputs: ['clampLines', 'truncate']
})
@Component({
  selector: 'signal-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['clampLines', 'truncate'],
})
export class SignalText {
  protected el: HTMLSignalTextElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalText extends Components.SignalText {}


@ProxyCmp({
  defineCustomElementFn: defineSignalTextarea,
  inputs: ['autoResize', 'defaultValue', 'disabled', 'maxLength', 'placeholder', 'rows', 'validationState', 'value']
})
@Component({
  selector: 'signal-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoResize', 'defaultValue', 'disabled', 'maxLength', 'placeholder', 'rows', 'validationState', 'value'],
  outputs: ['valueChange'],
})
export class SignalTextarea {
  protected el: HTMLSignalTextareaElement;
  @Output() valueChange = new EventEmitter<CustomEvent<{ value: string }>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalTextarea extends Components.SignalTextarea {

  valueChange: EventEmitter<CustomEvent<{ value: string }>>;
}


@ProxyCmp({
  defineCustomElementFn: defineSignalToast,
  inputs: ['actionLabel', 'description', 'dismissible', 'duration', 'heading', 'message', 'open', 'tone']
})
@Component({
  selector: 'signal-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['actionLabel', 'description', 'dismissible', 'duration', 'heading', { name: 'message', required: true }, 'open', 'tone'],
  outputs: ['action', 'dismiss'],
})
export class SignalToast {
  protected el: HTMLSignalToastElement;
  @Output() action = new EventEmitter<CustomEvent<void>>();
  @Output() dismiss = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalToast extends Components.SignalToast {

  action: EventEmitter<CustomEvent<void>>;

  dismiss: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineSignalTooltip,
  inputs: ['content', 'delay', 'disabled', 'interactive', 'placement', 'variant']
})
@Component({
  selector: 'signal-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [{ name: 'content', required: true }, 'delay', 'disabled', 'interactive', 'placement', 'variant'],
})
export class SignalTooltip {
  protected el: HTMLSignalTooltipElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SignalTooltip extends Components.SignalTooltip {}


