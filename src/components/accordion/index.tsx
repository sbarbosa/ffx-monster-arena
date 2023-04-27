import React, { FC, PropsWithChildren, useMemo, useState } from 'react';

interface Prop extends PropsWithChildren {
  defaultItem?: string;
}

interface AccordionContextType {
  active: string[];
  toggleActive: (key: string) => void;
}

export const AccordionContext = React.createContext<AccordionContextType>({
  active: [],
  toggleActive: () => {}
});

const Accordion: FC<Prop> = ({ defaultItem, children }) => {
  const [active, setActive] = useState(defaultItem ? [defaultItem] : []);
  const toggleActive = useMemo(() => {
    return (key: string) => setActive((current) => (current.includes(key) ? current.filter((id) => id !== key) : [...current, key]));
  }, [setActive]);

  return <AccordionContext.Provider value={{ active, toggleActive }}>{children}</AccordionContext.Provider>;
};

export default Accordion;
