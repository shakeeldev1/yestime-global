# i18n Progress — English + Urdu (RESUME HERE)

Goal: add EN + Urdu i18n using **react-i18next**. Urdu = **full RTL**. English must stay
pixel-identical. Only EN + UR (no Arabic). Do NOT change any design/color/layout.

## ✅ FOUNDATION (done & verified in browser)
- `i18next` + `react-i18next` + `i18next-browser-languagedetector` installed.
- `src/i18n/index.ts` auto-loads every `src/i18n/locales/{en,ur}/<ns>.json` via `import.meta.glob`
  (filename = namespace — just add a JSON pair, no config edit). RTL sets `<html dir/lang>` on change.
  Urdu font + RTL CSS scoped to `[lang="ur"]`/`[dir="rtl"]` in `src/index.css`; font links in `index.html`.
- `src/main.tsx` imports `./i18n`. Switcher = navbar (EN/UR only), persisted in localStorage `ytg_lang`.
- Dev: `.claude/launch.json` (yestime-dev, port 5173).

## Pattern
`useTranslation("<ns>")` → `t("key")`; move module-level text arrays inside the component.
Never touch className/colors/layout/icons/routes/keys. English JSON = verbatim original text.
Glossary at bottom. Reference file: `src/components/common/Footer.tsx`.

## ✅ DONE namespaces (components fully converted, en+ur JSON complete, build clean)
- common, home, about, banks, business, contact, investors, event, vision, faqs, global,
  ourPrograms, shopSaving, howItWorks, customer, legal, programs

`npm run build` → EXIT 0 (full production build succeeds) as of last full check; `legal` verified
via `npx tsc --noEmit` only (clean, 0 errors) — not yet re-verified with a full build/browser pass.

### `legal` namespace notes (2026-09-01)
- `legalData.ts` now holds ONLY stable ids (`LegalDocumentId = 'terms'|'privacy'|'disclaimer'`) and
  the `LegalSection` type — no text. All display text (doc label/title/highlight/description/sections,
  nav labels, documentContent note, contactCTA copy) lives in `en|ur/legal.json` under
  `documents.<id>`, `nav.<id>`, `documentContent`, `contactCTA.<id>` (+ shared `contactCTA.badge`/`buttonText`).
- Components take a `documentId` prop instead of spread props; `LegalDocumentContent` reads
  `documents.<id>.sections` via `t(key, { returnObjects: true })`.
- Pages `PrivacyPolicy`/`TermsConditions`/`Disclaimer` now pass `documentId="privacy"|"terms"|"disclaimer"`
  to all four components instead of spreading `legalData.ts` objects — this is the preserved
  doc-selection mechanism.
- English text in `en/legal.json` copied verbatim from the pre-existing `legalData.ts` + the four
  component files (title/highlight/description overrides per page, badge, button text) — not
  reconstructed.
- Verified en/ur key parity via a small Node script (57 keys each side, no diff).

## ⛔ PENDING
None — all namespaces done. Only the FOLLOW-UP caveats below remain.

### `programs` namespace notes (2026-09-01)
- Added `programDataUr: ProgramData[]` to `src/data/programData.ts` (8 programs, same slug/image/
  secondaryImage/gallery URLs/accent/accentSoft hex/icon enums/heroBadge/stat `.value`s as English;
  only human-readable text translated). `getProgramBySlug(slug, language?)` now picks `programDataUr`
  when `language` starts with `'ur'`, else `programData`; both `ProgramDetailPage.tsx` and
  `CarPlanPage.tsx` call it with `i18n.language`.
- Created `src/i18n/locales/ur/programs.json` (63 keys, parity-checked against `en/programs.json`
  with a Node script — 0 diff). Wired `useTranslation('programs')` + `t()` into all hardcoded JSX
  strings in both pages (badges, headings, plan-card labels, CTAs, alt text).
- Caveat kept intentionally: car-saving `planCards[].daily/monthly/prize` are byte-identical to
  English in the Urdu array — the pages do `.replace('Daily '/'Monthly '/'Prize ', '')` to strip the
  English prefix before display (the static label is shown separately via `planCard.daily/monthly/prize`
  in the JSON), so translating that prefix would break the strip and show a redundant duplicate label.
  Only the always-visible fields (`planType`, `badge`, `installmentLabel`, `description`, `details[]`)
  were translated; PKR currency values kept as-is per the numbers/percentages rule.

## ✅ PROJECT COMPLETE (2026-09-01)
All 17 namespaces done. `npm run build` → EXIT 0. Browser-verified EN+UR (incl. RTL/design) on:
Home, Our Programs (category filter works in UR), Privacy Policy (legal), Program Detail
(shop-saving — dual EN/UR dataset switches correctly). English stays pixel-identical.

## ✅ RESOLVED CAVEATS
- **FAQ English content restored** — the first interrupted run had stripped the Q&A out of
  `faqData.ts`; original English recovered from `git show HEAD:src/components/faqs/faqData.ts` and
  written verbatim into `en/faqs.json` (17 items + 5 category labels/descriptions); `ur/faqs.json`
  re-translated to match. Verified: 17/17 item keys + 5/5 category keys parity, both parse.
  (The `needsConfirmation` flags on 5 items in `faqData.ts` are the ORIGINAL author's flags for
  business fact-checking — unrelated to translation; leave for business review.)
- **Contact inquiry labels** — git-diff checked: `en/contact.json` inquiryTypes labels match the
  original `contactData.ts` strings verbatim. No action needed.

## Dead code (leave as-is)
ContactChannels + contactData.globalMarkets, EventCard, GlobalPartnershipCTA, most
OurPrograms/*.tsx (PrioritiesAim, ProgramsCTA, ProgramsClosing, ProgramsGrid, ProgramsIntro,
ReferralEarn, ReferralSystem, RewardsDraws, TokenLuckyDraw, WhyChooseUs),
home/{HomeHero,HomeCTA,HomeCommitment,HomePrograms,HomeVisionMission}.

## Execution note
One Sonnet subagent per namespace, idempotent "finish+verify", in waves of ~3 (avoids the
Anthropic session usage rate-limit that killed an earlier 15-Opus fan-out). Verify centrally
after each wave: `npx tsc -b` / `npm run build` + en/ur key parity + browser spot-check.

## Urdu glossary
Program→پروگرام, Savings→بچت, Plan→پلان, Car→کار, Vehicle→گاڑی, Property→پراپرٹی, Shop→دکان,
Wholesale→ہول سیل, Investor→سرمایہ کار, Bank→بینک, Financial→مالیاتی, Business Partner→کاروباری شراکت دار,
Dealer→ڈیلر, Showroom→شوروم, Global→عالمی, Member→ممبر, Customer→کسٹمر, Support→معاونت,
Contact→رابطہ, Vision→وژن, Mission→مشن, Team→ٹیم, Event→تقریب, Referral→ریفرل, Reward→انعامات,
"How It Works"→یہ کیسے کام کرتا ہے, "Learn More"→مزید جانیں, "Get Started"→آغاز کریں,
"Terms & Conditions"→شرائط و ضوابط, "Privacy Policy"→پرائیویسی پالیسی, FAQ→عمومی سوالات.
Keep brand "Yes Time Global"/"YES TIME GLOBAL PRIVATE LIMITED" in Latin. Keep digits as-is. Urdu sentence-end = ۔
