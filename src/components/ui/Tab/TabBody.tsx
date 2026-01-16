import { TabContent } from "./TabContent";

type Props = {
    items: {
        id: string;
        content: React.ReactNode;
    }[];
};   
export default function TabBody({items}: Props) { 
  return (
    <>
        {items.map((item) => (
            <TabContent key={item.id} id={item.id}>
                {item.content}
            </TabContent>
        ))}
    </>
  )
}
