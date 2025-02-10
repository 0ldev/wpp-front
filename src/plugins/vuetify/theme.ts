import type { ThemeTypes } from './type.ts';

export const WhatsappLight: ThemeTypes = {
  name: "WhatsappLight",
  dark: false,
  variables: {},
  colors: {
    primary: "#0FA626",         // Verde principal
    secondary: "#36D941",       // Verde secundário mais vibrante
    info: "#82F27E",            // Verde claro para realces
    success: "#0FA626",         // Mesma cor do primário para sucesso
    accent: "#82F27E",          // Destaques com o tom verde claro
    warning: "#FFAB00",         // Mantendo o tom de aviso
    error: "#FF5252",           // Mantendo a cor de erro
    lightprimary: "#82F27E",    // Variante mais clara do verde principal
    lightsecondary: "#D9D4CC",  // Tom neutro extraído da imagem
    lightsuccess: "#82F27E",    // Variante clara para sucesso
    lighterror: "#FF8A80",      // Variante clara para erros
    lightwarning: "#FFE57F",    // Variante clara para avisos
    darkprimary: "#0D0D0D",     // Preto profundo da imagem para contrastes escuros
    darksecondary: "#0FA626",   // Verde principal mais escuro
    darkText: "#0D0D0D",        // Preto para textos escuros
    lightText: "#FFFFFF",       // Branco para textos claros
    borderLight: "#D9D4CC",     // Cor neutra extraída da imagem
    inputBorder: "#5a5a5a",     // Mantendo o tom escuro para bordas
    containerBg: "#D9D4CC",     // Usando o tom neutro como fundo de container
    surface: "#FFFFFF",         // Fundo de elementos que se destacam da tela
    background: "#F4F4F2",      // Mantendo o fundo claro padrão
    "on-surface-variant": "#F0F0F0", // Variante para elementos sobre a superfície
    facebook: "#3b5998",        // Cor do Facebook (caso seja necessário)
    twitter: "#1DA1F2",         // Cor do Twitter (caso seja necessário)
    linkedin: "#0077B5",        // Cor do LinkedIn (caso seja necessário)
    gray100: "#F5F5F5",         // Cinza claro para elementos secundários
    primary200: "#36D941",      // Variante intermediária do verde principal
    secondary200: "#82F27E"     // Variante intermediária do verde secundário
  }
};
