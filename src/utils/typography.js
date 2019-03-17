import Typography from 'typography'
import fairyGateTheme from 'typography-theme-fairy-gates'

const typography = new Typography({
        googleFonts: [
                {
                        name: 'Work Sans',
                        styles: ['600'],
                },
                {
                        name: 'Merriweather Sans',
                        styles: ['400', '700'],
                },
                {
                        name: 'Oswald',
                        styles: ['400', '500'],
                },
        ],
        headerFontFamily: ['Work Sans', 'sans-serif'],
        bodyFontFamily: ['Merriweather Sans', 'sans-serif'],
        headerColor: 'hsla(0,0%,0%,0.9)',
        bodyColor: 'hsla(0,0%,0%,0.8)',
        headerWeight: '600',
        bodyWeight: 400,
        boldWeight: 700,
})

export default typography
