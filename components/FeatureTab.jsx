"use client"
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";


export function TabsCustomAnimation() {
  const data = [
    {
      label: "HTML",
      value: "html",
      desc: "It really matters and then like it really" 
    },
    {
      label: "React",
      value: "react",
      desc: "It really matters and then like it really" 
    },
    {
      label: "Vue",
      value: "vue",
      desc: "It really matters and then like it really" 
    },
    {
      label: "Angular",
      value: "angular",
      desc: "It really matters and then like it really" 
    },
    {
      label: "Svelte",
      value: "svelte",
      desc: "It really matters and then like it really" 
    },
  ];
  return (
    <div className="container">
    <Tabs id="custom-animation" value="html">
      <TabsHeader>
        {data.map(({ label, value}) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
      animate={{
        initial: { y: 250 },
        mount: { y: 0 },
        unmount: { y: 250 },
      }}
      >

      {data.map(({ value, desc }) => (
        <TabPanel key={value} value={value}>
          {desc}
        </TabPanel>
      ))}

      </TabsBody>
    </Tabs>
    </div>
  )
}

export default TabsCustomAnimation