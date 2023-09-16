
const colors = {
    darkNavyBlue: "#0A1F30",
    coalGrey: "#161616",
    midnightBlue: "#0E242F",
    tortoiseGreen: "#81D89A",
    snowGrey: "#EDEBE8"
}

const themes = {
    dark: {
        primary: colors.tortoiseGreen,
        background: colors.darkNavyBlue,
        black: colors.coalGrey,
        complementary: colors.midnightBlue,
        text: colors.snowGrey,
        modal: {
            background: colors.tortoiseGreen,
            text: colors.midnightBlue,
            buttonBackground: colors.midnightBlue,
            buttonText: colors.snowGrey,
        },
        headingFont: "Space Grotesk, Helvetica, Arial, sans-serif",
        bodyFont: "Inter, Helvetica, Arial, sans-serif",
    }
}

export default themes
