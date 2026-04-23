// If you import SVGs as React components, uncomment:
// declare module '*.svg' {
//   import * as React from 'react';
//   export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
//   const src: string;
//   export default src;
// }
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.webp";
declare module "*.svg";
declare module "*.mp3";

// Allow imports that use the '~' alias (e.g. '~/components/foo')
declare module "~/*";
declare module "~";
