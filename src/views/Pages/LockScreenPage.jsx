import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import avatar from "assets/img/faces/avatar.jpg";

import {Link} from "react-router-dom";

import lockScreenPageStyle from "assets/jss/material-dashboard-pro-react/views/lockScreenPageStyle.jsx";

class LockScreenPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      pass: " ",
      passValid: false,
      temp: " "
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    this.timeOutFunction = setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  componentWillUnmount() {
    clearTimeout(this.timeOutFunction);
    this.timeOutFunction = null;
  }
  render() {

    const { classes } = this.props;
    if(this.state.passValid){
      return (
        <div style={{zIndex: "500", paddingLeft: "660px", position: "relative"}}>
          <Link to={"../dashboard"}>
            <Button color="info" round className={classes.lastButton}>
          Enter application
            </Button>
        </Link>
        </div>
      );
    }
    return (

      <div className={classes.container}>
        <form>
          <Card
            profile
            className={
              classes.customCardClass + " " + classes[this.state.cardAnimaton]
            }
          >
            <CardAvatar profile className={classes.cardAvatar}>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h4 className={classes.cardTitle}>Somil Mathur</h4>
              <CustomInput
                value={this.state.pass}
                labelText="Enter Password"
                id="company-disabled"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: (event) => this.setState({pass: event.target.value}),
                  type: "password"
                }}
              />
            </CardBody>
            <CardFooter className={classes.justifyContentCenter}>
              <Button color="rose" round onClick={event => {
                  if(this.state.pass=="somil") {this.setState({passValid: true});}
                  else {this.setState({temp: ""})}
                }}>
                Unlock
              </Button>
              <h4 style={{color: "blue"}}>{this.state.temp}</h4>
            </CardFooter>
          </Card>
        </form>
      </div>
    );
  }
}

LockScreenPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(lockScreenPageStyle)(LockScreenPage);
