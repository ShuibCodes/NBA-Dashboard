module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.js', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            serif: ['"Roboto Slab"', 'serif'],
            body: ['Roboto', 'sans-serif'],
        },
        extend: {
            spacing: {
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
                    '27': '200px',
                'inner' : '680px',
                'bar' : '450px',
                'logo' : '200px',
              },
            width :{
                'inner': '680px'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
