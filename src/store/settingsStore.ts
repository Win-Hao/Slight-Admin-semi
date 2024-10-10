import {ThemeColorPresets, ThemeMode} from "#types/enum.ts";
import {createJSONStorage, persist} from 'zustand/middleware'
import {create} from "zustand";
import {colorPrimaries} from "@src/theme/semi/theme.ts";

type SettingsType = {
    themeColorPresets: ThemeColorPresets;
    themeMode: ThemeMode
    isCollapsed: boolean
}
type SettingsStore = {
    settings: SettingsType
    actions: {
        setSettings: (settings: SettingsType) => void
        clearSettings: () => void
    }
}
export const useSettingsStore = create<SettingsStore>()(
    persist(
        (set) => ({
            settings: {themeColorPresets: ThemeColorPresets.Default, themeMode: ThemeMode.Light, isCollapsed: false},
            actions: {
                setSettings: (settings: SettingsType) => {
                    set({settings})
                    Object.entries(colorPrimaries[settings.themeMode][settings.themeColorPresets]).forEach(([key, value]) => {
                        document.body.style.setProperty(key, value)
                    })
                },
                clearSettings: () => set(() => ({settings: {} as SettingsType})),
            }
        }),
        {
            name: 'settings-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
            partialize: (state) => ({settings: state.settings}),
        },
    ),
)
export const useSettings = () => useSettingsStore((state) => state.settings)
export const useSettingsActions = () => useSettingsStore((state) => state.actions)