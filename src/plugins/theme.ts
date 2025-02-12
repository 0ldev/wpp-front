import type { ThemeTypes } from './type.ts';

export const WhatsappLight: ThemeTypes = {
  name: 'WhatsappLight',
  dark: false,
  variables: {
    'border-color': '#25D366',
    'carousel-control-size': 10,
    gradient: 'linear-gradient(250.38deg, #075e54 2.39%, #128C7E 34.42%, #25D366 60.95%, #34B7F1 84.83%, #DCF8C6 104.37%)',
    gradient2: 'linear-gradient(to right, #128C7E, #25D366)',
    'card-shadow': '0px 1px 4px rgba(0, 0, 0, 0.08)',
    'medium-opacity': 0.85,
    'high-opacity': 1
  },
  colors: {
    primary: '#128C7E', // Verde característico do WhatsApp
    secondary: '#25D366', // Verde claro do botão de envio
    info: '#34B7F1', // Azul de notificações
    success: '#25D366', // Mesmo verde claro
    accent: '#DCF8C6', // Verde muito claro, usado em mensagens enviadas
    warning: '#FFCE00', // Amarelo usado em alertas
    error: '#D32F2F', // Vermelho para erros
    lightprimary: '#E1FFC7', // Verde bem claro, fundo de mensagens enviadas
    lightsecondary: '#F0F0F0', // Fundo de mensagens recebidas
    lightsuccess: '#EAFCD4',
    lighterror: '#FFDAD6',
    lightwarning: '#FFF6D0',
    darkText: '#111B21', // Cinza escuro dos textos principais
    lightText: '#8696A0', // Cinza claro para textos secundários
    darkprimary: '#075E54', // Verde escuro do cabeçalho do WhatsApp
    darksecondary: '#0d211c',
    borderLight: '#e9edef', // Cor de borda leve
    inputBorder: '#667781', // Borda de input
    containerBg: '#F0F2F5', // Fundo principal do WhatsApp Web
    surface: '#FFFFFF', // Fundo de cartões e elementos
    'on-surface-variant': '#FFFFFF',
    facebook: '#4267b2',
    twitter: '#1da1f2',
    linkedin: '#0e76a8',
    gray100: '#e9edef', // Cinza para elementos de fundo
    primary200: '#25D366',
    secondary200: '#E1FFC7'
  }
};

