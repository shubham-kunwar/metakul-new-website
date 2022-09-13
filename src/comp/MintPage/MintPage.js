﻿
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Snackbar, Paper, LinearProgress, Chip } from "@material-ui/core";
import JoinGang from "../../comp/joinGang/joinGang";

import "./MintPage.css";

import Container from "@mui/material/Container";


const CountDowns = styled(Countdown)`
    margin-left: 140px;
`;



const MintButtonContainer = styled.div`
    button.MuiButton-contained:not(.MuiButton-containedPrimary).Mui-disabled {
        color: #464646;
    }
    button.MuiButton-contained:not(.MuiButton-containedPrimary):hover,
    button.MuiButton-contained:not(.MuiButton-containedPrimary):focus {
        -webkit-animation: pulse 1s;
        animation: pulse 1s;
        box-shadow: 0 0 0 2em rgba(255, 255, 255, 0);
    }
    @-webkit-keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 #ef8f6e;
        }
    }
    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 #ef8f6e;
        }
    }
`;

const Card = styled(Paper)`
    display: inline-block;
    background-color: var(--card-background-lighter-color) !important;
    margin: auto;
    padding: 10px;
    margin-left:5px;


    
`;





const Mint = () => {
    const [isActive, setIsActive] = useState(false);


    const currentDate = new Date(new Date().toUTCString()).getTime();
    const launchDate = new Date(Date.UTC(2023, 1, 17, 14, 55, 0, 0)).getTime();
    const renderCounter = ({ days, hours, minutes, seconds }: any) => {
        return (
            <div>
                <Card elevation={1}>
                    <h1>{days}</h1>
                    <br />
                    Days
                </Card>
                <Card elevation={1}>
                    <h1>{hours}</h1>
                    <br />
                    Hours
                </Card>
                <Card elevation={1}>
                    <h1>{minutes}</h1>
                    <br />
                    Mins
                </Card>
                <Card elevation={1}>
                    <h1>{seconds}</h1>
                    <br />
                    Secs
                </Card>
            </div>
        );
    };

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        return (
            <div >
                <Card elevation={1}>
                    <h1>{days}</h1>
                    <br />
                    Days
                </Card>
                <Card elevation={1}>
                    <h1>{hours}</h1>
                    <br />
                    Hours
                </Card>
                <Card elevation={1}>
                    <h1>{minutes}</h1>
                    <br />
                    Mins
                </Card>
                <Card elevation={1}>
                    <h1>{seconds}</h1>
                    <br />
                    Secs
                </Card>
            </div>
        );
    };
    return(
    
        <div className="featuredlaunch_container">
         
            <div className="featuredlaunch_rightCol">
               
                
                

                <div className="featuredLaunch_name">MetaKul NFT Mint</div>
                <img
                    src="https://media.discordapp.net/attachments/936604605767360563/942682678971498566/preview.gif"
                    alt="NFT"
                    width="300px"
                />
                <MintButtonContainer>

                    <div style={{ marginTop: "10px" }}>

                        <CountDowns
                            date={currentDate + (launchDate - currentDate)}
                            onMount={({ completed }) => completed && setIsActive(true)}
                            onComplete={() => {
                                setIsActive(true);
                            }}
                            renderer={renderCounter}
                        />
                    </div>


                </MintButtonContainer>

            </div>
           
                    <div className="featuredlaunch_leftCol">
                       
                        <div className="featuredlaunch_clipboard">
                            <div className="featuredlaunch_box">
                                <span>EARLY BIRD SUPPLY</span>
                                <div className="featuredlaunch_quantity">400</div>
                            </div>
                            <div className="featuredlaunch_box">
                                <span>EARLY BIRD PRICE</span>
                                <div className="featuredlaunch_quantity">Free</div>
                            </div>
                        </div>
                <p style={{ paddingRight: "12px", justifyContent: "center", color: "white"}}>
                            METACOPS have the power to control corrupt projects on the solana
                            blockchain. <br />
                           
                        </p>

                      

                        
                        

                        <h2
                    style={{  margin: "auto", marginTop: "-10px", color: "white"}}
                        >
                    <h2> Join the gang now to get whitelist and earn $KULL👇🏻</h2>
                        </h2>

            </div>

            <JoinGang></JoinGang>
           
                    
                </div>
            
            
        
       
        )

}

export default Mint;