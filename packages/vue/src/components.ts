/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer, type StencilVueComponent } from '@stencil/vue-output-target/runtime';

import type { JSX } from '@signal-web-ui/core';

import { defineCustomElements } from '@signal-web-ui/core/loader';


defineCustomElements();

export const SignalAppShell: StencilVueComponent<JSX.SignalAppShell> = /*@__PURE__*/ defineContainer<JSX.SignalAppShell>('signal-app-shell', undefined, [
  'padded'
]);


export const SignalBadge: StencilVueComponent<JSX.SignalBadge> = /*@__PURE__*/ defineContainer<JSX.SignalBadge>('signal-badge', undefined, [
  'tone',
  'soft',
  'size'
]);


export const SignalBreadcrumbs: StencilVueComponent<JSX.SignalBreadcrumbs> = /*@__PURE__*/ defineContainer<JSX.SignalBreadcrumbs>('signal-breadcrumbs', undefined, [
  'items',
  'maxItems',
  'navigate'
], [
  'navigate'
]);


export const SignalButton: StencilVueComponent<JSX.SignalButton> = /*@__PURE__*/ defineContainer<JSX.SignalButton>('signal-button', undefined, [
  'variant',
  'size',
  'loading',
  'disabled',
  'type'
]);


export const SignalCard: StencilVueComponent<JSX.SignalCard> = /*@__PURE__*/ defineContainer<JSX.SignalCard>('signal-card', undefined, [
  'variant',
  'heading',
  'description',
  'status',
  'padded',
  'interactive',
  'selected',
  'disabled',
  'loading',
  'href'
]);


export const SignalCheckbox: StencilVueComponent<JSX.SignalCheckbox> = /*@__PURE__*/ defineContainer<JSX.SignalCheckbox>('signal-checkbox', undefined, [
  'checked',
  'indeterminate',
  'disabled',
  'label',
  'valueChange'
], [
  'valueChange'
]);


export const SignalCombobox: StencilVueComponent<JSX.SignalCombobox> = /*@__PURE__*/ defineContainer<JSX.SignalCombobox>('signal-combobox', undefined, [
  'options',
  'value',
  'defaultValue',
  'mode',
  'placeholder',
  'disabled',
  'loading',
  'clearable',
  'searchable',
  'creatable',
  'maxSelected',
  'closeOnSelect',
  'valueChange',
  'openChange',
  'queryChange',
  'clear'
], [
  'valueChange',
  'openChange',
  'queryChange',
  'clear'
]);


export const SignalDataTable: StencilVueComponent<JSX.SignalDataTable> = /*@__PURE__*/ defineContainer<JSX.SignalDataTable>('signal-data-table', undefined, [
  'columns',
  'rows',
  'caption',
  'emptyText',
  'getRowId',
  'rowClick'
], [
  'rowClick'
]);


export const SignalDrawer: StencilVueComponent<JSX.SignalDrawer> = /*@__PURE__*/ defineContainer<JSX.SignalDrawer>('signal-drawer', undefined, [
  'open',
  'side',
  'heading',
  'description',
  'size',
  'snapPoints',
  'defaultSnap',
  'dismissOnBackdrop',
  'dismissible',
  'openChange',
  'close'
], [
  'openChange',
  'close'
]);


export const SignalDropdown: StencilVueComponent<JSX.SignalDropdown> = /*@__PURE__*/ defineContainer<JSX.SignalDropdown>('signal-dropdown', undefined, [
  'open',
  'items',
  'label',
  'align',
  'closeOnSelect',
  'openChange',
  'itemSelect'
], [
  'openChange',
  'itemSelect'
]);


export const SignalFeatureTable: StencilVueComponent<JSX.SignalFeatureTable> = /*@__PURE__*/ defineContainer<JSX.SignalFeatureTable>('signal-feature-table', undefined, [
  'columns',
  'rows',
  'caption',
  'rowKey',
  'searchable',
  'filterable',
  'selectable',
  'selectedKeys',
  'pagination',
  'emptyText',
  'filters',
  'loading',
  'rowClick',
  'selectionChanged',
  'sortChange',
  'filterChange',
  'searchChange',
  'pageChange'
], [
  'rowClick',
  'selectionChanged',
  'sortChange',
  'filterChange',
  'searchChange',
  'pageChange'
]);


