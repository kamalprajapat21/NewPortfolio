// tailwind.config.js

module.exports = {
    theme: {
      extend: {
        animation: {
          wave: 'waveMotion 4s ease-in-out infinite',
        },
        keyframes: {
          waveMotion: {
            '0%': {
              transform: 'translateY(0) rotate(0deg)',
            },
            '25%': {
              transform: 'translateY(-10px) rotate(5deg)',
            },
            '50%': {
              transform: 'translateY(0) rotate(-5deg)',
            },
            '75%': {
              transform: 'translateY(10px) rotate(5deg)',
            },
            '100%': {
              transform: 'translateY(0) rotate(0deg)',
            },
          },
        },
      },
    },
    plugins: [],
  };
  