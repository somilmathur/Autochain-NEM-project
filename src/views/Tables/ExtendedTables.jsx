import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";

// material-ui icons
import Assignment from "@material-ui/icons/Assignment";
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import extendedTablesStyle from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.jsx";

import product1 from "assets/img/product1.jpg";
import product2 from "assets/img/product2.jpg";
import product3 from "assets/img/product3.jpg";

// @material-ui/core components
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";
import Store from "@material-ui/icons/Store";
// import InfoOutline from "@material-ui/icons/InfoOutline";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Refresh from "@material-ui/icons/Refresh";

import Place from "@material-ui/icons/Place";
import ArtTrack from "@material-ui/icons/ArtTrack";
import Language from "@material-ui/icons/Language";

// core components

import CardFooter from "components/Card/CardFooter.jsx";

import SweetAlert from "react-bootstrap-sweetalert";

import notificationsStyle from "assets/jss/material-dashboard-pro-react/views/notificationsStyle.jsx";

import noticeModal1 from "assets/img/card-1.jpeg";
import noticeModal2 from "assets/img/card-2.jpeg";

import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import Snackbar from "components/Snackbar/Snackbar.jsx";

// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";


import {Link} from "react-router-dom";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

import priceImage1 from "assets/img/card-2.jpeg";
import priceImage2 from "assets/img/card-3.jpeg";
import priceImage3 from "assets/img/card-1.jpeg";

import merc from "assets/img/new/cars/merc.jpeg";

import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx";

let nem = require('nem-sdk').default;

let endpoint = nem.model.objects.create("endpoint")(nem.model.nodes.defaultTestnet, nem.model.nodes.defaultPort);

let common = nem.model.objects.create("common")("", "f8581f4c9b615c20b7e7306066b48b5db09ba8d1d02a0fba368c564b4cc343c8");

let transferTransaction = nem.model.objects.create("transferTransaction")("TBXRMJ7ONJZ2JF2MWQNPE5B64ECU52PWHE4RA2AB", 30, "From my blockchain");

let preparedTransaction = nem.model.transactions.prepare("transferTransaction")(common, transferTransaction, nem.model.network.data.testnet.id)

