module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/shanaiardor/ebe05119ac8b4a24a49a55bf89d7726f?v=a8eb2dabe1954d159bd30c53f0c84c58"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/shanaiardor/ed340efa337b4e23b80ef55910114f9e?v=f267e4e9de9046a4b4e511052b931203"
"
            }
        }
    ],
}
