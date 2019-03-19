module.exports = {
        plugins: [
                {
                        resolve: `gatsby-plugin-typography`,
                        options: {
                                pathToConfigModule: `${__dirname}/src/utils/typography`,
                        },
                },
                `gatsby-plugin-styled-components`,
                `gatsby-transformer-sharp`,
                `gatsby-plugin-sharp`,
                `typeface-oswald`,
                {
                        resolve: `gatsby-source-filesystem`,
                        options: {
                                path: `${__dirname}/src/data/images`,
                        },
                },
                /* {
                        resolve: `gatsby-plugin-prefetch-google-fonts`,
                        options: {
                                fonts: [
                                        {
                                                family: `Oswald`,
                                                subsets: [`latin`],
                                                variants: [`400`, `500`],
                                        },
                                        {
                                                family: `Rosario`,
                                                variants: [`700`],
                                        },
                                        {
                                                family: `Crimson Text`,
                                                variants: [`400`, `400i`, `600`],
                                        },
                                        {
                                                family: `Merriweather Sans`,
                                                variants: [`400`, `700`],
                                        },
                                ],
                        },
                }, */
        ],
}
