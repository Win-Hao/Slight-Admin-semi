export const createTheme = (...color: string[]): Record<string, string> => {
    return {
        '--semi-color-primary': `${color[0]}`,
        '--semi-color-primary-hover': `${color[1]}`,
        '--semi-color-primary-active': `${color[2]}`,
        '--semi-color-primary-disabled': `${color[3]}`,
        '--semi-color-primary-light-default': `${color[4]}`,
        '--semi-color-primary-light-hover': `${color[5]}`,
        '--semi-color-primary-light-active': `${color[6]}`,
        '--semi-color-link': `${color[0]}`,
        '--semi-color-link-hover': `${color[1]}`,
        '--semi-color-link-active': `${color[2]}`,
        '--semi-color-link-visited': `${color[0]}`
    }
};