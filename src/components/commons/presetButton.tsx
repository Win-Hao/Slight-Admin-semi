import {Button, Card, Popover} from "@douyinfe/semi-ui";
import {Dot, Platte} from "@icon-park/react";
import {colorPrimaries} from "@src/theme/semi/theme.ts";
import {useSettings, useSettingsActions} from "@src/store/settingsStore.ts";
import {ThemeColorPresets} from "#types/enum.ts";

const PresetButton = () => {
    const settings = useSettings()
    const {themeMode, themeColorPresets} = settings
    const {setSettings} = useSettingsActions()
    const changePresetHandler = (preset: ThemeColorPresets) => {
        setSettings({...settings, themeColorPresets: preset})
    }
    const themeArray = Object.entries(colorPrimaries[themeMode])
    const renderContent = () => {
        return (
            <div className='!p-2'>
                <div className='grid grid-cols-3 gap-x-4 gap-y-3'>
                    {themeArray.map(([preset, color]) => (
                        <div key={preset} onClick={() => changePresetHandler(preset as ThemeColorPresets)}>
                            <Card
                                style={{
                                    backgroundColor: themeColorPresets === preset ? `${color['--semi-color-primary']}14` : '',
                                    width: '56px',
                                    height: '56px',
                                }}
                                className='flex items-center justify-center cursor-pointer'
                            >
                                <Dot theme="outline" size="24" fill={color['--semi-color-primary']}/>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        );
    };
    return (
        <Popover content={renderContent} trigger="click">
            <Button theme={'borderless'} className='mr-3'
                    icon={<Platte theme="outline" size="20" fill="var(--semi-color-primary)"/>}>
            </Button>
        </Popover>
    );
};

export default PresetButton;