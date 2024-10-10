import {Button} from "@douyinfe/semi-ui";
import {useSettings} from "@src/store/settingsStore.ts";
import useTheme from "@src/theme/hooks/useTheme.ts";
import {ThemeMode} from "#types/enum.ts";
import {IconMoon, IconSun} from "@douyinfe/semi-icons";

const ThemeButton = () => {
    const settings = useSettings()
    const {switchMode} = useTheme()
    const isDark = settings.themeMode === ThemeMode.Dark
    const themeIcon = () => {
        if (isDark) {
            return <IconMoon size={'large'} className='text-[#94a3b8]'/>
        } else {
            return <IconSun size={'large'} className='text-[#eab308]'/>
        }
    }
    const themeChangeHandler = () => {
        switchMode()
    }
    return (
        <Button
            theme="borderless"
            icon={themeIcon()}
            onClick={themeChangeHandler}
            style={{
                color: 'var(--semi-color-text-2)',
                marginRight: '12px',
            }}
        />
    );
};

export default ThemeButton;