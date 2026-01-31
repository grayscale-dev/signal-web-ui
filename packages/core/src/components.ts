export interface Components {
  SignalButton: Record<string, never>;
  SignalInput: Record<string, never>;
  SignalCombobox: Record<string, never>;
  SignalDataTable: Record<string, never>;
  SignalFeatureTable: Record<string, never>;
  SignalFileUpload: Record<string, never>;
  SignalBadge: Record<string, never>;
  SignalTag: Record<string, never>;
  SignalProgress: Record<string, never>;
  SignalSnackbar: Record<string, never>;
  SignalToast: Record<string, never>;
  SignalCheckbox: Record<string, never>;
  SignalSwitch: Record<string, never>;
  SignalSelect: Record<string, never>;
  SignalSlider: Record<string, never>;
  SignalRadioGroup: Record<string, never>;
  SignalTextarea: Record<string, never>;
  SignalHeading: Record<string, never>;
  SignalListItem: Record<string, never>;
  SignalSkeleton: Record<string, never>;
  SignalText: Record<string, never>;
  SignalTooltip: Record<string, never>;
  SignalModal: Record<string, never>;
  SignalTable: Record<string, never>;
}

export interface JSX {
  IntrinsicElements: {
    "signal-button": Record<string, unknown>;
    "signal-input": Record<string, unknown>;
    "signal-combobox": Record<string, unknown>;
    "signal-data-table": Record<string, unknown>;
    "signal-feature-table": Record<string, unknown>;
    "signal-file-upload": Record<string, unknown>;
    "signal-badge": Record<string, unknown>;
    "signal-tag": Record<string, unknown>;
    "signal-progress": Record<string, unknown>;
    "signal-snackbar": Record<string, unknown>;
    "signal-toast": Record<string, unknown>;
    "signal-checkbox": Record<string, unknown>;
    "signal-switch": Record<string, unknown>;
    "signal-select": Record<string, unknown>;
    "signal-slider": Record<string, unknown>;
    "signal-radio-group": Record<string, unknown>;
    "signal-textarea": Record<string, unknown>;
    "signal-heading": Record<string, unknown>;
    "signal-list-item": Record<string, unknown>;
    "signal-skeleton": Record<string, unknown>;
    "signal-text": Record<string, unknown>;
    "signal-tooltip": Record<string, unknown>;
    "signal-modal": Record<string, unknown>;
    "signal-table": Record<string, unknown>;
  };
}

export interface SignalComboboxCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLElement;
}

export interface SignalInputCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLElement;
}

export interface SignalDataTableCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLElement;
}

export interface SignalFeatureTableCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLElement;
}

export interface SignalListItemCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLElement;
}

export interface SignalTagCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLElement;
}

export interface SignalSnackbarCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLElement;
}

export interface SignalToastCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLElement;
}

export interface SignalCheckboxCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLElement;
}

export interface SignalSwitchCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLElement;
}

export interface SignalSelectCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLElement;
}

export interface SignalSliderCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLElement;
}

export interface SignalRadioGroupCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLElement;
}

export interface SignalTextareaCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLElement;
}
export interface SignalFileUploadCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLElement;
}

export interface SignalModalCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLElement;
}

export interface SignalTableCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLElement;
}