class ExtendedTables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      alert: null,
      show: false,
      tl: false,
      tc: false,
      tr: false,
      bl: false,
      bc: false,
      br: false,
      classicModal: false,
      noticeModal: false,
      smallModal: false
    };
    this.handleToggle = this.handleToggle.bind(this);
      this.cons = this.cons.bind(this);
  }


  componentWillUnmount() {
    var id = window.setTimeout(null, 0);
    while (id--) {
      window.clearTimeout(id);
    }
  }
  showNotification(place) {
    if (!this.state[place]) {
      var x = [];
      x[place] = true;
      this.setState(x);
      setTimeout(
        function() {
          x[place] = false;
          this.setState(x);
        }.bind(this),
        6000
      );
    }
  }
  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
}
  cons = event => {
    this.showNotification("tc");
    nem.model.transactions.send(common, preparedTransaction, endpoint).then(function(res){
      console.log(res);
    }, function(err){
      console.log(err);
    })
  }


  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  render() {
    const { classes } = this.props;
    const fillButtons = [
      { color: "info", icon: Person },
      { color: "success", icon: Edit },
      { color: "danger", icon: Close }
    ].map((prop, key) => {
      return (
        <Button color={prop.color} className={classes.actionButton} key={key}>
          <prop.icon className={classes.icon} />
        </Button>
      );
    });
    const simpleButtons = [
      { color: "info", icon: Person },
      { color: "success", icon: Edit },
      { color: "danger", icon: Close }
    ].map((prop, key) => {
      return (
        <Button
          color={prop.color}
          simple
          className={classes.actionButton}
          key={key}
        >
          <prop.icon className={classes.icon} />
        </Button>
      );
    });
    const roundButtons = [
      { color: "info", icon: Person },
      { color: "success", icon: Edit },
      { color: "danger", icon: Close }
    ].map((prop, key) => {
      return (
        <Button
          round
          color={prop.color}
          className={classes.actionButton + " " + classes.actionButtonRound}
          key={key}
        >
          <prop.icon className={classes.icon} />
        </Button>
      );
    });
    return (
      <GridContainer>
        <GridItem xs={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card product className={classes.cardHover}>
                <CardHeader>
                  <h4>From</h4>
                </CardHeader>
                <CardBody>
                  <div style={{ fontSize: "11px", color: "#808080"}}>
                    <h5>Iron Admin, Inc.</h5>
                    <h5>795 Freedom Ave, Suite 600</h5>
                    <h5>New York, CA 94107</h5>
                    <h5>Phone: 1(804 123-9876)</h5>
                  </div>
                </CardBody>
                <CardFooter product>
                  <div className={classes.price}>
                    <h4 style={{ fontSize: "12px", color: "#505050"}}>ironadmin.com</h4>
                  </div>
                  <div className={`${classes.stats} ${classes.productStats}`}>
                    <Place /> Dubai
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card product className={classes.cardHover}>
                <CardHeader>
                  <h4>To</h4>
                </CardHeader>
                <CardBody>
                  <div style={{ fontSize: "11px", color: "#808080"}}>
                    <h5>Somil Mathur</h5>
                    <h5>795 Freedom Ave, Suite 600</h5>
                    <h5>New York, CA 94107</h5>
                    <h5>Phone: 1(804 123-9876)</h5>
                  </div>
                </CardBody>
                <CardFooter product>
                  <div className={classes.price}>
                    <h4 style={{ fontSize: "12px", color: "#505050"}}>somil@ironadmin.com</h4>
                  </div>
                  <div className={`${classes.stats} ${classes.productStats}`}>
                    <Place /> Dubai
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card product className={classes.cardHover}>
                <CardHeader>
                  <h4>Invoice #007612</h4>
                </CardHeader>
                <CardBody>
                  <div style={{ fontSize: "11px", color: "#808080"}}>
                    <h5><strong>Order ID: </strong>4F3S8J</h5>
                    <h5><strong>Payment Due: </strong>12/22/2018</h5>
                    <h5><strong>Account: </strong>968-34567</h5>
                  </div>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <Assignment />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>Payment details</h4>
            </CardHeader>
            <CardBody>
              <Table
                striped
                tableHead={[
                  "#",
                  "",
                  "Product",
                  "Serial #",
                  "Description",
                  "Subtotal"
                ]}
                tableData={[
                  [
                    "1",
                    "",
                  "2015 Mercedes Maybach",
                    "455-981-221",
                    "The perfection of the S-Class, blended with the exclusivity of the Maybach, makes the Mercedes-Maybach S-Class the most luxurious and effortlessly superior sedan.The Mercedes-Maybach S-Class.",
                    "735,000 AED",
                  ],
                  [
                    "2",
                    "",
                  "Insurance Plan",
                    "247-925-726",
                    "Renew insurance plan for one year. Provider: Car Insurance Corp.",
                    "12,000 AED",
                  ],
                  [
                    "3",
                    "",
                  "Registration Fee",
                    "735-845-642",
                    "Renew Government Vehicle Registration for one year. Provider: RTA",
                    "3000 AED",
                  ],

                  { total: true, colspan: "4", amount: "750,000" }
                ]}
                customCellClasses={[
                  classes.center,
                  classes.right,
                  classes.right
                ]}
                customClassesForCells={[0, 5, 6]}
                customHeadCellClasses={[
                  classes.center,
                  classes.right,
                  classes.right
                ]}
                customHeadClassesForCells={[0, 5, 6]}
              />
            <GridItem md={4} style={{float: "right"}}>
              <div style={{paddingTop: "20px"}}>

              <Button
                color="rose"  onClick={() => this.showNotification("tc")}>
                Generate PDF
              </Button>
              <Snackbar
                place="tc"
                color="rose"
                icon={AddAlert}
                message="Congratulations! - Your transaction has been processed."
                open={this.state.tc}
                closeNotification={() => this.setState({ tc: false })}
                close
              />

                  <Button onClick={this.cons} color="info" size="">
                    Submit Payment
                  </Button>
              </div>
              </GridItem>
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12}>
          <GridContainer>
            <GridItem md={4}>
          <Card plain>
            <CardHeader>
              <h4 className={classes.cardIconTitle}>
                Amount Due<small>
                  {" "}
                  - 12/22/2018
                </small>
              </h4>
            </CardHeader>
            <CardBody plain>
              <Table
                hover
                tableData={[
                  ["Subtotal:", "750,000 AED"],
                  ["VAT(5%)", "2950 AED"],
                  ["Total", "752, 950 AED"]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>

          </GridContainer>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(extendedTablesStyle)(ExtendedTables);
