// icons
import {
  QuestionOutlined,
  DashboardOutlined,
  ChromeOutlined,
  LoginOutlined,
  ProfileOutlined,
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  CrownOutlined
} from '@ant-design/icons-vue';
import { CloudComputingIcon } from 'vue-tabler-icons';

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
  { header: 'Home' },
  {
    title: 'Dashboard',
    icon: DashboardOutlined,
    to: '/dashboard',
    disabled: true
  },
  { header: 'Whatsapp' },
  {
    title: 'Session',
    icon: CloudComputingIcon,
    to: '/session'
  },
  {
    title: 'Groups',
    icon: ProfileOutlined,
    to: '/groups'
  },
  {
    title: 'Permissions',
    icon: ProfileOutlined,
    to: '/permissions'
  },
  {
    title: 'Commands',
    icon: ProfileOutlined,
    to: '/commands'
  },
  {
    title: 'Censure',
    icon: ProfileOutlined,
    to: '/censure'
  },
  {
    title: 'Teste',
    icon: ProfileOutlined,
    to: '/teste'
  },
];

export default sidebarItem;