export const SignalFileUpload: StencilVueComponent<JSX.SignalFileUpload> = /*@__PURE__*/ defineContainer<JSX.SignalFileUpload>('signal-file-upload', undefined, [
  'accept',
  'multiple',
  'maxSize',
  'maxFiles',
  'value',
  'previews',
  'progress',
  'disabled',
  'fileSelect',
  'upload',
  'remove'
], [
  'fileSelect',
  'upload',
  'remove'
]);


export const SignalHeading: StencilVueComponent<JSX.SignalHeading> = /*@__PURE__*/ defineContainer<JSX.SignalHeading>('signal-heading', undefined, [
  'level',
  'align'
]);


export const SignalInput: StencilVueComponent<JSX.SignalInput> = /*@__PURE__*/ defineContainer<JSX.SignalInput>('signal-input', undefined, [
  'value',
  'placeholder',
  'name',
  'type',
  'disabled',
  'readonly',
  'required',
  'inset',
  'autocomplete',
  'valueInput',
  'valueChange'
], [
  'valueInput',
  'valueChange'
]);


export const SignalLayout: StencilVueComponent<JSX.SignalLayout> = /*@__PURE__*/ defineContainer<JSX.SignalLayout>('signal-layout', undefined, [
  'layout',
  'direction',
  'gap',
  'align',
  'justify',
  'wrap',
  'columns',
  'minItemWidth',
  'divider'
]);


export const SignalListItem: StencilVueComponent<JSX.SignalListItem> = /*@__PURE__*/ defineContainer<JSX.SignalListItem>('signal-list-item', undefined, [
  'heading',
  'subtitle',
  'href',
  'selected',
  'disabled',
  'itemClick'
], [
  'itemClick'
]);


export const SignalModal: StencilVueComponent<JSX.SignalModal> = /*@__PURE__*/ defineContainer<JSX.SignalModal>('signal-modal', undefined, [
  'open',
  'heading',
  'description',
  'size',
  'closeOnBackdrop',
  'closeOnEsc',
  'dragEnabled',
  'resizable',
  'fullscreen',
  'showHeaderControls',
  'showConfirm',
  'confirmText',
  'defaultSize',
  'minSize',
  'maxSize',
  'defaultPosition',
  'openChange',
  'close',
  'confirm'
], [
  'openChange',
  'close',
  'confirm'
]);


export const SignalNavbar: StencilVueComponent<JSX.SignalNavbar> = /*@__PURE__*/ defineContainer<JSX.SignalNavbar>('signal-navbar', undefined, [
  'brand',
  'items',
  'activeItem',
  'collapsed',
  'scrolled',
  'navigate'
], [
  'navigate'
]);


export const SignalPage: StencilVueComponent<JSX.SignalPage> = /*@__PURE__*/ defineContainer<JSX.SignalPage>('signal-page', undefined, [
  'heading',
  'description',
  'loading',
  'error',
  'empty'
]);


export const SignalPopover: StencilVueComponent<JSX.SignalPopover> = /*@__PURE__*/ defineContainer<JSX.SignalPopover>('signal-popover', undefined, [
  'open',
  'defaultOpen',
  'placement',
  'dismissOnClickOutside',
  'closeOnSelect',
  'openChange',
  'close'
], [
  'openChange',
  'close'
]);


export const SignalProgress: StencilVueComponent<JSX.SignalProgress> = /*@__PURE__*/ defineContainer<JSX.SignalProgress>('signal-progress', undefined, [
  'value',
  'max',
  'indeterminate',
  'type',
  'label',
  'showValue',
  'state',
  'size'
]);


export const SignalRadioGroup: StencilVueComponent<JSX.SignalRadioGroup> = /*@__PURE__*/ defineContainer<JSX.SignalRadioGroup>('signal-radio-group', undefined, [
  'options',
  'value',
  'disabled',
  'name',
  'valueChange'
], [
  'valueChange'
]);


export const SignalSection: StencilVueComponent<JSX.SignalSection> = /*@__PURE__*/ defineContainer<JSX.SignalSection>('signal-section', undefined, [
  'heading',
  'subtitle',
  'collapsible',
  'defaultCollapsed',
  'loading'
]);


export const SignalSelect: StencilVueComponent<JSX.SignalSelect> = /*@__PURE__*/ defineContainer<JSX.SignalSelect>('signal-select', undefined, [
  'options',
  'placeholder',
  'value',
  'disabled',
  'valueChange'
], [
  'valueChange'
]);


