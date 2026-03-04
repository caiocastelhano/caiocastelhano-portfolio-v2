import type { Locale, Dictionary } from "./types";
import { pt } from "./pt";
import { en } from "./en";

export function getDictionary(locale: Locale): Dictionary {
  return locale === "en" ? en : pt;
}