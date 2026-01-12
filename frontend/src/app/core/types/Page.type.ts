import {Signal} from '@angular/core';

export type PageType = {
  label: string;
  icon: string;
  url?: string;
  click?: () => void;
  disabled?: boolean;
  hidden?: Signal<boolean>;
};

