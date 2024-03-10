import "./Menu.less"

import { ConfigProvider, Flex, Typography, theme } from "antd"

import { ExPages, ExMenu, ExPage } from "../Page"
import { MenuPageComponent, getMenuItem } from "./MenuComponents";
import { createContext, createRef, forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from "react";
import { ViewCount } from "../Const";

import "../MenuManager";

export const MenuGUI = () => {
    return (
        <ConfigProvider theme={{
            algorithm: theme.darkAlgorithm,
        }}
        >
            <MenuArea>
                <MenuPage ref={MenuPageRef} />
            </MenuArea>
        </ConfigProvider >
    )
}


export const MenuPageContext = createContext<{
    focus: boolean;
    upHandler?: () => void,
    downHandler?: () => void,
    leftHandler?: () => void,
    rightHandler?: () => void,
    enterHandler?: () => void,
    backHandler?: () => void,
    reset: () => void,
    render: (page: ExPages) => void,
}>({
    focus: false,
    reset: () => { },
    render: () => { },
    upHandler: () => { },
    downHandler: () => { },
    leftHandler: () => { },
    rightHandler: () => { },
    enterHandler: () => { },
    backHandler: () => { },
});

type MenuPageRef = {
    render: (page: ExPages) => void;
}
export const MenuPageRef = createRef<MenuPageRef>();
const MenuPage = forwardRef<MenuPageRef>((props, ref) => {
    const [state, setState] = useState(-1);
    const [page, setPage] = useState<ExPages | undefined>();

    const flag = useRef(0);
    const focus = useRef(false);
    const mainPage = useRef<ExPages | undefined>();

    const render = (page: ExPages) => {
        setPage(page);
        setState(-1)
        console.log(page)
        if (page.type == "menu") {
            const menu = page as ExMenu;
            mainPage.current = menu;
            if (menu.options.showCallback) {
                menu.options.showCallback();
            }
        }
    }

    const hide = () => {
        if (context.focus) return
        setPage(undefined);
        setState(-1);
        if (mainPage.current) {
            const menu = mainPage.current as ExMenu;
            if (menu.options.hideCallback) {
                menu.options.hideCallback();
            }
        }
        mainPage.current = undefined;
    }


    const context = useContext(MenuPageContext);
    context.focus = focus.current;
    context.reset = () => {
        context.upHandler = undefined;
        context.downHandler = undefined;
        context.leftHandler = undefined;
        context.rightHandler = undefined;
        context.enterHandler = undefined;
        context.backHandler = undefined;
    }
    context.render = render;

    const viewCount = ViewCount;


    useImperativeHandle(ref, () => ({
        render: render
    }))


    const upHandler = () => {
        if (context.upHandler) context.upHandler();
        if (!page) return;

        const index = page.indexUp;
        if (flag.current > index) flag.current = index;
        else if (index - viewCount > flag.current) flag.current = index - viewCount;
        setState(index);
    }
    const downHandler = () => {
        if (context.downHandler) context.downHandler();
        if (!page) return;

        const index = page.indexDown;
        if (flag.current < index - viewCount) flag.current = index - viewCount;
        else if (index == 0) flag.current = 0;
        setState(index);
    }

    const enterHandler = () => {
        if (context.enterHandler) context.enterHandler();
        if (context.focus || !page) return
    }

    const leftHandler = () => {
        if (context.leftHandler) {
            context.leftHandler();
            return;
        }
        if (context.focus || !page) return
        backHandler();
    }

    const rightHandler = () => {
        if (context.rightHandler) {
            context.rightHandler();
            return;
        }
        if (context.focus || !page) return
        enterHandler();
    }


    const backHandler = () => {
        if (context.backHandler) context.backHandler();
        if (context.focus) return

        if ((page as ExPage)?.parent)
            setPage((page as ExPage).parent);
        else {
            hide();
        }
    }

    const eventListener = (e: KeyboardEvent) => {
        if ((e.key == "Enter" || e.key == " "))
            return enterHandler()
        if (e.key == "ArrowUp")
            return upHandler()
        if (e.key == "ArrowDown")
            return downHandler()
        if (e.key == "ArrowLeft")
            return leftHandler()
        if (e.key == "ArrowRight")
            return rightHandler()
        if (e.key == "Backspace")
            return backHandler()
        if (page && mainPage.current && e.key == (mainPage.current as ExMenu).hotkey) {
            return hide();
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', eventListener)
        return () => {
            document.removeEventListener('keydown', eventListener)
        }
    }, [page])

    return (
        <>
            {
                page &&
                <Flex className="ex-menu-page forbidden-act" vertical>
                    <Flex className="ex-menu-panel"
                        vertical
                        gap={"small"}
                        style={{
                            width: page?.options.width
                        }}
                    >
                        <Flex vertical
                            style={{ paddingTop: "8px", paddingBottom: "4px" }}
                        >
                            <Typography.Title className="m-none" level={3}>
                                {page.title}
                            </Typography.Title>
                        </Flex>

                        <Flex
                            vertical
                            gap={"small"}
                        >
                            {page.items.map((item, index) =>
                                <Flex key={index} vertical className="flex-grow"
                                    style={{ display: index < flag.current || index > flag.current + viewCount ? "none" : "flex" }}
                                >
                                    {
                                        item.type == "divider" ?
                                            <MenuDivider />
                                            :
                                            <MenuItem desc={item.title} active={page.index == index} >
                                                {
                                                    item.type == "page" ?
                                                        <MenuPageComponent page={item.page} active={page.index == index} />
                                                        :
                                                        getMenuItem(item.component, page.index == index)
                                                }
                                            </MenuItem>
                                    }
                                </Flex>
                            )}
                        </Flex>
                    </Flex>
                </Flex>
            }
        </>
    )
})


export const MenuItem = ({ active, desc, children }: { active?: boolean, desc: string, children: JSX.Element | undefined }) => {
    return (
        <Flex className={`flex-grow forbidden-act ex-menu-item ${active ? " ex-menu-item-active" : undefined}`} gap={"small"}>
            <Flex className="my-auto"
                style={{ width: "80px" }}
            >
                <Typography.Text>{desc}</Typography.Text>
            </Flex>
            <Flex className="flex-grow my-auto xsxxxxsx" vertical>
                {children}
            </Flex>
        </Flex>
    )
}

export const MenuDivider = () => {
    return (
        <Flex className={`flex-grow forbidden-act ex-menu-divider`} gap={"small"}>
            <div className="flex-grow ex-menu-divider-line" />
        </Flex>
    )
}

export const MenuArea = ({ children }: { children: JSX.Element }) => {
    return (
        <Flex className="ex-menu-area" vertical>
            {children}
        </Flex>
    )
}