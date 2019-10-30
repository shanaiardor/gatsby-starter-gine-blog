module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/shanaiardor/fe416b0e114b4132896e4968fc2eb3ed?v=0e6928554a64444787e42c29d122f44d"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/shanaiardor/57e0aefe1eb24ff5b283770735909c6e?v=10e1e3e4af9149aab5894162f18d59e4"
            }
        }
    ],
}
