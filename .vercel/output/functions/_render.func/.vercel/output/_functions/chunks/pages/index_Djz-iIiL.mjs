import { e as createComponent, r as renderTemplate, g as addAttribute, i as renderHead, j as renderSlot, h as createAstro, k as renderComponent } from '../astro_YwbcgbOs.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-is-root-theme="true" data-accent-color="orange" data-gray-color="mauve" data-has-background="true" data-panel-background="translucent" data-radius="large" data-scaling="95%" class="radix-themes dark-theme" style="color-scheme: dark;"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class=" w-[100dvw] max-w-[100dvw] h-100dvh max-h-[100dvh] relative overflow-x-hidden overflow-y-hidden scroll-m-0 scroll-smooth scroll-p-0 p-4 m-0"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/info/Development/Contract/golden-lion/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Under Construction" })}`;
}, "C:/Users/info/Development/Contract/golden-lion/src/pages/index.astro", void 0);

const $$file = "C:/Users/info/Development/Contract/golden-lion/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
