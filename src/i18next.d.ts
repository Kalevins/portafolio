// import the original type declarations
import "i18next";
// import all namespaces (for the default language, only)
import translations from "locales/en/translations.json";
import componentsHeader from "locales/en/componentsHeader.json";
import componentsTimeline from "locales/en/componentsTimeline.json";
import pagesApp from "locales/en/pagesApp.json";

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: "translations";
    // custom resources type
    resources: {
      translations: typeof translations;
      componentsHeader: typeof componentsHeader;
      componentsTimeline: typeof componentsTimeline;
      pagesApp: typeof pagesApp;
    };
    // other
  }
}