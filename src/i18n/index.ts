import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

/**
 * Supported languages. Only English and Urdu are enabled.
 * Urdu ("ur") is a right-to-left language.
 */
export const SUPPORTED_LANGUAGES = ["en", "ur"] as const;
export type AppLanguage = (typeof SUPPORTED_LANGUAGES)[number];

/** Languages that should render the layout right-to-left. */
export const RTL_LANGUAGES: AppLanguage[] = ["ur"];

/**
 * Auto-load every namespace JSON file placed under
 *   src/i18n/locales/en/<namespace>.json
 *   src/i18n/locales/ur/<namespace>.json
 * The file name (without extension) becomes the i18next namespace.
 * Just drop a new file in and it is picked up — no edits needed here.
 */
const enModules = import.meta.glob("./locales/en/*.json", { eager: true });
const urModules = import.meta.glob("./locales/ur/*.json", { eager: true });

type JsonModule = { default: Record<string, unknown> };

const buildResources = (modules: Record<string, unknown>) => {
  const bundle: Record<string, Record<string, unknown>> = {};
  for (const [filePath, mod] of Object.entries(modules)) {
    const namespace = filePath
      .split("/")
      .pop()!
      .replace(/\.json$/, "");
    bundle[namespace] = (mod as JsonModule).default;
  }
  return bundle;
};

const enResources = buildResources(enModules);
const urResources = buildResources(urModules);

export const NAMESPACES = Object.keys(enResources);

/** Keep the document direction / lang attribute in sync with the language. */
export const applyDocumentDirection = (language: string) => {
  const lng = (SUPPORTED_LANGUAGES as readonly string[]).includes(language)
    ? language
    : "en";
  const dir = RTL_LANGUAGES.includes(lng as AppLanguage) ? "rtl" : "ltr";
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lng);
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: enResources,
      ur: urResources,
    },
    ns: NAMESPACES,
    defaultNS: "common",
    fallbackLng: "en",
    supportedLngs: SUPPORTED_LANGUAGES as unknown as string[],
    nonExplicitSupportedLngs: true,
    load: "languageOnly",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      lookupLocalStorage: "ytg_lang",
      caches: ["localStorage"],
    },
    react: {
      useSuspense: false,
    },
  });

// Apply direction on first load and whenever the language changes.
applyDocumentDirection(i18n.resolvedLanguage ?? "en");
i18n.on("languageChanged", applyDocumentDirection);

export default i18n;
