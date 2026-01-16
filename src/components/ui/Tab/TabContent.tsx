import { useTab } from "./TabContext"; 

type Props = {
  id: string;
  children: React.ReactNode;
};

export function TabContent({
  id,
  children,
}: Props) {
  const { activeTab } = useTab();

  if (activeTab !== id) {
    return null;
  }

  return <div id={id}>{children}</div>;
}
