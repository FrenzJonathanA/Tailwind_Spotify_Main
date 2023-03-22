/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        blue:'#1d75de',
        dark:'#000000',
        light: '#ffffff',
        green: '#1db954',
        lightgray: '#efefef',
        grayish: '#919496',
        darkgreen: '#056952',
        lightgreen: '#c5f0c9',
        lighttext: '#535353',
        darkgray: '#222326',
        oceanblue: '#2d46b9',
        orange: '#f59b23',
        purple: '#af2896',
        lpurple: '#b49bc8',
        oblue: '#509bf5',
        pinkish: '#f573a0',
        neonred: '#ff4632',
        itsgreen: '#00a575',
        suplight: 'rgba(0,0,0,0)',
        vlgray: '#f8f8f8'
      },
      dropShadow: {
        'custom': '0 0 5px rgba(0, 0, 0, 0.3)',
        'custom1': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
       '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'custom': '0 0 5px rgba(0, 0, 0, 0.3)',
        'custom1': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
        none: 'none',
      },
    },
    // container:{
    //   center:true,
    //   padding:'15px',
      
    // },
  },
  plugins: [],
}
