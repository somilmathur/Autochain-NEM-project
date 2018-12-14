import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";

// @material-ui/icons
import PermIdentity from "@material-ui/icons/PermIdentity";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";

import userProfileStyles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.jsx";

import avatar from "assets/img/faces/marc.jpg";

import NavPills from "components/NavPills/NavPills.jsx";

import {Link} from "react-router-dom";

import merc from "assets/img/new/cars/merc.jpeg";
import merc1 from "assets/img/new/cars/merc1.jpg";
import merc2 from "assets/img/new/cars/merc2.jpg";
import merc3 from "assets/img/new/cars/merc3.jpg";
import merclogo from "assets/img/new/cars/merclogo.jpg";
import stars from "assets/img/new/stars.jpg";
import overview from "assets/img/new/overview.png";

function UserProfile(props) {
  const { classes } = props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={7}>
          <Card>
            <CardHeader color="primary" icon>
              <CardIcon color="Primary">
                <PermIdentity />
              </CardIcon>
              <h3 className={classes.cardIconTitle}>
                Mercedes Benz Maybach  <small>2015</small>
            </h3>
            </CardHeader>
            <CardBody>
              <div style={{paddingBottom: "10px"}}>
              <img src={merc} style={{ borderRadius:"10px",width: "99%", boxShadow: "0 4px 8px rgba(0,0,0,0.2), 0 6px 20px rgba(0,0,0,0.2)"}} />
              </div>
            <br />
              <GridContainer style={{ padding: "5px !important"}}>
                <GridItem xs={2} sm={2} md={3} style={{ padding: "5px !important"}}>
                  <img src={merc1} style={{ borderRadius:"15px", width: "100%", boxShadow: "0 4px 8px rgba(0,0,0,0.14), 0 6px 20px rgba(0,0,0,0.14)"}} />
                </GridItem>
                <GridItem xs={2} sm={2} md={3} style={{ padding: "5px !important"}}>
                  <img src={merc2} style={{ borderRadius:"15px",width: "100%", boxShadow: "0 4px 8px rgba(0,0,0,0.14), 0 6px 20px rgba(0,0,0,0.14)"}} />
                </GridItem>
                <GridItem xs={2} sm={2} md={3} style={{ padding: "5px !important"}}>
                  <img src={merc3} style={{ borderRadius:"15px",width: "100%", boxShadow: "0 4px 8px rgba(0,0,0,0.14), 0 6px 20px rgba(0,0,0,0.14)"}} />
                </GridItem>
                <GridItem xs={2} sm={2} md={6} style={{ visibility: "hidden"}}>
                  <img src={merc3} style={{ width: "8%", boxShadow: "0 4px 8px rgba(0,0,0,0.14), 0 6px 20px rgba(0,0,0,0.14)"}} />
                </GridItem>
              </GridContainer>
              <Clearfix />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={5}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={merclogo} alt="..." style={{ width: "100%"}}/>
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>Mercedes Benz</h6>
              <p className={classes.description}>
                The perfection of the S-Class, blended with the exclusivity of the Maybach,
                makes the Mercedes-Maybach S-Class the most luxurious and effortlessly superior
                sedan. The Mercedes-Maybach S-Class.
              </p>
              <div style={{ paddingBottom: "50px", paddingTop: "50px"}}>
              <h4 className={classes.cardTitle}>Seller rating</h4>
              <img src={stars} alt="..." style={{ width: "30%"}}/>
            </div>
            <div style={{ paddingBottom: "50px", paddingTop: "0px"}}>
            <h4 className={classes.cardTitle}>Overview</h4>
            <img src={overview} alt="..." style={{ width: "80%", paddingTop: "10px"}}/>
          </div>
          <div style={{borderStyle: "dotted", borderRadius: "25px", borderColor: "#e0e0e0"}}>
          <h2 className={classes.cardTitle}><small>AED </small>735,000</h2>
        </div>
            <div style={{paddingTop: "20px"}}>
              <Link to={"./tables/checkout"}>
                <Button color="info" size="lg">
                Checkout
              </Button>
            </Link>
                <Button color="rose" size="lg">
                  View history
                </Button>
            </div>

            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader>
              <h3>Features</h3>
            </CardHeader>
            <CardBody>
              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 12, md: 4 },
                  contentGrid: { xs: 12, sm: 12, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "Interior",
                    tabContent: (
                      <span>
                        <p>
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                        <br />
                        <p>This is very nice.</p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Exterior",
                    tabContent: (
                      <span>
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Equipment",
                    tabContent: (
                      <span>
                        <p>
                          Completely synergize resource taxing relationships
                          via premier niche markets. Professionally cultivate
                          one-to-one customer service with robust ideas.{" "}
                        </p>
                        <br />
                        <p>
                          Dynamically innovate resource-leveling customer
                          service for state of the art customer service.
                        </p>
                      </span>
                    )
                  }
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>

      </GridContainer>
    </div>
  );
}

export default withStyles(userProfileStyles)(UserProfile);
