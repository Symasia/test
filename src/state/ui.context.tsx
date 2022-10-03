import { createContext, FunctionComponent } from "preact";
import { useState, useContext, StateUpdater } from "preact/hooks";
import {
  WidgetContainerDefaultVariant,
  WidgetContainerVariantsEnum,
} from "~/types/widget";

interface IUIContextValues {
  variant: keyof typeof WidgetContainerVariantsEnum;
  setVariantTo: StateUpdater<keyof typeof WidgetContainerVariantsEnum>;
}

export const UIContext = createContext({});

export const UIContextProvider: FunctionComponent = ({ children, ...rest }) => {
  const [variant, setVariantTo] = useState<
    keyof typeof WidgetContainerVariantsEnum
  >(WidgetContainerDefaultVariant);

  const value: IUIContextValues = {
    variant,
    setVariantTo,
  };

  return (
    <UIContext.Provider value={value} {...rest}>
      {children}
    </UIContext.Provider>
  );
};

export const useUIContext = (): IUIContextValues => {
  const context = useContext(UIContext) as IUIContextValues;
  if (context === undefined) {
    throw new Error(`useUIContext must be used within a UIContextProvider.`);
  }
  return context;
};
