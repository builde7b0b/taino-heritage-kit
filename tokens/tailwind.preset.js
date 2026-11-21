/** Tailwind preset — usage: presets: [require('./tokens/tailwind.preset.js')] */
module.exports = {
  theme: {
    extend: {
      colors: {
        'bija': '#B5361F',
        'barro': '#B8693D',
        'oro-casabe': '#D9A441',
        'ceiba': '#3F6B3A',
        'rio': '#2F6F7E',
        'piedra': '#8A8378',
        'arena': '#EAD8B8',
        'yuca': '#F7F0E1',
        'jagua': '#1C2430',
        'primary': '#B5361F',
        'secondary': '#3F6B3A',
        'accent': '#D9A441',
        'surface': '#F7F0E1',
        'surface-alt': '#EAD8B8',
        'text': '#1C2430',
        'success': '#3F6B3A',
        'info': '#2F6F7E',
        'on-primary': '#FFFFFF',
        'on-secondary': '#FFFFFF',
        'on-accent': '#1C2430',
      },
      fontFamily: {
        display: ["'Young Serif'", 'Georgia'],
        body: ["'Work Sans'", 'system-ui', 'sans-serif'],
      },
      borderRadius: { kit: '20px' },
    },
  },
};
