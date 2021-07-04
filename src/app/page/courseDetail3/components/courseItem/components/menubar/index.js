import React, { useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import InfoItem from "../infoitem";
import { coachDetail, level3Detail } from "app/const/course";

import "./styles/styles.scss";
const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    fontSize: "3rem",
  },
}));

function MenuBar({ ...detaiCourse }) {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const infoCourse = level3Detail.find(
    (course) => course.id === detaiCourse.id
  );

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
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          TabIndicatorProps={{ style: { background: "#3777bc" } }}
          className={classes.root}
        >
          {infoCourse.snap.map((item, index) => {
            return <Tab label={item.title} {...a11yProps(index)} key={index} />;
          })}
        </Tabs>
      </AppBar>
      {infoCourse.snap.map((item, index) => {
        return (
          <TabPanel value={value} index={index} key={index}>
            <InfoItem info={item} />
          </TabPanel>
        );
      })}
    </>
  );
}

export default MenuBar;
