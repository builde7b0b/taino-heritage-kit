// React wrapper — usage: <Icon name="sol-petroglifo" size={32} className="text-primary" />
import { createElement } from 'react';
import { icons } from './index.mjs';
export function Icon({ name, size = 24, strokeWidth = 1.75, title, ...props }) {
  const raw = icons[name]; if (!raw) return null;
  const inner = raw.replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');
  return createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
    strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', role: title ? 'img' : 'presentation', 'aria-label': title, 'aria-hidden': title ? undefined : true,
    dangerouslySetInnerHTML: { __html: (title ? `<title>${title}</title>` : '') + inner }, ...props });
}
export default Icon;
