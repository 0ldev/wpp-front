import type { SVGAttributes } from 'vue';

interface SVGProps extends Partial<SVGAttributes> {
  size?: 24 | number | string;
  strokeWidth?: number | string;
}
export interface Icon extends Partial<Omit<SVGProps, 'stroke'>> {
  size?: string | number;
  stroke?: string | number;
  title?: string;
}