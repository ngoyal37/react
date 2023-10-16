import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabsBox = ({ items, itemIndex = 0 }) => {

    const [tabIndex, setTabIndex] = useState(itemIndex); //we  can also pass static tabIndex for Eg:- defaultIndex={1}

    return (
        <Tabs defaultIndex={itemIndex} onSelect={(index) => console.log(index)}>
            <TabList className={'react-tabs__tab-list capitalize'}>
                {items.map((item, index) => (
                    <Tab key={index}>{item.title}</Tab>
                ))}
            </TabList>
            {items.map((item, index) => (
                // <TabPanel key={index}>{item.content}</TabPanel>
                <TabPanel key={index}>
                    <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </TabPanel>
            ))}
        </Tabs>
    );
}
export default TabsBox;