export const SignalSidebar: StencilVueComponent<JSX.SignalSidebar> = /*@__PURE__*/ defineContainer<JSX.SignalSidebar>('signal-sidebar', undefined, [
  'items',
  'activeItem',
  'collapsible',
  'defaultCollapsed',
  'searchable',
  'heading',
  'navigate',
  'toggle'
], [
  'navigate',
  'toggle'
]);


export const SignalSkeleton: StencilVueComponent<JSX.SignalSkeleton> = /*@__PURE__*/ defineContainer<JSX.SignalSkeleton>('signal-skeleton', undefined, [
  'variant',
  'lines',
  'media',
  'heading',
  'description'
]);


export const SignalSlider: StencilVueComponent<JSX.SignalSlider> = /*@__PURE__*/ defineContainer<JSX.SignalSlider>('signal-slider', undefined, [
  'mode',
  'value',
  'min',
  'max',
  'step',
  'showValue',
  'disabled',
  'valueChange'
], [
  'valueChange'
]);


export const SignalSnackbar: StencilVueComponent<JSX.SignalSnackbar> = /*@__PURE__*/ defineContainer<JSX.SignalSnackbar>('signal-snackbar', undefined, [
  'message',
  'tone',
  'duration',
  'actionLabel',
  'open',
  'action',
  'dismiss'
], [
  'action',
  'dismiss'
]);


export const SignalSplitView: StencilVueComponent<JSX.SignalSplitView> = /*@__PURE__*/ defineContainer<JSX.SignalSplitView>('signal-split-view', undefined, [
  'orientation',
  'panes',
  'minSizes',
  'defaultSizes',
  'collapsible',
  'sizesChange'
], [
  'sizesChange'
]);


export const SignalSwitch: StencilVueComponent<JSX.SignalSwitch> = /*@__PURE__*/ defineContainer<JSX.SignalSwitch>('signal-switch', undefined, [
  'checked',
  'disabled',
  'loading',
  'label',
  'controlId',
  'valueChange'
], [
  'valueChange'
]);


export const SignalTable: StencilVueComponent<JSX.SignalTable> = /*@__PURE__*/ defineContainer<JSX.SignalTable>('signal-table', undefined, [
  'columns',
  'rows',
  'caption',
  'rowKey',
  'searchable',
  'filterable',
  'reorderable',
  'loading',
  'emptyText',
  'filters',
  'rowClick',
  'reorder',
  'searchChange',
  'filterChange'
], [
  'rowClick',
  'reorder',
  'searchChange',
  'filterChange'
]);


export const SignalTabs: StencilVueComponent<JSX.SignalTabs> = /*@__PURE__*/ defineContainer<JSX.SignalTabs>('signal-tabs', undefined, [
  'tabs',
  'value',
  'activeKey',
  'variant',
  'orientation',
  'keepAlive',
  'lazy',
  'validationMap',
  'valueChange'
], [
  'valueChange'
]);


export const SignalTag: StencilVueComponent<JSX.SignalTag> = /*@__PURE__*/ defineContainer<JSX.SignalTag>('signal-tag', undefined, [
  'label',
  'tone',
  'size',
  'removable',
  'disabled',
  'remove'
], [
  'remove'
]);


export const SignalText: StencilVueComponent<JSX.SignalText> = /*@__PURE__*/ defineContainer<JSX.SignalText>('signal-text', undefined, [
  'truncate',
  'clampLines'
]);


export const SignalTextarea: StencilVueComponent<JSX.SignalTextarea> = /*@__PURE__*/ defineContainer<JSX.SignalTextarea>('signal-textarea', undefined, [
  'value',
  'defaultValue',
  'rows',
  'autoResize',
  'maxLength',
  'placeholder',
  'disabled',
  'validationState',
  'valueChange'
], [
  'valueChange'
]);


export const SignalToast: StencilVueComponent<JSX.SignalToast> = /*@__PURE__*/ defineContainer<JSX.SignalToast>('signal-toast', undefined, [
  'tone',
  'heading',
  'message',
  'description',
  'actionLabel',
  'dismissible',
  'open',
  'duration',
  'action',
  'dismiss'
], [
  'action',
  'dismiss'
]);


export const SignalTooltip: StencilVueComponent<JSX.SignalTooltip> = /*@__PURE__*/ defineContainer<JSX.SignalTooltip>('signal-tooltip', undefined, [
  'content',
  'variant',
  'placement',
  'delay',
  'interactive',
  'disabled'
]);


