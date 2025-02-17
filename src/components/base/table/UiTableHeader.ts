export interface UiTableHeader {
  title: string;
  key: string;
  sortable?: boolean;
  align?: 'start' | 'center' | 'end';
  width?: number | string;
  type?: 'string' | 'number';
  icon?: string;
}
