import React from "react";
import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import en from './assets/en-lang.json';
import cn from './assets/cn-lang.json';

const resources = {
  en: {
    translation: en,
  },
  cn: {
    translation: cn,
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',             //預設語言
  fallbackLng: 'cn',     //如果當前切換的語言沒有對應的翻譯則使用這個語言，
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;