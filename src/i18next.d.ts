// import the original type declarations
import "i18next";
// import all namespaces (for the default language, only)
import card1 from "locales/en/card1.json";
import card2 from "locales/en/card2.json";
import card3 from "locales/en/card3.json";
import card4 from "locales/en/card4.json";
import translations from "locales/en/translations.json";
import componentsHeader from "locales/en/componentsHeader.json";
import componentsTimeline from "locales/en/componentsTimeline.json";

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: "translations";
    // custom resources type
    resources: {
      card1: typeof card1;
      card2: typeof card2;
      card3: typeof card3;
      card4: typeof card4;
      translations: typeof translations;
      componentsHeader: typeof componentsHeader;
      componentsTimeline: typeof componentsTimeline;
    };
    // other
  }
}