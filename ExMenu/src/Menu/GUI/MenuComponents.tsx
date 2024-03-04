import { Checkbox, Flex, Input, InputRef, Typography } from "antd"
import { ExCButton, ExCInput, ExMenuComponents, ExCNumber, ExCOptions, ExCToggle } from "../Components"
import { useContext, useEffect, useRef, useState } from "react"
import { MenuPageContext } from "./Menu"
import { ExPage } from "../Page"

export type MenuComponentHandler = {
    enterHandler?: (value?: any) => void,
    leftHandler?: () => void,
    rightHandler?: () => void
    upHandler?: () => void,
    downHandler?: () => void
}

export const getMenuItem = (component: ExMenuComponents, active: boolean) => {
    switch (component.type) {
        case "button":
            return <MenuButton component={component as ExCButton} active={active} />
        case "toggle":
            return <MenuToggle component={component as ExCToggle} active={active} />
        case "number":
            return <MenuNumber component={component as ExCNumber} active={active} />
        case "options":
            return <MenuOptions component={component as ExCOptions} active={active} />
        case "input":
            return <MenuInput component={component as ExCInput} active={active} />
    }
}

export const MenuPageComponent = ({ page, active }: { page: ExPage, active: boolean }) => {
    const context = useContext(MenuPageContext);

    useEffect(() => {
        if (active)
            context.enterHandler = () => context.render(page);
        return () => {
            context.reset();
        }
    }, [active])

    return (
        <Flex className="flex-grow">
            <Flex className="my-auto ml-auto">
                <Flex className="ex-color my-auto" style={{ fill: "var(--gray-700)" }}>
                    <svg height="18" viewBox="0 0 18 18" width="18">
                        <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" />
                        <path className="fill" d="M15,9a.994.994,0,0,1-.2925.7045l-3.9915,3.99a1,1,0,1,1-1.4355-1.386l.0245-.0245L12.5905,9,9.3045,5.715A1,1,0,0,1,10.691,4.28l.0245.0245,3.9915,3.99A.994.994,0,0,1,15,9Z" />
                        <path className="fill" d="M9,9a.994.994,0,0,1-.2925.7045l-3.9915,3.99a1,1,0,1,1-1.436-1.385l.0245-.0245L6.5905,9,3.3045,5.715A1,1,0,0,1,4.6915,4.28l.0245.0245,3.9915,3.99A.994.994,0,0,1,9,9Z" />
                    </svg>
                </Flex>
            </Flex>
        </Flex>
    )
}

export const MenuButton = ({ component, active }: { component: ExCButton, active: boolean }) => {
    const context = useContext(MenuPageContext);

    useEffect(() => {
        if (active)
            context.enterHandler = component.enterHandler;
        return () => {
            context.reset();
        }
    }, [active])


    return (
        <Flex className="flex-grow">
            <Flex className="my-auto ml-auto">
                <Typography.Text>{component.desc}</Typography.Text>
            </Flex>
        </Flex>
    )
}

export const MenuToggle = ({ component, active }: { component: ExCToggle, active: boolean }) => {
    const [state, setState] = useState(component.value);
    const context = useContext(MenuPageContext);

    useEffect(() => {
        if (active)
            context.enterHandler = () => {
                component.value = !component.value;
                setState(component.value);
            };
        return () => {
            context.reset();
        }
    }, [active])

    return (
        <Flex className="flex-grow">
            <Flex className="my-auto ml-auto">
                <Checkbox checked={component.value}></Checkbox>
            </Flex>
        </Flex>
    )
}

