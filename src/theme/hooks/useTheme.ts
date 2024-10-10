import {useSettings, useSettingsActions} from "@src/store/settingsStore.ts";
import {ThemeMode} from "#types/enum.ts";
import {useEffect} from "react";

export default (() => {
    const settings = useSettings()
    const {setSettings} = useSettingsActions()
    // 初始化时检查并设置主题模式
    const initializeTheme = () => {
        const storedThemeMode = settings.themeMode;
        const body = document.body;
        if (storedThemeMode === ThemeMode.Dark) {
            setSettings({...settings, themeMode: ThemeMode.Dark});
            body.setAttribute('theme-mode', 'dark');
        } else {
            setSettings({...settings, themeMode: ThemeMode.Light});
            body.removeAttribute('theme-mode');
        }
    };
    const switchMode = () => {
        const body = document.body;
        if (body.hasAttribute('theme-mode')) {
            console.log('light')
            setSettings({...settings, themeMode: ThemeMode.Light});
            body.removeAttribute('theme-mode');
        } else {
            console.log('dark')
            setSettings({...settings, themeMode: ThemeMode.Dark});
            body.setAttribute('theme-mode', 'dark');
        }
    };
    useEffect(() => {
        initializeTheme()
        setSettings(settings)
    }, []);
    return {switchMode}
})