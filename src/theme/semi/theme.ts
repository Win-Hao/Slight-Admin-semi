import {ThemeColorPresets} from "#types/enum.ts";
import {createTheme} from "@src/utils/index.ts";


const defaultLightColor = ['#6366f1', '#4f46e5', '#4338ca', '#818cf8', '#c7d2fe80', '#a5b4fc', '#818cf8']
const cyanLightColor = ['#06b6d4', '#0891b2', '#0e7490', '#22d3ee', '#a5f3fc80', '#67e8f9', '#22d3ee']
const purpleLightColor = ['#8b5cf6', '#9333ea', '#7e22ce', '#c084fc', '#e9d5ff80', '#d8b4fe', '#c084fc']
const blueLightColor = ['#3b82f6', '#2563eb', '#1d4ed8', '#60a5fa', '#bfdbfe80', '#93c5fd', '#60a5fa']
const orangeLightColor = ['#f97316', '#ea580c', '#c2410c', '#fb923c', '#fed7aa80', '#fdba74', '#fb923c']
const redLightColor = ['#f43f5e', '#e11d48', '#be123c', '#fb7185', '#fecdd380', '#fda4af', '#fb7185']

const defaultDarkColor = ['#6366f1', '#818cf8', '#a5b4fc', '#4f46e5', '#e0e7ff80', '#c7d2fe', '#a5b4fc']
const cyanDarkColor = ['#06b6d4', '#22d3ee', '#67e8f9', '#0891b2', '#cffafe80', '#a5f3fc', '#67e8f9']
const purpleDarkColor = ['#a855f7', '#c084fc', '#d8b4fe', '#9333ea', '#f3e8ff80', '#e9d5ff', '#d8b4fe']
const blueDarkColor = ['#3b82f6', '#60a5fa', '#93c5fd', '#2563eb', '#dbeafe80', '#bfdbfe', '#93c5fd']
const orangeDarkColor = ['#f97316', '#fb923c', '#fdba74', '#ea580c', '#ffedd580', '#fed7aa', '#fdba74']
const redDarkColor = ['#f43f5e', '#fb7185', '#fda4af', '#e11d48', '#ffe4e680', '#fecdd3', '#fda4af']

const defaultTheme = createTheme(...defaultLightColor)
const cyanTheme = createTheme(...cyanLightColor)
const purpleTheme = createTheme(...purpleLightColor)
const blueTheme = createTheme(...blueLightColor)
const orangeTheme = createTheme(...orangeLightColor)
const redTheme = createTheme(...redLightColor)

const defaultDarkTheme = createTheme(...defaultDarkColor)
const cyanDarkTheme = createTheme(...cyanDarkColor)
const purpleDarkTheme = createTheme(...purpleDarkColor)
const blueDarkTheme = createTheme(...blueDarkColor)
const orangeDarkTheme = createTheme(...orangeDarkColor)
const redDarkTheme = createTheme(...redDarkColor)


type Theme = {
    [K in ThemeColorPresets]: Record<string, string>;
};
const colorPrimaries: { light: Theme, dark: Theme } = {
    light: {
        default: defaultTheme,
        cyan: cyanTheme,
        purple: purpleTheme,
        blue: blueTheme,
        orange: orangeTheme,
        red: redTheme,
    },
    dark: {
        default: defaultDarkTheme,
        cyan: cyanDarkTheme,
        purple: purpleDarkTheme,
        blue: blueDarkTheme,
        orange: orangeDarkTheme,
        red: redDarkTheme,
    }
}
export {colorPrimaries}
