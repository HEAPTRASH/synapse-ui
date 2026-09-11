/// <reference types="vite/client" />
/// <reference types="unocss" />

declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "virtual:uno.css";

