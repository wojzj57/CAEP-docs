import "./Menu.less";

import { ConfigProvider, Flex, Typography, theme } from "antd";

import { ExBasePage, ExMenu, ExPage } from "../Page";
import { MenuPageComponent, getMenuItem } from "./MenuComponents";
import {
  createContext,
  createRef,
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import "../MenuManager";
import { menuManager } from "../MenuManager";

export const MenuGUI = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <MenuArea>
        <MenuPage ref={MenuPageRef} />
      </MenuArea>
    </ConfigProvider>
  );
};

export const MenuPageContext = createContext<{
  focus: boolean;
  upHandler?: () => void;
  downHandler?: () => void;
  leftHandler?: () => void;
  rightHandler?: () => void;
  enterHandler?: (value?: any) => void;
  backHandler?: () => void;
  reset: () => void;
  render: (page: ExPage) => void;
}>({
  focus: false,
  reset: () => {},
  render: () => {},
});

type MenuPageRef = {
  show: (menu: ExMenu) => void;
};
export const MenuPageRef = createRef<MenuPageRef>();
const MenuPage = forwardRef<MenuPageRef>((props, ref) => {
  const [state, setState] = useState(-1);
  const [page, setPage] = useState<ExPage | undefined>();

  const focus = useRef(false);
  const mainPage = useRef<ExMenu | undefined>();

  const show = (menu: ExMenu) => {
    mainPage.current = menu;
    const page = menu as ExPage;
    setPage(page);
    setState(-1);

    if (menu.options.showCallback) menu.options.showCallback();
  };

  const render = (page: ExPage) => {
    setPage(page);
    setState(-1);
  };

  const hide = () => {
    if (context.focus) return;
    setPage(undefined);
    setState(-1);
    if (mainPage.current) {
      const menu = mainPage.current;
      if (menu.options.hideCallback) menu.options.hideCallback();
    }
    mainPage.current = undefined;
  };

  const context = useContext(MenuPageContext);
  context.focus = focus.current;
  context.reset = () => {
    context.upHandler = undefined;
    context.downHandler = undefined;
    context.leftHandler = undefined;
    context.rightHandler = undefined;
    context.enterHandler = undefined;
    context.backHandler = undefined;
  };
  context.render = render;

  useImperativeHandle(ref, () => ({
    show,
  }));

  const upHandler = () => {
    if (context.upHandler) context.upHandler();
    if (!page) return;

    const index = page.indexUp;
    setState(index);
  };
  const downHandler = () => {
    if (context.downHandler) context.downHandler();
    if (!page) return;

    const index = page.indexDown;
    setState(index);
  };

  const enterHandler = () => {
    if (context.enterHandler) context.enterHandler();
    if (context.focus || !page) return;
  };

  const leftHandler = () => {
    if (context.leftHandler) {
      context.leftHandler();
      return;
    }
    if (context.focus || !page) return;
    backHandler();
  };

  const rightHandler = () => {
    if (context.rightHandler) {
      context.rightHandler();
      return;
    }

    if (context.focus || !page) return;
    enterHandler();
  };

  const backHandler = () => {
    if (context.backHandler) context.backHandler();
    if (context.focus) return;

    if (page && (page as ExPage).parent) {
      const parent = (page as ExPage).parent;
      if (parent) render(parent);
    } else {
      hide();
    }
  };

  const eventListener = (e: KeyboardEvent) => {
    if (e.key == "Enter") return enterHandler();
    if (e.key == "ArrowUp") return upHandler();
    if (e.key == "ArrowDown") return downHandler();
    if (e.key == "ArrowLeft") return leftHandler();
    if (e.key == "ArrowRight") return rightHandler();
    if (e.key == "Backspace") return backHandler();
    if (!context.focus && e.key == " ") return enterHandler();
    if (
      page &&
      mainPage.current &&
      e.key == (mainPage.current as ExMenu).hotkey
    ) {
      return hide();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", eventListener);
    return () => {
      document.removeEventListener("keydown", eventListener);
    };
  }, [page]);

  return (
    <>
      {page && (
        <Flex className="ex-menu-page forbidden-act" vertical>
          <Flex
            className="ex-menu-panel"
            vertical
            gap={"small"}
            style={{
              width: menuManager.width,
            }}
          >
            <Flex vertical style={{ paddingTop: "8px", paddingBottom: "4px" }}>
              <Typography.Title className="m-none" level={3}>
                {page.title}
              </Typography.Title>
            </Flex>

            <Flex vertical gap={"small"}>
              {page.items.map((item, index) => {
                const active = page.index == index;
                return (
                  <Flex
                    key={index}
                    vertical
                    className="flex-grow"
                    style={{
                      display:
                        index < page.bobber || index > page.bobber + menuManager.viewCount
                          ? "none"
                          : "flex",
                    }}
                  >
                    {item.type == "divider" ? (
                      <MenuDivider />
                    ) : (
                      <MenuItem desc={item.title} active={active}>
                        {item.type == "page" ? (
                          <MenuPageComponent page={item.page} active={active} />
                        ) : (
                          getMenuItem(item.component, active)
                        )}
                      </MenuItem>
                    )}
                  </Flex>
                );
              })}
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
});

export const MenuItem = ({
  active,
  desc,
  children,
}: {
  active?: boolean;
  desc: string;
  children: JSX.Element | undefined;
}) => {
  return (
    <Flex
      className={`flex-grow forbidden-act ex-menu-item ${
        active ? " ex-menu-item-active" : undefined
      }`}
      gap={"small"}
    >
      <Flex className="my-auto" style={{ maxWidth: "70%" }}>
        <Typography.Text>{desc}</Typography.Text>
      </Flex>
      <Flex className="flex-grow my-auto xsxxxxsx" vertical>
        {children}
      </Flex>
    </Flex>
  );
};

export const MenuDivider = () => {
  return (
    <Flex className={`flex-grow forbidden-act ex-menu-divider`} gap={"small"}>
      <div className="flex-grow ex-menu-divider-line" />
    </Flex>
  );
};

export const MenuArea = ({ children }: { children: JSX.Element }) => {
  return (
    <Flex className="ex-menu-area" vertical>
      {children}
    </Flex>
  );
};
