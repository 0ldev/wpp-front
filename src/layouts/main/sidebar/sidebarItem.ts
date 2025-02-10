import {
  IconCircle,
  IconWindmill,
  IconTypography,
  IconShadow,
  IconPalette,
  IconKey,
  IconBug,
  IconDashboard,
  IconBrandChrome,
  IconHelp,
  IconTable,
  IconQrcode
} from '@tabler/icons-vue';

export interface menu {
  header?: string;
  title?: string;
  icon?: object;
  to?: string;
  divider?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
/*  { header: 'Dashboard' },*/
  {
    title: 'Default',
    icon: IconDashboard,
    to: '/dashboard/default'
  },
  {
    title: 'Table',
    icon: IconTable,
    to: '/table'
  },
  {
    title: 'QRCode',
    icon: IconQrcode,
    to: '/qrcode'
  }
];

export default sidebarItem;
