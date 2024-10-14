import {Button, Nav} from "@douyinfe/semi-ui";
import ThemeButton from "@src/components/commons/themeButton.tsx";
import PresetButton from "@src/components/commons/presetButton.tsx";
import SideBarSheet from "@src/pages/(dashboard)/-components/SideBarSheet.tsx";
import CustomBreadcrumb from "@src/pages/(dashboard)/-components/CustomBreadcrumb.tsx";
import {Github} from "@icon-park/react";
import AvatarDropdown from "@src/pages/(dashboard)/-components/AvatarDropdown.tsx";

const Navbar = () => {
    return (
        <Nav
            mode="horizontal"
            header={
                <>
                    <div className='md:hidden block'>
                        <SideBarSheet/>
                    </div>
                    <div className='md:!block hidden'>
                        <CustomBreadcrumb/>
                    </div>
                </>
            }
            footer={
                <>

                    <ThemeButton/>
                    <PresetButton/>
                    <Button theme={'borderless'}
                            className='!mr-3'
                            icon={<Github theme="outline" size="24" fill="var(--semi-color-primary)"/>}
                            onClick={() => {
                                window.open('https://github.com/Win-Hao', '_blank')
                            }}
                    >
                    </Button>
                    <AvatarDropdown/>
                </>
            }
        ></Nav>
    );
};

export default Navbar;