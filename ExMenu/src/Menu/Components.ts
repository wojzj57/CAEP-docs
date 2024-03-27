export type ExCButton = {
  type: "button";
  desc?: string;
  enterHandler?: () => void;
};

export type ExCToggle = {
  type: "toggle";
  value: boolean;
  enterHandler?: (value: boolean) => void;
};

export type ExCNumber = {
  type: "number";
  value: number;
  max: number;
  min: number;
  enterHandler?: (value: number) => void;
};

export type ExCOptions = {
  type: "options";
  value: string;
  options: string[];
  enterHandler?: (value: string) => void;
  changeHandler?: (value: string) => void;
};

export type ExCInput = {
  type: "input";
  value: string;
  enterHandler?: (value: string) => void;
};

export type ExMenuComponents =
  | ExCButton
  | ExCToggle
  | ExCOptions
  | ExCNumber
  | ExCInput;