export const MenuNumber = ({ component, active }: { component: ExCNumber, active: boolean }) => {
    const [state, setState] = useState(component.value);
    const context = useContext(MenuPageContext);

    useEffect(() => {
        if (active) {
            context.enterHandler = () => {
                if (component.enterHandler)
                    component.enterHandler(component.value);
            };
            context.leftHandler = () => {
                const min = component.min;
                if (component.value > min) {
                    component.value = component.value - 1;
                    setState(component.value);
                }
            }
            context.rightHandler = () => {
                const max = component.max;
                if (component.value < max) {
                    component.value = component.value + 1;
                    setState(component.value);
                }
            }
        }
        return () => {
            context.reset();
        }
    }, [active])

    return (
        <Flex className="flex-grow">
            <Flex className="my-auto ml-auto" gap={"small"}>
                <Flex className="ex-color my-auto" style={{ fill: "var(--gray-700)" }}>
                    <svg height="18" viewBox="0 0 18 18" width="18">
                        <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" />
                        <path className="fill" d="M6,9a.994.994,0,0,0,.2925.7045l3.9915,3.99a1,1,0,1,0,1.4355-1.386l-.0245-.0245L8.4095,9l3.286-3.285A1,1,0,0,0,10.309,4.28l-.0245.0245L6.293,8.2945A.994.994,0,0,0,6,9Z" />
                    </svg>
                </Flex>
                <Typography.Text>
                    {component.value}
                </Typography.Text>
                <Flex className="ex-color my-auto" style={{ fill: "var(--gray-700)" }}>
                    <svg height="18" viewBox="0 0 18 18" width="18">
                        <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" />
                        <path className="fill" d="M12,9a.994.994,0,0,1-.2925.7045l-3.9915,3.99a1,1,0,1,1-1.4355-1.386l.0245-.0245L9.5905,9,6.3045,5.715A1,1,0,0,1,7.691,4.28l.0245.0245,3.9915,3.99A.994.994,0,0,1,12,9Z" />
                    </svg>
                </Flex>
            </Flex>
        </Flex>
    )
}

export const MenuOptions = ({ component, active }: { component: ExCOptions, active: boolean }) => {
    const [state, setState] = useState(component.value);
    const context = useContext(MenuPageContext);

    useEffect(() => {
        if (active) {
            context.enterHandler = () => {
                if (component.enterHandler)
                    component.enterHandler(component.value);
            };
            context.leftHandler = () => {
                const options = component.options;
                let currentIndex = options.indexOf(component.value) - 1;
                if (currentIndex < 0)
                    currentIndex = options.length - 1;
                component.value = options[currentIndex];
                setState(component.value);
            }
            context.rightHandler = () => {
                const options = component.options;
                let currentIndex = options.indexOf(component.value) + 1;
                if (currentIndex >= options.length)
                    currentIndex = 0;
                component.value = options[currentIndex];
                setState(component.value);
            }
        }
        return () => {
            context.reset();
        }
    }, [active])


    return (
        <Flex className="flex-grow">
            <Flex className="my-auto ml-auto" gap={"small"}>
                <Flex className="ex-color my-auto" style={{ fill: "var(--gray-700)" }}>
                    <svg height="18" viewBox="0 0 18 18" width="18">
                        <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" />
                        <path className="fill" d="M6,9a.994.994,0,0,0,.2925.7045l3.9915,3.99a1,1,0,1,0,1.4355-1.386l-.0245-.0245L8.4095,9l3.286-3.285A1,1,0,0,0,10.309,4.28l-.0245.0245L6.293,8.2945A.994.994,0,0,0,6,9Z" />
                    </svg>
                </Flex>
                <Typography.Text>
                    {component.value}
                </Typography.Text>
                <Flex className="ex-color my-auto" style={{ fill: "var(--gray-700)" }}>
                    <svg height="18" viewBox="0 0 18 18" width="18">
                        <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" />
                        <path className="fill" d="M12,9a.994.994,0,0,1-.2925.7045l-3.9915,3.99a1,1,0,1,1-1.4355-1.386l.0245-.0245L9.5905,9,6.3045,5.715A1,1,0,0,1,7.691,4.28l.0245.0245,3.9915,3.99A.994.994,0,0,1,12,9Z" />
                    </svg>
                </Flex>
            </Flex>
        </Flex>
    )
}


export const MenuInput = ({ component, active }: { component: ExCInput, active: boolean }) => {
    const [state, setState] = useState(component.value);
    const inputRef = useRef<InputRef>(null);
    const context = useContext(MenuPageContext);

    useEffect(() => {
        if (active) {
            context.focus = true;
            inputRef.current?.focus();
        }
        return () => {
            context.focus = false;
            inputRef.current?.blur();
            context.reset();
        }
    }, [active])


    return (
        <Flex className="flex-grow">
            <Flex className="my-auto ml-auto" gap={"small"}>
                <Input ref={inputRef}
                    value={component.value}
                    onChange={(event) => {
                        component.value = event.target.value;
                        setState(component.value);
                    }} />
            </Flex>
        </Flex>
    )
}

