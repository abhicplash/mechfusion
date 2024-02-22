/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-Services_one": "url('/src/Assets/04.jpg')",
        "home-Services_two": "url('/src/Assets/08.jpg')",
        "home-Services_three": "url('/src/Assets/09.jpg')", 
        "home-Services_four": "url('/src/Assets/05.jpg')"
        // "footer-texture": "url('/img/footer-texture.png')"
      }
    }
  },
  plugins: []
};
