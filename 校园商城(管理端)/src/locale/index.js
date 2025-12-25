import { createI18n } from "vue-i18n";
import en from './package/en'
import zhCn from './package/zhCn'
import ja from './package/ja'

const i18n = createI18n({
    locale: 'zhCn', // set locale
    fallbackLocale: 'en',
    legacy: false,
    globalInjection: true,
    messages: { en, zhCn, ja }, // set locale messages
})

export default i18n