import React, { useEffect, useState } from "react";
import { db } from "app/const/firebase";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function QueryPage() {
  const classes = useStyles();
  const row = [
    { name: "Thời gian" },
    { name: "Tên khách hàng" },
    { name: "Email" },
    { name: "Đơn hàng" },
    { name: "Số điện thoại" },
    { name: "Timestamp" },
  ];
  const [dataTable, setDataTable] = useState([]);
  const [timeStampList, setTimeStampList] = useState([]);
  const [userList, setUserList] = useState([]);

  //   fetch data from Firebase
  useEffect(() => {
    db.collection("users")
      .get()
      .then((snapshot) => {
        const result = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          result.push(data);
        });
        setUserList(result);
      })
      .catch((err) => console.log(err));

    db.collection("timestamp")
      .get()
      .then((snapshot) => {
        const result = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          result.push(data);
        });
        setTimeStampList(result);
      })
      .catch((err) => console.log(err));
  }, []);

  //   find item have uni === timestamp
  useEffect(() => {
    let arrayUser = [];

    for (let i = 0; i < userList.length; i++) {
      for (let j = 0; j < timeStampList.length; j++) {
        if (timeStampList[j].uid === userList[i].timestamp) {
          arrayUser.push(userList[i]);
        }
      }
    }

    setDataTable(arrayUser);
  }, [userList, timeStampList]);

  return (
    <div
      className="container"
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="row">
        <div className="col-12 pt-5">
          <h1 className="text-center">Bảng Data</h1>
        </div>

        <div className="col-12 py-5">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {row?.map((item, index) => {
                    return (
                      <TableCell
                        style={{
                          fontWeight: "bold",
                        }}
                        key={index}
                      >
                        {item.name}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>

              <TableBody>
                {dataTable &&
                  dataTable.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.date}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.email}</TableCell>
                      <TableCell align="left">{row.infobill}</TableCell>
                      <TableCell align="left">{row.phone}</TableCell>
                      <TableCell align="left">{row.timestamp}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default QueryPage;
