import { e as createComponent, r as renderTemplate, g as addAttribute, i as renderHead, j as renderSlot, h as createAstro, m as maybeRenderHead, k as renderComponent } from '../astro_YwbcgbOs.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-is-root-theme="true" data-accent-color="orange" data-gray-color="mauve" data-has-background="true" data-panel-background="translucent" data-radius="large" data-scaling="95%" class="radix-themes dark-theme" style="color-scheme: dark;"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class=" w-[100dvw] max-w-[100dvw] h-100dvh max-h-[100dvh] relative overflow-x-hidden overflow-y-hidden scroll-m-0 scroll-smooth scroll-p-0 p-4 m-0"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/info/Development/Contract/golden-lion/src/layouts/Layout.astro", void 0);

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="prodkt-hero-content-container border p-2 mx-auto my-auto bg-black/95 backdrop-blur-lg" data-astro-cid-bxy4oyal> <div class="pb-2 flex flex-row align-center items-stretch content-stretch w-full" data-astro-cid-bxy4oyal> <div class="flex flex-row gap-2 ms-0 me-auto w-full p-1" data-astro-cid-bxy4oyal> <div class="rounded-full border bg-transparent w-4 h-4" data-astro-cid-bxy4oyal></div> <div class="rounded-full border bg-transparent w-4 h-4" data-astro-cid-bxy4oyal></div> <div class="rounded-full border bg-transparent w-4 h-4" data-astro-cid-bxy4oyal></div> </div> <div class="flex flex-row gap-2" data-astro-cid-bxy4oyal><p class="" data-astro-cid-bxy4oyal>middle child</p><p class="" data-astro-cid-bxy4oyal>middle child</p></div> <div class="me-0 ms-auto w-full" data-astro-cid-bxy4oyal>test</div> </div> <div class="w-full h-full flex flex-row justify-between gap-2" data-astro-cid-bxy4oyal> <div class="prodkt-hero-content-wrapper border mx-auto my-auto relative overflow-hidden bg-[var(--gray-a2)]" data-astro-cid-bxy4oyal> <div class="prodkt-canvas-mask" data-astro-cid-bxy4oyal></div> ${renderComponent($$result, "CanvasBackground", null, { "client:only": "react", "className": "text-[var(--ghost-a2)] absolute mx-auto my-auto w-full h-auto", "client:component-hydration": "only", "data-astro-cid-bxy4oyal": true, "client:component-path": "@/assets/patterns/canvas", "client:component-export": "default" })} <div class="grid grid-cols-2 w-full h-full" data-astro-cid-bxy4oyal> <div class="flex flex-row items-start justify-start" data-astro-cid-bxy4oyal> <h1 data-astro-cid-bxy4oyal>Bryan Funk</h1></div> <div class="flex flex-row items-start justify-start" data-astro-cid-bxy4oyal>
test
</div> </div> </div> <div data-astro-cid-bxy4oyal>test</div> </div> </div> <div class="prodkt-hero-video-mask max-h-dvh" data-astro-cid-bxy4oyal> <video style="object-fit: cover" class="force-autoplay w-full h-full" id="cta-bg-video" width="100%" height="100%" playsinline="" autoplay="" muted="" loop="" disablepictureinpicture="" preload="metadata" draggable="true" data-astro-cid-bxy4oyal> <source src="https://cdn.winden.co/website/global/cta-bg.mov" type="video/mp4; codecs=&quot;hvc1&quot;" data-astro-cid-bxy4oyal> <source src="https://cdn.winden.co/website/global/cta-bg.webm" type="video/webm" data-astro-cid-bxy4oyal>
Sorry, your browser doesn't support embedded videos.
</video> </div> `;
}, "C:/Users/info/Development/Contract/golden-lion/src/components/sections/hero/index.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DashboardLayout", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/layout/dashboard/layout", "client:component-export": "DashboardLayout" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex min-h-screen w-full max-w-[100dvw] flex-col"> ${renderComponent($$result3, "Aside", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/layout/dashboard/aside", "client:component-export": "Aside" })} ${renderComponent($$result3, "Header", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/layout/dashboard/header", "client:component-export": "Header" })} ${renderComponent($$result3, "Main", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/layout/dashboard/main", "client:component-export": "Main" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Hero", $$Index$1, {})} ` })} </div> ` })} ` })}`;
}, "C:/Users/info/Development/Contract/golden-lion/src/pages/index.astro", void 0);

const $$file = "C:/Users/info/Development/Contract/golden-lion/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
