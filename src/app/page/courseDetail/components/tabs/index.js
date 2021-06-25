import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { InfoTab, BenefitTab, Block } from "./components";

import "./styles/styles.scss";

function TabBar({ ...detaiCourse }) {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && <>{children}</>}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      "aria-controls": `scrollable-auto-tabpanel-${index}`,
    };
  }

  return (
    <>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          TabIndicatorProps={{ style: { background: "#3777bc" } }}
        >
          <Tab label="Mô tả" {...a11yProps(0)} />
          <Tab label="Lợi ích" {...a11yProps(1)} />
          <Tab label="Thảo luận" {...a11yProps(2)} />
          <Tab label="Tài liệu" {...a11yProps(3)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <InfoTab {...detaiCourse} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BenefitTab {...detaiCourse} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Block />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Block />
      </TabPanel>
    </>
  );
}

export default TabBar;
