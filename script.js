import PuppeteerHTMLPDF from "puppeteer-html-pdf";

const htmlPDF = new PuppeteerHTMLPDF();
const options = {
    format: "A4",
    path: `./final.pdf`, // you can pass path to save the file
};
htmlPDF.setOptions(options);

const content = `
<html lang="en"
    style="margin: 0;padding: 0;box-sizing: border-box;height: 100vh;width: 100vw;font-family: var(--inter-font);color: var(--black);">

<head style="margin: 0;padding: 0;box-sizing: border-box;">
    <meta charset="UTF-8" style="margin: 0;padding: 0;box-sizing: border-box;">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"
        style="margin: 0;padding: 0;box-sizing: border-box;">
    <title>TripSafe - COI</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

        :root {
            --primary-blue: #2F52E0;
            --secondary-blue: #1CA8E6;
            --white: #FFFFFF;
            --black: #000000;
            --gray: #E9EAEB;
            --inter-font: 'Inter', sans-serif;
            --dark-blue: #202B39;
        }

        #page1, #page2, #page3, #page4, #page5 {
            margin: 0 0 15rem 0;
        }

        #page2 .table__content:nth-last-child(3) {
            border-radius: 0 0 0 20px;
        }

        #page3 .grid>span:last-child {
            border-radius: 0 0 0.8rem 0;
        }

        #page3 .grid>span:nth-last-child(2) {
            border-radius: 0 0 0 0.8rem;
        }
    </style>

</head>

<body
    style="margin: 0;padding: 0;box-sizing: border-box;height: 100vh;width: 100vw;font-family: var(--inter-font);color: var(--black);">
    <main style="margin: 0;padding: 0;box-sizing: border-box;">
        <div id="page1" style="padding: 0;box-sizing: border-box;width: 100%;">
            <div class="container" style="margin: 0;padding: 0;box-sizing: border-box;background-color: var(--white);">
                <div class="container__header"
                    style="margin: 0;padding: 0;box-sizing: border-box;width: 100%;height: 60%;position: relative;background: linear-gradient(90deg, #2F52E0 0%, #1CA8E6 100%);">
                    <div class="container__header__logo"
                        style="margin: 0;padding: 10px 20px 10px 20px;box-sizing: border-box;border-radius: 0 0 25px 25px;margin-left: 8%;display: flex;justify-content: center;align-items: center;gap: 10px;width: fit-content;background-color: var(--white);margin-bottom: 3rem;">
                        <img class="container__header__logo--logo" src="https://static.technogramsolutions.com/insurance/coi/assets/p1_logo.svg" alt="logo"
                            style="margin: 0;padding: 0;box-sizing: border-box;width: 30px;height: 35px;border-radius: 0 0 0 25px;">
                        <h1 class="container__header__logo--text"
                            style="margin: 0;padding: 0;box-sizing: border-box;color: var(--primary-blue);font-size: 25px;">
                            TripSafe</h1>
                    </div>
                    <div class="container__header__family"
                        style="margin: 0;padding: 0;box-sizing: border-box;position: absolute;right: 0;bottom: 0;">
                        <img class="container__header__family--image" src="https://static.technogramsolutions.com/insurance/coi/assets/p1_family.svg" alt="family"
                            style="margin: 0;padding: 0;box-sizing: border-box;margin-bottom: -15px;height: 400px;">
                    </div>
                    <div class="container__header__left" style="margin: 0;padding: 0;box-sizing: border-box;">
                        <p class="container__header__left--text"
                            style="margin: 0;padding: 0;box-sizing: border-box;margin-left: 8%;font-size: 3rem;color: var(--white);text-transform: uppercase;line-height: 4rem;position: absolute;font-weight: bold;">
                            Comprehensive <br style="margin: 0;padding: 0;box-sizing: border-box;">Travel Cover</p>
                    </div>
                    <div class="container__header__left__ticket"
                        style="margin: 0;padding: 0;box-sizing: border-box;position: relative;height: 50vh;">
                        <img class="container__header__left__ticket--image" src="https://static.technogramsolutions.com/insurance/coi/assets/p1_ticket2.svg" alt="ticket"
                            style="margin: 0;padding: 0;box-sizing: border-box;position: absolute;top: 3rem;height: 13rem;width: 25rem;margin-top: 12%;margin-left: 12%;">
                    </div>
                </div>
                <div class="container__second" style="margin: 0;padding: 0;box-sizing: border-box;margin-top: 4rem;">
                    <div class="container__middle"
                        style="margin: 0;padding: 0;box-sizing: border-box;margin-top: 7rem;display: flex;justify-content: center;align-items: center;position: relative;width: 100%;background-color: aquamarine;">
                        <img class="container__middlle--path" src="https://static.technogramsolutions.com/insurance/coi/assets/p1_path.svg" alt="planepath"
                            style="margin: 0;padding: 0;box-sizing: border-box;height: 3rem;position: absolute;">
                        <img class="container__middlle--plane" src="https://static.technogramsolutions.com/insurance/coi/assets/p1_plane.svg" alt="plane"
                            style="margin: 0;padding: 0;box-sizing: border-box;width: 30px;height: 30px;rotate: -5deg;position: absolute;margin-top: -2px;right: 24%;">
                        <div class="container__middlle--text"
                            style="margin: 0;padding: 0;box-sizing: border-box;position: absolute;top: 0.1rem;margin-left: 19px;font-size: 2.5rem;font-weight: 500;z-index: 10;text-transform: uppercase;color: #5ED0E6;">
                            <p class="container__middlle--text1"
                                style="margin: 0;padding: 0;box-sizing: border-box;color: #5ED0E6;">Make your travel
                                <span class="container__middlle--text2"
                                    style="margin: 0;padding: 0;box-sizing: border-box;color: #2F52E0;">hassle-free
                                    !</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="container__service" style="margin: 8rem 0 6rem 0;padding: 0;box-sizing: border-box;">
                    <div class="container__service__section"
                        style="margin: auto;padding: 0;box-sizing: border-box;align-self: center;width: 70%;height: 30%;display: flex;justify-content: space-between;">
                        <div class="container__service__section__service1"
                            style="margin: 0;padding: 0;box-sizing: border-box;display: flex;gap: 10px;flex-direction: column;-moz-column-gap: 2rem;column-gap: 2rem;justify-content: center;align-items: center;">
                            <div style="margin: 0;padding: 0;box-sizing: border-box;">
                                <img class="container__service__section__service1--image" src="https://static.technogramsolutions.com/insurance/coi/assets/p1_service1.svg"
                                    alt="" style="margin: 0;padding: 0;box-sizing: border-box;height: 4rem;">
                            </div>
                            <p class="container__service__section__service1--text"
                                style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.5rem;text-align: center;font-weight: 500;">
                                Medical <br style="margin: 0;padding: 0;box-sizing: border-box;"> Insurance</p>
                        </div>
                        <div class="container__service__section__service1"
                            style="margin: 0;padding: 0;box-sizing: border-box;display: flex;gap: 10px;flex-direction: column;-moz-column-gap: 2rem;column-gap: 2rem;justify-content: center;align-items: center;">
                            <div style="margin: 0;padding: 0;box-sizing: border-box;">
                                <img class="container__service__section__service1--image" src="https://static.technogramsolutions.com/insurance/coi/assets/p1_service2.svg"
                                    alt="" style="margin: 0;padding: 0;box-sizing: border-box;height: 4rem;">
                            </div>
                            <div class="container__service__section__service1--text"
                                style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.5rem;text-align: center;font-weight: 500;">
                                Trip-related <br style="margin: 0;padding: 0;box-sizing: border-box;"> Covers</div>
                        </div>
                        <div class="container__service__section__service1"
                            style="margin: 0;padding: 0;box-sizing: border-box;display: flex;gap: 10px;flex-direction: column;-moz-column-gap: 2rem;column-gap: 2rem;justify-content: center;align-items: center;">
                            <div style="margin: 0;padding: 0;box-sizing: border-box;">
                                <img class="container__service__section__service1--image" src="https://static.technogramsolutions.com/insurance/coi/assets/p1_service3.svg"
                                    alt="" style="margin: 0;padding: 0;box-sizing: border-box;height: 4rem;">
                            </div>
                            <p class="container__service__section__service1--text"
                                style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.5rem;text-align: center;font-weight: 500;">
                                24 x 7 Travel <br style="margin: 0;padding: 0;box-sizing: border-box;">Assistance </p>
                        </div>
                        <div class="container__service__section__service1"
                            style="margin: 0;padding: 0;box-sizing: border-box;display: flex;gap: 10px;flex-direction: column;-moz-column-gap: 2rem;column-gap: 2rem;justify-content: center;align-items: center;">
                            <div style="margin: 0;padding: 0;box-sizing: border-box;">
                                <img class="container__service__section__service1--image" src="https://static.technogramsolutions.com/insurance/coi/assets/p1_service4.svg"
                                    alt="" style="margin: 0;padding: 0;box-sizing: border-box;height: 4rem;">
                            </div>
                            <p class="container__service__section__service1--text"
                                style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.5rem;text-align: center;font-weight: 500;">
                                Other <br style="margin: 0;padding: 0;box-sizing: border-box;"> Benefits</p>
                        </div>
                    </div>
                </div>
                <div class="container__safety"
                    style="margin: 0;padding: 0;box-sizing: border-box;display: flex;flex-direction: column;align-items: center;position: relative;height: auto;background-color: #5ED0E6;border-radius: 20px 20px 0 0;overflow: hidden;">
                    <div class="container__safety__heading"
                        style="margin: 0;padding: 0;box-sizing: border-box;color: var(--white);font-size: 2rem;font-weight: 600;margin-top: 2rem;">
                        Your TripSafe cover is powered by:</div>
                    <div class="container__safety__cards"
                        style="margin: 4rem 4rem 8rem 4rem;padding: 0;box-sizing: border-box;display: flex;flex-direction: row;width: 70%;justify-content: space-around;align-items: center;gap: 40px;">
                        <div class="container__safety__cards--card"
                            style="margin: 0;padding: 0;box-sizing: border-box;display: flex;width: 50%;flex-direction: column;justify-content: center;gap: 20px;align-items: center;height: 300px;background-color: var(--white);border-radius: 20px;">
                            <div class="container__safety__cards--card--img"
                                style="margin: 0;padding: 0;box-sizing: border-box;">
                                <img src="https://static.technogramsolutions.com/insurance/coi/assets/p1_adatiya_birla.svg" alt="adatiya birla"
                                    style="margin: 0 auto;padding: 0;box-sizing: border-box;width: 200px;height: 100px;">
                            </div>
                            <div class="container__safety__cards--card--text"
                                style="margin: 0 3rem;padding: 0;box-sizing: border-box;text-align: center;font-size: 1.2rem;font-weight: 500;">
                                Comprehensive international medical and travel insurance from Aditya Birla Health
                                Insurance
                            </div>
                        </div>
                        <div class="container__safety__cards--card"
                            style="margin: 0;padding: 0;box-sizing: border-box;display: flex;width: 50%;flex-direction: column;justify-content: center;gap: 20px;align-items: center;height: 300px;background-color: var(--white);border-radius: 20px;">
                            <div class="container__safety__cards--card--img"
                                style="margin: 0;padding: 0;box-sizing: border-box;">
                                <img src="https://static.technogramsolutions.com/insurance/coi/assets/p1_across_assist.svg" alt="adatiya birla"
                                    style="margin: 0 auto;padding: 0;box-sizing: border-box;width: 200px;height: 100px;">
                            </div>
                            <div class="container__safety__cards--card--text"
                                style="margin: 0 3rem;padding: 0;box-sizing: border-box;text-align: center;font-size: 1.2rem;font-weight: 500;">
                                24 x 7 Travel Assistance from Across Assist
                            </div>
                        </div>
                    </div>
                    <div class="container__safety__fee"
                        style="margin: 0;padding: 2rem;box-sizing: border-box;border-radius: 43px 43px 0 0;position: absolute;right: 0;bottom: 0;z-index: 10;margin-bottom: -2rem;background-color: rgba(253, 254, 255, 0.7);">
                        <p class="container__safety__fee--heading"
                            style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 500;color: var(--black);padding-bottom: 20px;">
                            TripSafe Fee: Rs. _____<span class="container__safety__fee--subheading"
                                style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1rem;color: grey;">(inclusive
                                of GST)</span></p>
                    </div>
                </div>
                <div class="footer"
                    style="margin: 0;padding: 0;box-sizing: border-box;height: 15rem;width: 100%;background: linear-gradient(to right, #5ED0E6 0%, #D1F0F8 100%);">
                    <div class="container__footer"
                        style="margin: 0;padding: 2rem 5rem 3rem;box-sizing: border-box;border-radius: 20px 20px 0 0;height: auto;width: 100%;background-color: #fff;">
                        <div class="container__footer--text"
                            style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1rem;color: grey;margin-bottom: 1.6rem;">
                            TripSafe fee includes the cost of travel insurance from an IRDAI registered insurer,
                            international travel assistance from our assistance partners, any other third-party
                            services,
                            taxes, statutory charges and any other charges.
                        </div>
                        <div class="container__footer--text"
                            style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1rem;color: grey;margin-bottom: 1.6rem;">
                            Please read insurance policy wordings and service documents for detailed terms and
                            conditions.
                            All travel assistance services shall be provided over the call or digitally. The actual
                            service
                            charges or cost for the service availed will be borne by the end-user or customer.
                        </div>
                        <div class="container__footer--support"
                            style="margin: 0;padding: 0;box-sizing: border-box;display: flex;overflow: hidden;height: 4.5rem;border: 2px solid #2F52E0;border-radius: 20px;">
                            <div class="footer__support--button"
                                style="margin: 0;padding: 0 2rem 0;box-sizing: border-box;display: flex;gap: 15px;height: 100%;width: auto;background-color: #2F52E0;color: var(--white);justify-content: space-around;align-items: center;font-size: 2rem;">
                                <img src="https://static.technogramsolutions.com/insurance/coi/assets/p1_support.svg" alt="support"
                                    style="margin: 0;padding: 0;box-sizing: border-box;height: 3rem;">
                                <p style="margin: 0;padding: 0;box-sizing: border-box;">Support</p>
                            </div>
                            <div class="footer__support--details"
                                style="margin: 0 2rem;padding: 0;box-sizing: border-box;width: 100%;display: grid;grid-template-columns: auto auto;text-align: start;padding-top: 0.4rem;font-size: 1rem;font-weight: 600;color: grey;">
                                <div style="margin: 0;padding: 0;box-sizing: border-box;">
                                    <p style="margin: 0;padding: 0;box-sizing: border-box;">TripSafe helpline (8 am - 11
                                        pm IST): <span class="footer__support--details--links"
                                            style="margin: 0;padding: 0;box-sizing: border-box;color: #2F52E0;">+91
                                            22 6250 6250</span></p>
                                </div>
                                <div style="margin: 0;padding: 0;box-sizing: border-box;">
                                    <p style="margin: 0;padding: 0;box-sizing: border-box;">24 x 7 ABHI Claims support:
                                        <span class="footer__support--details--links"
                                            style="margin: 0;padding: 0;box-sizing: border-box;color: #2F52E0;">+91 124
                                            4449 8777</span>
                                    </p>
                                </div>
                                <div style="margin: 0;padding: 0;box-sizing: border-box;">
                                    <p style="margin: 0;padding: 0;box-sizing: border-box;">TripSafe email: <span
                                            class="footer__support--details--links"
                                            style="margin: 0;padding: 0;box-sizing: border-box;color: #2F52E0;">support@tripsafe.in </span>
                                    </p>
                                </div>
                                <div style="margin: 0;padding: 0;box-sizing: border-box;">
                                    <p style="margin: 0;padding: 0;box-sizing: border-box;">24 x 7 Across Assist
                                        helpline: <span class="footer__support--details--links"
                                            style="margin: 0;padding: 0;box-sizing: border-box;color: #2F52E0;">+91
                                            22
                                            6250 6250</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div id="page2" style="padding: 0;box-sizing: border-box;width: 100%;">
            <div class="container"
                style="margin: 0;padding: 0;box-sizing: border-box;width: 100vw;background-color: var(--white);padding-bottom: 0.4rem;">
                <div class="container__top" style="margin: 0;padding: 0;box-sizing: border-box;">
                    <img src="https://static.technogramsolutions.com/insurance/coi/assets/p2_TOP.svg" alt="adatiya birla"
                        style="margin: 0;padding: 0;box-sizing: border-box;width: 100vw;">
                </div>
                <div class="container__details" style="margin: 0 5rem;padding: 0;box-sizing: border-box;">
                    <div class="container__details--caption"
                        style="margin: 1rem 0;padding: 0;box-sizing: border-box;text-align: center;">
                        <p style="margin: 0;padding: 0;box-sizing: border-box;">Aditya Birla Health Insurance Company
                            Limited, 7th floor, C building, Modi Business
                            Centre,
                            Kasarvadavali, Mumbai, Thane West-400615 IRDA Regn. No.153</p>
                    </div>
                    <div class="container__details__banner container__details__banner--text"
                        style="margin: 0;padding: 0;box-sizing: border-box;height: 4rem;border-radius: 10px;background: linear-gradient(90deg, #6AE2FF 0%, #2F52E0 100%);display: flex;justify-content: space-around;align-items: center;color: var(--white);font-size: 1.3rem;font-weight: 500;">
                        <p class="container__details__banner--text"
                            style="margin: 0;padding: 0;box-sizing: border-box;color: var(--white);font-size: 1.3rem;font-weight: 500;">
                            GROUP TRAVEL PROTECT</p>
                        <p class="container__details__banner--text"
                            style="margin: 0;padding: 0;box-sizing: border-box;color: var(--white);font-size: 1.3rem;font-weight: 500;">
                            CERTIFICATE OF INSURANCE</p>
                        <p class="container__details__banner--text"
                            style="margin: 0;padding: 0;box-sizing: border-box;color: var(--white);font-size: 1.3rem;font-weight: 500;">
                            UIN: ADITGBP23002V012223</p>
                    </div>
                    <div class="container__details--congrats"
                        style="margin: 2rem 0 3rem 0;padding: 0;box-sizing: border-box;font-size: 2rem;font-weight: 600;">
                        <p style="margin: 0;padding: 0;box-sizing: border-box;">Congratulations, you are covered!</p>
                    </div>
                    <div class="container__customer--parent"
                        style="margin: 0;padding: 0;box-sizing: border-box;border: double 2px transparent;border-radius: 10px;background-image: linear-gradient(white, white), linear-gradient(to right, #3a4ed5, #3acfd5);border-style: solid;background-origin: border-box;background-clip: content-box, border-box;margin-bottom: 4rem;">
                        <div class="conatiner__details--customer--heading"
                            style="margin: 0;padding: 0.5rem 1.3rem;box-sizing: border-box;position: absolute;font-size: 1.4rem;font-weight: 600;margin-top: -20px;margin-left: -2px;background-color: #2F52E0;color: var(--white);border-radius: 10px;">
                            Customer Details
                        </div>
                        <div class="conatiner__details--customer"
                            style="margin: 0;padding: 0;box-sizing: border-box;display: grid;grid-template-columns: repeat(3, 1fr);position: relative;margin-top: 1.5rem;">
                            <div class="conatiner__details--customer--details"
                                style="margin: 0;padding: 1rem;box-sizing: border-box;text-align: start;">
                                <p class="conatiner__details--customer--details--heading"
                                    style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;">
                                    Insured Name:</p>
                                <p class="conatiner__details--customer--details--subheading"
                                    style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;color: grey;">
                                    JANE SCOTT DOE</p>
                            </div>
                            <div class="conatiner__details--customer--details"
                                style="margin: 0;padding: 1rem;box-sizing: border-box;text-align: start;">
                                <p class="conatiner__details--customer--details--heading"
                                    style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;">
                                    Date Of Birth:</p>
                                <p class="conatiner__details--customer--details--subheading"
                                    style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;color: grey;">
                                    29/06/1990</p>
                            </div>
                            <div class="conatiner__details--customer--details"
                                style="margin: 0;padding: 1rem;box-sizing: border-box;text-align: start;">
                                <p class="conatiner__details--customer--details--heading"
                                    style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;">
                                    Email ID:</p>
                                <p class="conatiner__details--customer--details--subheading"
                                    style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;color: grey;">
                                    janedoe@gmail.com</p>
                            </div>
                            <div class="conatiner__details--customer--details"
                                style="margin: 0;padding: 1rem;box-sizing: border-box;text-align: start;">
                                <p class="conatiner__details--customer--details--heading"
                                    style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;">
                                    Gender:</p>
                                <p class="conatiner__details--customer--details--subheading"
                                    style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;color: grey;">
                                    FEMALE</p>
                            </div>
                            <div class="conatiner__details--customer--details"
                                style="margin: 0;padding: 1rem;box-sizing: border-box;text-align: start;">
                                <p class="conatiner__details--customer--details--heading"
                                    style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;">
                                    Passport No.:</p>
                                <p class="conatiner__details--customer--details--subheading"
                                    style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;color: grey;">
                                    XXXXXX XXXXXX</p>
                            </div>
                            <div class="conatiner__details--customer--details"
                                style="margin: 0;padding: 1rem;box-sizing: border-box;text-align: start;">
                                <p class="conatiner__details--customer--details--heading"
                                    style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;">
                                    Mobile No.:</p>
                                <p class="conatiner__details--customer--details--subheading"
                                    style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;color: grey;">
                                    +91 99999 99999</p>
                            </div>
                        </div>
                    </div>
                    <div class="container__customer--parent"
                        style="margin: 0;padding: 0;box-sizing: border-box;border: double 2px transparent;border-radius: 10px;background-image: linear-gradient(white, white), linear-gradient(to right, #3a4ed5, #3acfd5);border-style: solid;background-origin: border-box;background-clip: content-box, border-box;margin-bottom: 4rem;">
                        <div class="conatiner__details--customer--heading"
                            style="margin: 0;padding: 0.5rem 1.3rem;box-sizing: border-box;position: absolute;font-size: 1.4rem;font-weight: 600;margin-top: -20px;margin-left: -2px;background-color: #2F52E0;color: var(--white);border-radius: 10px;">
                            Insurance Details
                        </div>
                        <div class="conatiner__details--customer"
                            style="margin: 0;padding: 0;box-sizing: border-box;display: grid;grid-template-columns: repeat(3, 1fr);position: relative;margin-top: 1.5rem;">
                            <div class="conatiner__details--customer--details"
                                style="margin: 0;padding: 1rem;box-sizing: border-box;text-align: start;">
                                <p class="conatiner__details--customer--details--heading"
                                    style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;">
                                    Certificate No.:</p>
                                <p class="conatiner__details--customer--details--subheading"
                                    style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;color: grey;">
                                    XXXXXX XXXXXX</p>
                            </div>
                            <div class="conatiner__details--customer--details"
                                style="margin: 0;padding: 1rem;box-sizing: border-box;text-align: start;">
                                <p class="conatiner__details--customer--details--heading"
                                    style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;">
                                    Nominee:</p>
                                <p class="conatiner__details--customer--details--subheading"
                                    style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;color: grey;">
                                    Name here</p>
                            </div>
                            <div class="conatiner__details--customer--details"
                                style="margin: 0;padding: 1rem;box-sizing: border-box;text-align: start;">
                                <p class="conatiner__details--customer--details--heading"
                                    style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;">
                                    Policy Start Date:</p>
                                <p class="conatiner__details--customer--details--subheading"
                                    style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;color: grey;">
                                    29/06/1990 | 00.01</p>
                            </div>
                            <div class="conatiner__details--customer--details"
                                style="margin: 0;padding: 1rem;box-sizing: border-box;text-align: start;">
                                <p class="conatiner__details--customer--details--heading"
                                    style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;">
                                    Region:</p>
                                <p class="conatiner__details--customer--details--subheading"
                                    style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;color: grey;">
                                    Worldwide</p>
                            </div>
                            <div class="conatiner__details--customer--details"
                                style="margin: 0;padding: 1rem;box-sizing: border-box;text-align: start;">
                                <p class="conatiner__details--customer--details--heading"
                                    style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;">
                                    Issue Date:</p>
                                <p class="conatiner__details--customer--details--subheading"
                                    style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;color: grey;">
                                    29/06/1990</p>
                            </div>
                            <div class="conatiner__details--customer--details"
                                style="margin: 0;padding: 1rem;box-sizing: border-box;text-align: start;">
                                <p class="conatiner__details--customer--details--heading"
                                    style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;">
                                    Policy End Date:</p>
                                <p class="conatiner__details--customer--details--subheading"
                                    style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;color: grey;">
                                    29/06/1990 | 20.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pec"
                    style="margin: 0 0;padding: 1.5vw 4vw;box-sizing: border-box;width: 100%;background-color: var(--gray);text-align: justify;">
                    <h3 class="pec__title"
                        style="margin: 0;padding: 0;box-sizing: border-box;color: #59595C;font-weight: 700;font-size: 1.1rem;margin-bottom: 0.8rem;">
                        Plese Note:</h3>
                    <ol style="margin: 0;padding: 0;box-sizing: border-box;">
                        <li class="pec__text"
                            style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1rem;color: #323F4F;">The
                            Group Travel Protect Insurance Policy no. 102-74-24-0000110-000
                            has been
                            issued to the Master Policy Holder Tripjack Pvt. Ltd., by Aditya Birla Health Insurance
                            Company.
                            This policy is for Indian citizens who are customers of Tripjack and is governed by the
                            terms,
                            conditions and exclusions therein contained in the said policy. </li>
                        <li class="pec__text"
                            style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1rem;color: #323F4F;">Aditya
                            Birla Health Insurance company has received an amount of Rs.
                            XX.XX
                            (inclusive of GST) towards covering the risk benefits on behalf of the Insured Person.
                        </li>
                        <li class="pec__text"
                            style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1rem;color: #323F4F;">The
                            coverage has been provided basis information provided by
                            you/proposer to
                            us and the policy is not valid, if any of the information provided is incorrect. </li>
                        <li class="pec__text"
                            style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1rem;color: #323F4F;">This
                            policy is subject to the standard policy wordings, warranties,
                            exclusions
                            and conditions as per ABHI’s “Group Travel Protect” policy wordings.</li>
                        <li class="pec__text"
                            style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1rem;color: #323F4F;">Premium
                            shall not be refunded in case of any claims being paid under
                            the
                            policy. </li>
                    </ol>
                </div>
                <div class="table__section"
                    style="margin: 0;padding: 0;box-sizing: border-box;height: auto;position: relative;">
                    <div class="table__section__heading"
                        style="margin: 0;padding: 0.5rem 1rem;box-sizing: border-box;font-size: 1.4rem;font-weight: 600;border-radius: 20px 20px 0 0;background-color: #2F52E0;color: var(--white);width: fit-content;position: absolute;margin-bottom: 40px;margin-left: 4rem;top: -2.7rem;height: 4rem;">
                        <p style="margin: 0;padding: 0;box-sizing: border-box;">Insurance Coverage: US$ 100,000</p>
                    </div>
                    <div class="table__parent__container"
                        style="margin: 4rem;padding: 0;box-sizing: border-box;position: relative;height: auto;border-left: 1px solid #3acfd5;border-right: 1px solid #3acfd5;border-radius: 22px;">
                        <div class="container__table"
                            style="margin: 0;padding: 0;box-sizing: border-box;display: grid;grid-template-columns: 3fr 1fr 1fr;text-align: center;">
                            <div class="table__heading"
                                style="margin: 0;padding: 0.5rem 0;box-sizing: border-box;border-radius: 19px 0 0 19px;background-color: #3acfd5;font-size: 1.4rem;font-weight: 600;border-right: 1px solid #209bb3;">
                                Benefits</div>
                            <div class="table__heading"
                                style="margin: 0;padding: 0.5rem 0;box-sizing: border-box;border-radius: 0;background-color: #3acfd5;font-size: 1.4rem;font-weight: 600;border-right: 1px solid #209bb3;">
                                Coverage (USD)</div>
                            <div class="table__heading"
                                style="margin: 0;padding: 0.5rem 0;box-sizing: border-box;border-radius: 0 19px 19px 0;background-color: #3acfd5;font-size: 1.4rem;font-weight: 600;border-left: 1px solid #3acfd5;">
                                Deductible</div>








                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;border-top: 0px solid white;">
                                In-patient care for Illness and Injury with Day Care Treatment
                            </div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;border-top: 1px solid white;">
                                $100,000</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 0px;font-size: 1rem;font-weight: 300;border-top: 1px solid white;">
                                $100</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                Automatic Extension</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                Up to 7 days</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 0px;font-size: 1rem;font-weight: 300;">
                                Nil</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                Outpatient Care</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                $20,000</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 0px;font-size: 1rem;font-weight: 300;">
                                $100</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                Daily Allowance</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                NA</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 0px;font-size: 1rem;font-weight: 300;">
                                2 Days</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                Medical Evacuation</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                $20,000</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 0px;font-size: 1rem;font-weight: 300;">
                                $100</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                Repatriation of Mortal Remains</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                $20,000</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 0px;font-size: 1rem;font-weight: 300;">
                                Nil</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                Dental Expenses</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                $400</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 0px;font-size: 1rem;font-weight: 300;">
                                $50</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                Personal Accident (AD, PTD, PPD)</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                $25,000</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 0px;font-size: 1rem;font-weight: 300;">
                                Nil</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                Personal Accident (Common Carrier) - AD, PTD, PPD</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                $5,000</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 0px;font-size: 1rem;font-weight: 300;">
                                Nil</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                Loss of Passport</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                $300</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 0px;font-size: 1rem;font-weight: 300;">
                                $50</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                Trip Cancellation/Trip Interruption/Trip Curtailment</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                $1,500</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 0px;font-size: 1rem;font-weight: 300;">
                                $100</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                Loss of Checked-in Baggage</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                $1,000</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 0px;font-size: 1rem;font-weight: 300;">
                                $100</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                Delay of Checked-in Baggage</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                $100</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 0px;font-size: 1rem;font-weight: 300;">
                                6 Hours</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                Hotel Over Booking </div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                NA</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 0px;font-size: 1rem;font-weight: 300;">
                                USD 50</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                Return of Minor Child</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                NA</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 0px;font-size: 1rem;font-weight: 300;">
                                Nill</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                Hijack distress allowance</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                NA</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 0px;font-size: 1rem;font-weight: 300;">
                                6 Hours</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                Identity Document Theft / Loss</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                USD 300</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 0px;font-size: 1rem;font-weight: 300;">
                                Nill</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                Trip Delay</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                $300</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 0px;font-size: 1rem;font-weight: 300;">
                                6 Hours</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                Missed Connection</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                $750</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 0px;font-size: 1rem;font-weight: 300;">
                                6 Hours</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                Mugging Cover</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                $200</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 0px;font-size: 1rem;font-weight: 300;">
                                Nil</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                Compassionate visit </div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                $750</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 0px;font-size: 1rem;font-weight: 300;">
                                Nil</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                Adventure Sports Injury</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                $20,000</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 0px;font-size: 1rem;font-weight: 300;">
                                $100</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                Cruise cover</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 1px solid #3acfd5;font-size: 1rem;font-weight: 300;">
                                NA</div>
                            <div class="table__content"
                                style="margin: 0;padding: 0.3rem 0;box-sizing: border-box;border-bottom: 1px solid #3acfd5;border-right: 0px;font-size: 1rem;font-weight: 300;border-radius: 0 0 20px 0;">
                                Nil</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div id="page3" style="padding: 0;box-sizing: border-box;width: 100%;">
            <div class="container" style="margin: 2rem auto;padding: 0;box-sizing: border-box;width: 85%;">
                <h3 class="container__title"
                    style="margin: 0;padding: 0;box-sizing: border-box;color: var(--primary-blue);font-size: 1.2rem;margin-bottom: 1rem;">
                    If you are above the Age of 50</h3>

                <!-- <div>
                <table class="container__table">
                    <tbody>
                        <tr>
                            <div class="container__table__heading">
                                <h4 class="container__table__heading__title">SUBLIMITS APPLICABLE - FROM 50 YEARS ONWARDS
                                </h4>
                            </div>
                        </tr>
                        <tr>
                            <td>Room Rent including Boarding lodging</td>
                            <td>$1500/day up to 30 days</td>
                        </tr>
                        <tr>
                            <td>Intensive Care unit</td>
                            <td>$2000/day up to 7 days</td>
                        </tr>
                        <tr>
                            <td>Operation Theatre charges (Inclusive surgeon charges)</td>
                            <td>Maximum up to $7500</td>
                        </tr>
                        <tr>
                            <td>Anesthetist services</td>
                            <td>Up to 25% of Surgical Treatment</td>
                        </tr>
                        <tr>
                            <td>Physician Visit</td>
                            <td>Max $75/day up to 10 visits</td>
                        </tr>
                        <tr>
                            <td>Diagnostic and Radiology services</td>
                            <td>Up to $500</td>
                        </tr>
                        <tr>
                            <td>Ambulance Services</td>
                            <td>Max up to $300</td>
                        </tr>
                        <tr>
                            <td>Hospital Miscellaneous Expenses</td>
                            <td>Maximum of $1000</td>
                        </tr>
                    </tbody>
                </table>
            </div> -->

                <div style="margin: 0;padding: 0;box-sizing: border-box;">
                    <div class="container__table__heading"
                        style="margin: 0;padding: 0;box-sizing: border-box;text-align: center;color: #323F4F;font-size: 1rem;border: 1px solid #5ED0E6;border-bottom: none;border-top: none;border-radius: 0.5rem 0.5rem 0 0;">
                        <h4 class="container__table__heading__title"
                            style="margin: 0;padding: 1.5vw 0;box-sizing: border-box;border-radius: 0.5rem;background-color: #5ED0E6;">
                            SUBLIMITS APPLICABLE - FROM 50 YEARS ONWARDS
                        </h4>
                    </div>
                    <div class="grid"
                        style="margin: 0;padding: 0;box-sizing: border-box;display: grid;grid-template-columns: repeat(2, 1fr);border-right: 1px solid #5ED0E6;border-radius: 0 0 0.8rem 0.8rem;">
                        <span
                            style="margin: 0;padding: 1vw 3vw;box-sizing: border-box;border-left: 1px solid #5ED0E6;border-bottom: 1px solid #5ED0E6;">Room
                            Rent including Boarding lodging</span>
                        <span
                            style="margin: 0;padding: 1vw 3vw;box-sizing: border-box;border-left: 1px solid #5ED0E6;border-bottom: 1px solid #5ED0E6;">$1500/day
                            up to 30 days</span>
                        <span
                            style="margin: 0;padding: 1vw 3vw;box-sizing: border-box;border-left: 1px solid #5ED0E6;border-bottom: 1px solid #5ED0E6;">Intensive
                            Care unit</span>
                        <span
                            style="margin: 0;padding: 1vw 3vw;box-sizing: border-box;border-left: 1px solid #5ED0E6;border-bottom: 1px solid #5ED0E6;">$2000/day
                            up to 7 days</span>
                        <span
                            style="margin: 0;padding: 1vw 3vw;box-sizing: border-box;border-left: 1px solid #5ED0E6;border-bottom: 1px solid #5ED0E6;">Operation
                            Theatre charges (Inclusive surgeon charges)</span>
                        <span
                            style="margin: 0;padding: 1vw 3vw;box-sizing: border-box;border-left: 1px solid #5ED0E6;border-bottom: 1px solid #5ED0E6;">Maximum
                            up to $7500</span>
                        <span
                            style="margin: 0;padding: 1vw 3vw;box-sizing: border-box;border-left: 1px solid #5ED0E6;border-bottom: 1px solid #5ED0E6;">Anesthetist
                            services</span>
                        <span
                            style="margin: 0;padding: 1vw 3vw;box-sizing: border-box;border-left: 1px solid #5ED0E6;border-bottom: 1px solid #5ED0E6;">Up
                            to 25% of Surgical Treatment</span>
                        <span
                            style="margin: 0;padding: 1vw 3vw;box-sizing: border-box;border-left: 1px solid #5ED0E6;border-bottom: 1px solid #5ED0E6;">Physician
                            Visit</span>
                        <span
                            style="margin: 0;padding: 1vw 3vw;box-sizing: border-box;border-left: 1px solid #5ED0E6;border-bottom: 1px solid #5ED0E6;">Max
                            $75/day up to 10 visits</span>
                        <span
                            style="margin: 0;padding: 1vw 3vw;box-sizing: border-box;border-left: 1px solid #5ED0E6;border-bottom: 1px solid #5ED0E6;">Diagnostic
                            and Radiology services</span>
                        <span
                            style="margin: 0;padding: 1vw 3vw;box-sizing: border-box;border-left: 1px solid #5ED0E6;border-bottom: 1px solid #5ED0E6;">Up
                            to $500</span>
                        <span
                            style="margin: 0;padding: 1vw 3vw;box-sizing: border-box;border-left: 1px solid #5ED0E6;border-bottom: 1px solid #5ED0E6;">Ambulance
                            Services</span>
                        <span
                            style="margin: 0;padding: 1vw 3vw;box-sizing: border-box;border-left: 1px solid #5ED0E6;border-bottom: 1px solid #5ED0E6;">Max
                            up to $300</span>
                        <span
                            style="margin: 0;padding: 1vw 3vw;box-sizing: border-box;border-left: 1px solid #5ED0E6;border-bottom: 1px solid #5ED0E6;">Hospital
                            Miscellaneous Expenses</span>
                        <span
                            style="margin: 0;padding: 1vw 3vw;box-sizing: border-box;border-left: 1px solid #5ED0E6;border-bottom: 1px solid #5ED0E6;border-radius: 0 0 0.8rem 0;">Maximum
                            of $1000</span>
                    </div>
                </div>
            </div>

            <div class="pec"
                style="margin: 1rem 0;padding: 3vw 5vw;box-sizing: border-box;width: 100%;background-color: var(--gray);text-align: justify;">
                <h3 class="pec__title"
                    style="margin: 0;padding: 0;box-sizing: border-box;color: #59595C;font-weight: 700;font-size: 1.1rem;margin-bottom: 0.8rem;">
                    Pre-existing Conditions:</h3>
                <p class="pec__text"
                    style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1rem;color: #323F4F;">Pre-existing
                    condition(s) are excluded from the policy including but not limited to
                    unforeseen emergency measures to save the Insured/Insured person’s life. For those up to age 80,
                    this
                    exclusion has been waived to the extent of $5000 per policy or up to 10% of Medical Sum Insured
                    whichever is
                    lesser & limited to applicable section. For those between the ages of 81 and 85, this exclusion has
                    been
                    waived to the extent of $1500 per policy.</p>
            </div>

            <div class="coverage" style="margin: 2rem auto;padding: 2vw 1vw;box-sizing: border-box;width: 90%;">
                <h3 class="coverage__title"
                    style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.3rem;color: var(--primary-blue);margin-bottom: 1rem;">
                    Your Coverage in a nutshell…</h3>
                <div class="coverage__container"
                    style="margin: 0;padding: 0;box-sizing: border-box;border-radius: 6px;overflow: hidden;">
                    <div class="coverage__container__covers"
                        style="margin: 0;padding: 0 1rem;box-sizing: border-box;-o-border-image: linear-gradient(to right, #3acfd5 0%, #3a4ed5 100%) 1;border-image: linear-gradient(to right, #3acfd5 0%, #3a4ed5 100%) 1;border-width: 4px;border-style: solid;">
                        <div class="coverage__container__covers_item"
                            style="margin: 2rem 0;padding: 0;box-sizing: border-box;display: flex;align-items: flex-start;gap: 2rem;">
                            <img src="https://static.technogramsolutions.com/insurance/coi/assets/medical.svg" alt="shield"
                                style="margin: 0;padding: 0;box-sizing: border-box;width: 3rem;height: 3rem;">
                            <div class="coverage__container__covers_item__details"
                                style="margin: 0;padding: 0;box-sizing: border-box;">
                                <h3 style="margin: 0;padding: 0;box-sizing: border-box;">Medical Covers</h3>
                                <div style="margin: 0;padding: 0;box-sizing: border-box;">
                                    <ul class="coverage__container__covers_item__details__list"
                                        style="margin: 0;padding: 0;box-sizing: border-box;">
                                        <li
                                            style="margin: 0;padding: 0;box-sizing: border-box;text-align: justify;color: #323F4F;font-weight: 300;">
                                            You are covered for hospitalization or outpatient care, up to the respective
                                            medical
                                            sum insured, if you are diagnosed with any unplanned emergency or illness
                                            during
                                            a
                                            trip, that is not due to a pre-existing health condition. </li>
                                        <li
                                            style="margin: 0;padding: 0;box-sizing: border-box;text-align: justify;color: #323F4F;font-weight: 300;">
                                            The medical evacuation benefit covers costs of medically prescribed
                                            transportation/evacuation from the location of the incident to the original
                                            place of
                                            residence or the nearest hospital. </li>
                                        <li
                                            style="margin: 0;padding: 0;box-sizing: border-box;text-align: justify;color: #323F4F;font-weight: 300;">
                                            You are also covered for any unexpected dental emergency on the trip. What
                                            is
                                            pre-existing condition? Simple. It means a medical condition that was
                                            diagnosed
                                            before purchasing this policy. Some examples include High BP, Cancer,
                                            Diabetes,
                                            Asthma, Thyroid etc. </li>
                                        <li
                                            style="margin: 0;padding: 0;box-sizing: border-box;text-align: justify;color: #323F4F;font-weight: 300;">
                                            Any medical assistance needed due to injuries sustained while participating
                                            in
                                            adventure sports activities will also be covered for those between the ages
                                            of
                                            18
                                            and 55.</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div class="coverage__container__covers_item"
                            style="margin: 2rem 0;padding: 0;box-sizing: border-box;display: flex;align-items: flex-start;gap: 2rem;">
                            <img src="https://static.technogramsolutions.com/insurance/coi/assets/shield.svg" alt="shield"
                                style="margin: 0;padding: 0;box-sizing: border-box;width: 3rem;height: 3rem;">
                            <div class="coverage__container__covers_item__details"
                                style="margin: 0;padding: 0;box-sizing: border-box;">
                                <h3 style="margin: 0;padding: 0;box-sizing: border-box;">Benefit Covers</h3>
                                <div style="margin: 0;padding: 0;box-sizing: border-box;">
                                    <ul class="coverage__container__covers_item__details__list"
                                        style="margin: 0;padding: 0;box-sizing: border-box;">
                                        <li
                                            style="margin: 0;padding: 0;box-sizing: border-box;text-align: justify;color: #323F4F;font-weight: 300;">
                                            You are covered under benefit covers like Personal Accident, Accidental
                                            Death
                                            (AD)
                                            which offers financial support in case of an accidental death during the
                                            trip.
                                        </li>
                                        <li
                                            style="margin: 0;padding: 0;box-sizing: border-box;text-align: justify;color: #323F4F;font-weight: 300;">
                                            Other benefit covers include Permanent Total Disability (PTD) and Permanent
                                            Partial
                                            Disability (PPD) which offer financial support for accidental body injury or
                                            death
                                            during the trip which requires urgent and immediate medical attention.</li>

                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div class="coverage__container__covers_item"
                            style="margin: 2rem 0;padding: 0;box-sizing: border-box;display: flex;align-items: flex-start;gap: 2rem;">
                            <img src="https://static.technogramsolutions.com/insurance/coi/assets/flight.svg" alt="shield"
                                style="margin: 0;padding: 0;box-sizing: border-box;width: 3rem;height: 3rem;">
                            <div class="coverage__container__covers_item__details"
                                style="margin: 0;padding: 0;box-sizing: border-box;">
                                <h3 style="margin: 0;padding: 0;box-sizing: border-box;">Trip related covers</h3>
                                <div style="margin: 0;padding: 0;box-sizing: border-box;">
                                    <ul class="coverage__container__covers_item__details__list"
                                        style="margin: 0;padding: 0;box-sizing: border-box;">
                                        <li
                                            style="margin: 0;padding: 0;box-sizing: border-box;text-align: justify;color: #323F4F;font-weight: 300;">
                                            You are covered if your Trip is cancelled, due to serious illness, injury,
                                            extreme
                                            weather, or an accident.</li>
                                        <li
                                            style="margin: 0;padding: 0;box-sizing: border-box;text-align: justify;color: #323F4F;font-weight: 300;">
                                            You will be Reimbursed meal and lodging expenses if the common carrier is
                                            delayed.
                                            Reimbursement of expenses incurred if passenger misses a connection due to
                                            delay
                                            or
                                            cancellation of a prior connecting common carrier and subject to the time
                                            excess
                                            being met.</li>
                                        <li
                                            style="margin: 0;padding: 0;box-sizing: border-box;text-align: justify;color: #323F4F;font-weight: 300;">
                                            You will be reimbursed for loss or delay in arrival of your checked in bag.
                                        </li>
                                        <li
                                            style="margin: 0;padding: 0;box-sizing: border-box;text-align: justify;color: #323F4F;font-weight: 300;">
                                            The policy also covers the cost incurred in getting a duplicate passport or
                                            travel
                                            documents during the trip if the same gets lost due to unforeseen events and
                                            offers
                                            a payout in case of loss of funds due to mugging.</li>

                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div class="footer"
                style="margin: 0;padding: 5vw 5vw 3vw 5vw;box-sizing: border-box;background-color: var(--dark-blue);border-radius: 2rem 2rem 0 0;color: var(--white);line-height: 30px;">
                <div class="footer__info"
                    style="margin: 0;padding: 0;box-sizing: border-box;display: flex;gap: 3vw;flex-wrap: wrap;">
                    <div class="footer__info__details" style="margin: 0;padding: 0;box-sizing: border-box;flex: 1;">
                        <h3 class="footer__info__details__heading"
                            style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;">Grievance Details
                        </h3>
                        <p class="footer__info__details__text"
                            style="margin: 0;padding: 0;box-sizing: border-box;color: #7CE9FF;">In case of a grievance,
                            the Insured Person/ Policyholder
                            can
                            contact on the below details:</p>
                        <ul class="footer__info__details__list"
                            style="margin: 0;padding: 0;box-sizing: border-box;list-style: none;font-size: 0.8rem;">
                            <li class="footer__info__details__list__item"
                                style="margin: 0;padding: 0;box-sizing: border-box;display: flex;align-items: center;">
                                <img class="footer__info__details__list__item__icon" src="https://static.technogramsolutions.com/insurance/coi/assets/website.svg"
                                    alt="website"
                                    style="margin: 0;padding: 0;box-sizing: border-box;width: 20px;height: 20px;margin-right: 10px;">
                                <a class="footer__info__details__list__item__link" href="www.adityabirlacapital.com"
                                    target="_blank"
                                    style="margin: 0;padding: 0;box-sizing: border-box;color: var(--white);text-decoration: underline;text-underline-offset: 4px;">www.adityabirlacapital.com</a>
                            </li>
                            <li class="footer__info__details__list__item"
                                style="margin: 0;padding: 0;box-sizing: border-box;display: flex;align-items: center;">
                                <img class="footer__info__details__list__item__icon" src="assets/email.svg"
                                    alt="website"
                                    style="margin: 0;padding: 0;box-sizing: border-box;width: 20px;height: 20px;margin-right: 10px;">
                                <a class="footer__info__details__list__item__link"
                                    href="mailto:care.healthinsurance@adityabirlacapital.com" target="_blank"
                                    style="margin: 0;padding: 0;box-sizing: border-box;color: var(--white);text-decoration: underline;text-underline-offset: 4px;">care.healthinsurance@adityabirlacapital.com</a>
                            </li>
                            <li class="footer__info__details__list__item"
                                style="margin: 0;padding: 0;box-sizing: border-box;display: flex;align-items: center;">
                                <img class="footer__info__details__list__item__icon" src="https://static.technogramsolutions.com/insurance/coi/assets/phone-white.svg"
                                    alt="website"
                                    style="margin: 0;padding: 0;box-sizing: border-box;width: 20px;height: 20px;margin-right: 10px;">
                                <a class="footer__info__details__list__item__link" href="tel:18002707000"
                                    target="_blank"
                                    style="margin: 0;padding: 0;box-sizing: border-box;color: var(--white);text-decoration: underline;text-underline-offset: 4px;">Toll
                                    Free - 1800 270 7000</a>
                            </li>
                        </ul>
                        <p class="footer__info__details__para"
                            style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1rem;">
                            For senior citizens, please contact respective branch office or call at <span
                                style="margin: 0;padding: 0;box-sizing: border-box;font-weight: 700;line-gap-override: 0.5rem;">1800
                                270
                                7000</span>
                            or write an e - mail at
                            <span
                                style="margin: 0;padding: 0;box-sizing: border-box;font-weight: 700;line-gap-override: 0.5rem;">
                                <a href="mailto:seniorcitizen.healthinsurance@adityabirlacapital.com"
                                    style="margin: 0;padding: 0;box-sizing: border-box;color: var(--white);">seniorcitizen.
                                    healthinsurance@adityabirlacapital .com</a>
                            </span>
                        </p>
                    </div>
                    <div class="footer__info__assistance"
                        style="margin: 0;padding: 0;box-sizing: border-box;border-radius: 0.8rem;border: 2px solid var(--white);overflow: hidden;border-top: none;">
                        <h3 class="footer__info__assistance__heading"
                            style="margin: 0;padding: 1vw 2vw;box-sizing: border-box;background-color: #11B3D8;font-size: 1.5rem;border-radius: 0.8rem;border-top: 2px solid var(--white);border-bottom: 2px solid var(--white);">
                            24 x 7 CLAIMS ASSISTANCE</h3>
                        <ul class="footer__info__assistance__list"
                            style="margin: 0;padding: 1vw 1.5vw;box-sizing: border-box;list-style: none;font-size: 1rem;">
                            <li class="footer__info__assistance__list__item"
                                style="margin: 0;padding: 0;box-sizing: border-box;display: flex;align-items: center;">
                                <img class="footer__info__assistance__list__item__icon" src="https://static.technogramsolutions.com/insurance/coi/assets/user.svg"
                                    alt="website"
                                    style="margin: 0;padding: 0;box-sizing: border-box;width: 20px;height: 20px;margin-right: 10px;">

                                <p style="margin: 0;padding: 0;box-sizing: border-box;">Falck Global Assistance</p>
                            </li>
                            <li class="footer__info__assistance__list__item"
                                style="margin: 0;padding: 0;box-sizing: border-box;display: flex;align-items: center;">
                                <img class="footer__info__assistance__list__item__icon" src="https://static.technogramsolutions.com/insurance/coi/assets/email.svg"
                                    alt="website"
                                    style="margin: 0;padding: 0;box-sizing: border-box;width: 20px;height: 20px;margin-right: 10px;">
                                <a class="footer__info__assistance__list__item__link"
                                    href="mailto:adityabirlainsurance@falck.com" target="_blank"
                                    style="margin: 0;padding: 0;box-sizing: border-box;color: var(--white);text-decoration: underline;text-underline-offset: 4px;">
                                    adityabirlainsurance@falck.com</a>
                            </li>
                            <li class="footer__info__assistance__list__item"
                                style="margin: 0;padding: 0;box-sizing: border-box;display: flex;align-items: center;">
                                <img class="footer__info__assistance__list__item__icon" src="https://static.technogramsolutions.com/insurance/coi/assets/phone-white.svg"
                                    alt="website"
                                    style="margin: 0;padding: 0;box-sizing: border-box;width: 20px;height: 20px;margin-right: 10px;">
                                <a class="footer__info__assistance__list__item__link" href="tel:+9112444498777"
                                    target="_blank"
                                    style="margin: 0;padding: 0;box-sizing: border-box;color: var(--white);text-decoration: underline;text-underline-offset: 4px;">+91-124-44498777</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer__policy" style="margin: 0;padding: 0;box-sizing: border-box;margin-top: 1rem;">
                    <p class="footer__policy__para"
                        style="margin: 0;padding: 0;box-sizing: border-box;text-align: justify;font-size: 0.9rem;">
                        Please read the detailed policy terms and conditions to understand
                        the
                        benefits, exclusions, and claims process <a
                            href="https://tripsafe.in/ABHIGroupTravelProtect.pdf"
                            style="margin: 0;padding: 0;box-sizing: border-box;color: #11B3D8;text-decoration: underline;text-underline-offset: 4px;">here</a>
                        with or paste the link
                        https://tripsafe.in/ABHIGroupTravelProtect.pdf on your browser.</p>
                </div>

            </div>
        </div>

        <div id="page4" style="padding: 0;box-sizing: border-box;width: 100%;">
            <header class="header"
                style="margin: 0;padding: 0;box-sizing: border-box;width: 100%;display: flex;gap: 1rem;background-color: var(--primary-blue);color: var(--white);">
                <div class="header__logo"
                    style="margin: 0;padding: 2rem 3rem;box-sizing: border-box;background-color: #F2EFEF;border-radius: 0 0.8rem 0.8rem 0;flex: 1;">
                    <img class="header__logo__image" src="https://static.technogramsolutions.com/insurance/coi/assets/logo.svg" alt="logo"
                        style="margin: 0;padding: 0;box-sizing: border-box;width: 25rem;height: 5rem;">
                </div>
                <div class="header__info"
                    style="margin: 0;padding: 1rem 3rem 1rem 1rem;box-sizing: border-box;flex: 2;font-size: 1.5rem;">
                    <div class="header__info__text" style="margin: 0;padding: 0;box-sizing: border-box;">
                        <p class="header__info__text__heading"
                            style="margin: 0;padding: 0;box-sizing: border-box;display: flex;align-items: center;gap: 0.5rem;">
                            <img class="header__info__text__heading__icon" src="https://static.technogramsolutions.com/insurance/coi/assets/website.svg" alt="web"
                                style="margin: 0;padding: 0;box-sizing: border-box;width: 1.5rem;">24 x 7
                            Global
                            Assistance by Across Assist
                        </p>
                        <div class="header__info__text__details"
                            style="margin: 1rem 0;padding: 0;box-sizing: border-box;border: 1px solid var(--white);border-radius: 0.8rem;display: flex;gap: 1rem;align-items: center;">
                            <div class="header__info__text__details__number"
                                style="margin: 0;padding: 1rem;box-sizing: border-box;display: flex;gap: 0.5rem;align-items: center;background-color: var(--white);color: var(--primary-blue);border-radius: 0.8rem;">
                                <img src="https://static.technogramsolutions.com/insurance/coi/assets/phone.svg" alt="phone"
                                    style="margin: 0;padding: 0;box-sizing: border-box;width: 1.2rem;">9999999999
                            </div>
                            <p class="header__info__text__details__para"
                                style="margin: 0;padding: 0.5rem;box-sizing: border-box;font-size: 1rem;">A
                                round-the-clock travel hotline available to
                                provide
                                you with emergency as well as
                                travel-related assistance services.</p>
                        </div>
                    </div>
                </div>
            </header>

            <div class="container"
                style="margin: 3rem auto;padding: 0;box-sizing: border-box;width: 90%;position: relative;">
                <div class="customer"
                    style="margin: 0;padding: 0;box-sizing: border-box;border: double 2px transparent;border-radius: 10px;background-image: linear-gradient(var(--white), var(--white)), linear-gradient(to right, #3a4ed5, #3acfd5);border-style: solid;background-origin: border-box;background-clip: content-box, border-box;">
                    <div class="customer___heading"
                        style="margin: 0;padding: 0.5rem 1.3rem;box-sizing: border-box;position: absolute;font-size: 1.4rem;font-weight: 600;margin-top: -20px;margin-left: -2px;background-color: #2F52E0;color: var(--white);border-radius: 10px;">
                        Details
                    </div>
                    <div class="customer__details"
                        style="margin: 0;padding: 0;box-sizing: border-box;display: grid;grid-template-columns: repeat(4, 1fr);position: relative;margin-top: 1.5rem;place-items: center;padding-bottom: 1rem;">
                        <div class="customer__details__item"
                            style="margin: 0;padding: 1rem;box-sizing: border-box;text-align: start;">
                            <p class="customer__details__heading"
                                style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;">
                                Your Across Assist ID:</p>
                            <p class="customer__details__subheading"
                                style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;color: #808080;">
                                XXXXXX XXXXXX</p>
                        </div>
                        <div class="customer__details__item"
                            style="margin: 0;padding: 1rem;box-sizing: border-box;text-align: start;">
                            <p class="customer__details__heading"
                                style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;">
                                Region:</p>
                            <p class="customer__details__subheading"
                                style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;color: #808080;">
                                Worldwide</p>
                        </div>
                        <div class="customer__details___item" style="margin: 0;padding: 0;box-sizing: border-box;">
                            <p class="customer__details__heading"
                                style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;">
                                Start Date:</p>
                            <p class="customer__details__subheading"
                                style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;color: #808080;">
                                27/08/2025</p>
                        </div>
                        <div class="customer__details__item"
                            style="margin: 0;padding: 1rem;box-sizing: border-box;text-align: start;">
                            <p class="customer__details__heading"
                                style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;">
                                End Date:</p>
                            <p class="customer__details__subheading"
                                style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;color: #808080;">
                                1/09/2025</p>
                        </div>
                    </div>
                </div>

                <div class="services" style="margin: 0;padding: 0;box-sizing: border-box;margin-bottom: 10rem;">
                    <h2 class="services__heading"
                        style="margin: 3rem 0;padding: 0;box-sizing: border-box;color: var(--primary-blue);font-size: 2rem;text-align: center;">
                        SERVICES INCLUDED</h2>

                    <div class="services__details" style="margin: 0;padding: 0;box-sizing: border-box;">
                        <div class="services__details__item"
                            style="margin: 0;padding: 0;box-sizing: border-box;margin-bottom: 3rem;">
                            <h3 class="services__details__heading"
                                style="margin: 0;padding: 0.8rem 1.5rem;box-sizing: border-box;color: var(--white);background-color: var(--dark-blue);font-size: 1.3rem;display: flex;align-items: center;gap: 1rem;width: max-content;border-radius: 1rem;margin-bottom: 1.5rem;">
                                <img class="services__details__heading__icon" src="https://static.technogramsolutions.com/insurance/coi/assets/headphone.svg"
                                    alt="insurance" style="margin: 0;padding: 0;box-sizing: border-box;width: 1.8rem;">
                                MEDICAL ASSISTANCE
                            </h3>
                            <div class="services__details__item__grid___container"
                                style="margin: 0;padding: 0;box-sizing: border-box;display: grid;grid-template-columns: repeat(3, 1fr);gap: 1.5rem;">
                                <div class="grid__item"
                                    style="margin: 0;padding: 2rem 1.5rem;box-sizing: border-box;background-color: #D7F7FF;border-radius: 0.5rem;z-index: 10;">
                                    <h3 class="grid__item__heading"
                                        style="margin: 0;padding: 0;box-sizing: border-box;color: var(--primary-blue);font-weight: 400;margin-bottom: 0.5rem;">
                                        Emergency Assistance</h3>
                                    <p class="grid__item__para" style="margin: 0;padding: 0;box-sizing: border-box;">
                                        Assistance with ambulance, paramedics, and emergencies
                                    </p>
                                </div>
                                <div class="grid__item"
                                    style="margin: 0;padding: 2rem 1.5rem;box-sizing: border-box;background-color: #D7F7FF;border-radius: 0.5rem;z-index: 10;">
                                    <h3 class="grid__item__heading"
                                        style="margin: 0;padding: 0;box-sizing: border-box;color: var(--primary-blue);font-weight: 400;margin-bottom: 0.5rem;">
                                        Doctor Tele Consultation</h3>
                                    <p class="grid__item__para" style="margin: 0;padding: 0;box-sizing: border-box;">
                                        Arrange calls with general physicians</p>
                                </div>
                                <div style="margin: 0;padding: 0;box-sizing: border-box;"></div>
                                <div class="grid__item"
                                    style="margin: 0;padding: 2rem 1.5rem;box-sizing: border-box;background-color: #D7F7FF;border-radius: 0.5rem;z-index: 10;">
                                    <h3 class="grid__item__heading"
                                        style="margin: 0;padding: 0;box-sizing: border-box;color: var(--primary-blue);font-weight: 400;margin-bottom: 0.5rem;">
                                        Doctor House Calls</h3>
                                    <p class="grid__item__para" style="margin: 0;padding: 0;box-sizing: border-box;">
                                        Arrange house visits by general physicians</p>
                                </div>
                                <div class="grid__item"
                                    style="margin: 0;padding: 2rem 1.5rem;box-sizing: border-box;background-color: #D7F7FF;border-radius: 0.5rem;z-index: 10;">
                                    <h3 class="grid__item__heading"
                                        style="margin: 0;padding: 0;box-sizing: border-box;color: var(--primary-blue);font-weight: 400;margin-bottom: 0.5rem;">
                                        Medical Service Provider Referral</h3>
                                    <p class="grid__item__para" style="margin: 0;padding: 0;box-sizing: border-box;">
                                        Provide contact details of relevant medical service
                                        providers
                                    </p>
                                </div>
                                <div style="margin: 0;padding: 0;box-sizing: border-box;"></div>
                            </div>
                        </div>
                        <div class="services__details__item"
                            style="margin: 0;padding: 0;box-sizing: border-box;margin-bottom: 3rem;">
                            <h3 class="services__details__heading"
                                style="margin: 0;padding: 0.8rem 1.5rem;box-sizing: border-box;color: var(--white);background-color: var(--dark-blue);font-size: 1.3rem;display: flex;align-items: center;gap: 1rem;width: max-content;border-radius: 1rem;margin-bottom: 1.5rem;">
                                <img class="services__details__heading__icon" src="https://static.technogramsolutions.com/insurance/coi/assets/headphones-air.svg"
                                    alt="insurance" style="margin: 0;padding: 0;box-sizing: border-box;width: 1.8rem;">
                                TRAVEL ASSISTANCE
                            </h3>
                            <div class="services__details__item__grid___container"
                                style="margin: 0;padding: 0;box-sizing: border-box;display: grid;grid-template-columns: repeat(3, 1fr);gap: 1.5rem;">
                                <div class="grid__item"
                                    style="margin: 0;padding: 2rem 1.5rem;box-sizing: border-box;background-color: #D7F7FF;border-radius: 0.5rem;z-index: 10;">
                                    <h3 class="grid__item__heading"
                                        style="margin: 0;padding: 0;box-sizing: border-box;color: var(--primary-blue);font-weight: 400;margin-bottom: 0.5rem;">
                                        Luggage Lost Assistance</h3>
                                    <p class="grid__item__para" style="margin: 0;padding: 0;box-sizing: border-box;">
                                        Help coordinate with airlines for missing luggage</p>
                                </div>
                                <div class="grid__item"
                                    style="margin: 0;padding: 2rem 1.5rem;box-sizing: border-box;background-color: #D7F7FF;border-radius: 0.5rem;z-index: 10;">
                                    <h3 class="grid__item__heading"
                                        style="margin: 0;padding: 0;box-sizing: border-box;color: var(--primary-blue);font-weight: 400;margin-bottom: 0.5rem;">
                                        Travel Alert Analyst</h3>
                                    <p class="grid__item__para" style="margin: 0;padding: 0;box-sizing: border-box;">
                                        Help with safety and security alerts for the requested
                                        destination</p>
                                </div>
                                <div style="margin: 0;padding: 0;box-sizing: border-box;"></div>
                                <div class="grid__item"
                                    style="margin: 0;padding: 2rem 1.5rem;box-sizing: border-box;background-color: #D7F7FF;border-radius: 0.5rem;z-index: 10;">
                                    <h3 class="grid__item__heading"
                                        style="margin: 0;padding: 0;box-sizing: border-box;color: var(--primary-blue);font-weight: 400;margin-bottom: 0.5rem;">
                                        Embassy Referral Services</h3>
                                    <p class="grid__item__para" style="margin: 0;padding: 0;box-sizing: border-box;">
                                        Provide contact information of consulates & embassies
                                    </p>
                                </div>
                                <div class="grid__item"
                                    style="margin: 0;padding: 2rem 1.5rem;box-sizing: border-box;background-color: #D7F7FF;border-radius: 0.5rem;z-index: 10;">
                                    <h3 class="grid__item__heading"
                                        style="margin: 0;padding: 0;box-sizing: border-box;color: var(--primary-blue);font-weight: 400;margin-bottom: 0.5rem;">
                                        Interpreter Referral Services</h3>
                                    <p class="grid__item__para" style="margin: 0;padding: 0;box-sizing: border-box;">
                                        Arrange interpreter for language barriers</p>
                                </div>
                                <div style="margin: 0;padding: 0;box-sizing: border-box;"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <img class="container__image" src="https://static.technogramsolutions.com/insurance/coi/assets/man-standing.svg" alt="standing man"
                    style="margin: 0;padding: 0;box-sizing: border-box;position: absolute;bottom: 0;right: 3rem;scale: 2;margin-bottom: 5%;">
            </div>

            <div class="footer"
                style="margin: 0;padding: 3rem 6rem 3rem 4rem;box-sizing: border-box;background-color: var(--gray);border-radius: 2rem 2rem 0 0;">
                <p class="footer__text" style="margin: 0;padding: 0;box-sizing: border-box;color: #59595C;"><strong
                        style="margin: 0;padding: 0;box-sizing: border-box;">NOTE:</strong> All assistance services
                    shall be provided over a call or
                    digitally. The actual
                    service charges or cost for the service availed will be borne by the end-user or customer.
                    <br style="margin: 0;padding: 0;box-sizing: border-box;">
                    <br style="margin: 0;padding: 0;box-sizing: border-box;">
                    The final selection of the service provider is the responsibility of the customer & Across Assist
                    shall
                    not be liable
                    for any consequences arising out of or howsoever caused by the services provided by the medical
                    service
                    provider, or other provider, so referred. For detailed Terms and Conditions, <a
                        href="https://tripsafe.in/AAInternationalTravelAssistance.pdf"
                        style="margin: 0;padding: 0;box-sizing: border-box;">visit here</a> or paste the link
                    https://tripsafe.in/AAInternationalTravelAssistance.pdf on your browser.
                </p>
            </div>
        </div>

        <div id="page5" style="padding: 0;box-sizing: border-box;width: 100%;">
            <header class="header"
                style="margin: 0;padding: 0;box-sizing: border-box;width: 100%;display: flex;gap: 1rem;background-color: var(--primary-blue);color: var(--white);">
                <div class="header__logo"
                    style="margin: 0;padding: 2rem 3rem;box-sizing: border-box;background-color: #F2EFEF;border-radius: 0 0.8rem 0.8rem 0;flex: 1;">
                    <img class="header__logo__image" src="https://static.technogramsolutions.com/insurance/coi/assets/logo.svg" alt="logo"
                        style="margin: 0;padding: 0;box-sizing: border-box;width: 25rem;height: 5rem;">
                </div>
                <div class="header__info"
                    style="margin: 0;padding: 1rem 3rem 1rem 1rem;box-sizing: border-box;flex: 2;font-size: 1.5rem;">
                    <div class="header__info__text" style="margin: 0;padding: 0;box-sizing: border-box;">
                        <p class="header__info__text__heading"
                            style="margin: 0;padding: 0;box-sizing: border-box;display: flex;align-items: center;gap: 0.5rem;">
                            <img class="header__info__text__heading__icon" src="https://static.technogramsolutions.com/insurance/coi/assets/website.svg" alt="web"
                                style="margin: 0;padding: 0;box-sizing: border-box;width: 1.5rem;">24 x 7
                            Global
                            Assistance by Across Assist
                        </p>
                        <div class="header__info__text__details"
                            style="margin: 1rem 0;padding: 0;box-sizing: border-box;border: 1px solid var(--white);border-radius: 0.8rem;display: flex;gap: 1rem;align-items: center;">
                            <div class="header__info__text__details__number"
                                style="margin: 0;padding: 1rem;box-sizing: border-box;display: flex;gap: 0.5rem;align-items: center;background-color: var(--white);color: var(--primary-blue);border-radius: 0.8rem;">
                                <img src="https://static.technogramsolutions.com/insurance/coi/assets/phone.svg" alt="phone"
                                    style="margin: 0;padding: 0;box-sizing: border-box;width: 1.2rem;">9999999999
                            </div>
                            <p class="header__info__text__details__para"
                                style="margin: 0;padding: 0.5rem;box-sizing: border-box;font-size: 1rem;">A
                                round-the-clock travel hotline available to
                                provide
                                you with emergency as well as
                                travel-related assistance services.</p>
                        </div>
                    </div>
                </div>
            </header>

            <div class="container"
                style="margin: 3rem auto;padding: 0;box-sizing: border-box;width: 90%;position: relative;">
                <div class="customer"
                    style="margin: 0;padding: 0;box-sizing: border-box;border: double 2px transparent;border-radius: 10px;background-image: linear-gradient(var(--white), var(--white)), linear-gradient(to right, #3a4ed5, #3acfd5);border-style: solid;background-origin: border-box;background-clip: content-box, border-box;">
                    <div class="customer___heading"
                        style="margin: 0;padding: 0.5rem 1.3rem;box-sizing: border-box;position: absolute;font-size: 1.4rem;font-weight: 600;margin-top: -20px;margin-left: -2px;background-color: #2F52E0;color: var(--white);border-radius: 10px;">
                        Details
                    </div>
                    <div class="customer__details"
                        style="margin: 0;padding: 0;box-sizing: border-box;display: grid;grid-template-columns: repeat(4, 1fr);position: relative;margin-top: 1.5rem;place-items: center;padding-bottom: 1rem;">
                        <div class="customer__details__item"
                            style="margin: 0;padding: 1rem;box-sizing: border-box;text-align: start;">
                            <p class="customer__details__heading"
                                style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;">
                                Your Across Assist ID:</p>
                            <p class="customer__details__subheading"
                                style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;color: #808080;">
                                XXXXXX XXXXXX</p>
                        </div>
                        <div class="customer__details__item"
                            style="margin: 0;padding: 1rem;box-sizing: border-box;text-align: start;">
                            <p class="customer__details__heading"
                                style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;">
                                Region:</p>
                            <p class="customer__details__subheading"
                                style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;color: #808080;">
                                Worldwide</p>
                        </div>
                        <div class="customer__details___item" style="margin: 0;padding: 0;box-sizing: border-box;">
                            <p class="customer__details__heading"
                                style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;">
                                Start Date:</p>
                            <p class="customer__details__subheading"
                                style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;color: #808080;">
                                27/08/2025</p>
                        </div>
                        <div class="customer__details__item"
                            style="margin: 0;padding: 1rem;box-sizing: border-box;text-align: start;">
                            <p class="customer__details__heading"
                                style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;">
                                End Date:</p>
                            <p class="customer__details__subheading"
                                style="margin: 0;padding: 0;box-sizing: border-box;font-size: 1.2rem;font-weight: 600;color: #808080;">
                                1/09/2025</p>
                        </div>
                    </div>
                </div>

                <div class="services" style="margin: 0;padding: 0;box-sizing: border-box;margin-bottom: 10rem;">
                    <h2 class="services__heading"
                        style="margin: 3rem 0;padding: 0;box-sizing: border-box;color: var(--primary-blue);font-size: 2rem;text-align: center;">
                        SERVICES INCLUDED</h2>

                    <div class="services__details" style="margin: 0;padding: 0;box-sizing: border-box;">
                        <div class="services__details__item"
                            style="margin: 0;padding: 0;box-sizing: border-box;margin-bottom: 3rem;">
                            <h3 class="services__details__heading"
                                style="margin: 0;padding: 0.8rem 1.5rem;box-sizing: border-box;color: var(--white);background-color: var(--dark-blue);font-size: 1.3rem;display: flex;align-items: center;gap: 1rem;width: max-content;border-radius: 1rem;margin-bottom: 1.5rem;">
                                <img class="services__details__heading__icon" src="https://static.technogramsolutions.com/insurance/coi/assets/headphone.svg"
                                    alt="insurance" style="margin: 0;padding: 0;box-sizing: border-box;width: 1.8rem;">
                                MEDICAL ASSISTANCE
                            </h3>
                            <div class="services__details__item__grid___container"
                                style="margin: 0;padding: 0;box-sizing: border-box;display: grid;grid-template-columns: repeat(3, 1fr);gap: 1.5rem;">
                                <div class="grid__item"
                                    style="margin: 0;padding: 2rem 1.5rem;box-sizing: border-box;background-color: #D7F7FF;border-radius: 0.5rem;z-index: 10;">
                                    <h3 class="grid__item__heading"
                                        style="margin: 0;padding: 0;box-sizing: border-box;color: var(--primary-blue);font-weight: 400;margin-bottom: 0.5rem;">
                                        Emergency Assistance</h3>
                                    <p class="grid__item__para" style="margin: 0;padding: 0;box-sizing: border-box;">
                                        Assistance with ambulance, paramedics, and emergencies
                                    </p>
                                </div>
                                <div class="grid__item"
                                    style="margin: 0;padding: 2rem 1.5rem;box-sizing: border-box;background-color: #D7F7FF;border-radius: 0.5rem;z-index: 10;">
                                    <h3 class="grid__item__heading"
                                        style="margin: 0;padding: 0;box-sizing: border-box;color: var(--primary-blue);font-weight: 400;margin-bottom: 0.5rem;">
                                        Doctor Tele Consultation</h3>
                                    <p class="grid__item__para" style="margin: 0;padding: 0;box-sizing: border-box;">
                                        Arrange calls with general physicians</p>
                                </div>
                                <div class="grid__item"
                                    style="margin: 0;padding: 2rem 1.5rem;box-sizing: border-box;background-color: #D7F7FF;border-radius: 0.5rem;z-index: 10;">
                                    <h3 class="grid__item__heading"
                                        style="margin: 0;padding: 0;box-sizing: border-box;color: var(--primary-blue);font-weight: 400;margin-bottom: 0.5rem;">
                                        Doctor House Calls</h3>
                                    <p class="grid__item__para" style="margin: 0;padding: 0;box-sizing: border-box;">
                                        Arrange house visits by general physicians</p>
                                </div>
                                <div class="grid__item"
                                    style="margin: 0;padding: 2rem 1.5rem;box-sizing: border-box;background-color: #D7F7FF;border-radius: 0.5rem;z-index: 10;">
                                    <h3 class="grid__item__heading"
                                        style="margin: 0;padding: 0;box-sizing: border-box;color: var(--primary-blue);font-weight: 400;margin-bottom: 0.5rem;">
                                        Medical Service Provider Referral</h3>
                                    <p class="grid__item__para" style="margin: 0;padding: 0;box-sizing: border-box;">
                                        Provide contact details of relevant medical service
                                        providers
                                    </p>
                                </div>
                                <div class="grid__item"
                                    style="margin: 0;padding: 2rem 1.5rem;box-sizing: border-box;background-color: #D7F7FF;border-radius: 0.5rem;z-index: 10;">
                                    <h3 class="grid__item__heading"
                                        style="margin: 0;padding: 0;box-sizing: border-box;color: var(--primary-blue);font-weight: 400;margin-bottom: 0.5rem;">
                                        Dispatch Of Essential Medicine</h3>
                                    <p class="grid__item__para" style="margin: 0;padding: 0;box-sizing: border-box;">
                                        Dispatch essential medicines that are not available
                                        locally</p>
                                </div>
                                <div class="grid__item"
                                    style="margin: 0;padding: 2rem 1.5rem;box-sizing: border-box;background-color: #D7F7FF;border-radius: 0.5rem;z-index: 10;">
                                    <h3 class="grid__item__heading"
                                        style="margin: 0;padding: 0;box-sizing: border-box;color: var(--primary-blue);font-weight: 400;margin-bottom: 0.5rem;">
                                        Chartered Helicopter Services</h3>
                                    <p class="grid__item__para" style="margin: 0;padding: 0;box-sizing: border-box;">
                                        Assistance in case a customer is critically ill and
                                        needs to be repatriated</p>
                                </div>
                            </div>
                        </div>
                        <div class="services__details__item"
                            style="margin: 0;padding: 0;box-sizing: border-box;margin-bottom: 3rem;">
                            <h3 class="services__details__heading"
                                style="margin: 0;padding: 0.8rem 1.5rem;box-sizing: border-box;color: var(--white);background-color: var(--dark-blue);font-size: 1.3rem;display: flex;align-items: center;gap: 1rem;width: max-content;border-radius: 1rem;margin-bottom: 1.5rem;">
                                <img class="services__details__heading__icon" src="https://static.technogramsolutions.com/insurance/coi/assets/headphone.svg"
                                    alt="insurance" style="margin: 0;padding: 0;box-sizing: border-box;width: 1.8rem;">
                                TRAVEL ASSISTANCE
                            </h3>
                            <div class="services__details__item__grid___container"
                                style="margin: 0;padding: 0;box-sizing: border-box;display: grid;grid-template-columns: repeat(3, 1fr);gap: 1.5rem;">
                                <div class="grid__item"
                                    style="margin: 0;padding: 2rem 1.5rem;box-sizing: border-box;background-color: #D7F7FF;border-radius: 0.5rem;z-index: 10;">
                                    <h3 class="grid__item__heading"
                                        style="margin: 0;padding: 0;box-sizing: border-box;color: var(--primary-blue);font-weight: 400;margin-bottom: 0.5rem;">
                                        Luggage Lost Assistance</h3>
                                    <p class="grid__item__para" style="margin: 0;padding: 0;box-sizing: border-box;">
                                        Help coordinate with airlines for missing luggage</p>
                                </div>
                                <div class="grid__item"
                                    style="margin: 0;padding: 2rem 1.5rem;box-sizing: border-box;background-color: #D7F7FF;border-radius: 0.5rem;z-index: 10;">
                                    <h3 class="grid__item__heading"
                                        style="margin: 0;padding: 0;box-sizing: border-box;color: var(--primary-blue);font-weight: 400;margin-bottom: 0.5rem;">
                                        Travel Alert Analyst</h3>
                                    <p class="grid__item__para" style="margin: 0;padding: 0;box-sizing: border-box;">
                                        Help with safety and security alerts for the requested
                                        destination</p>
                                </div>
                                <div class="grid__item"
                                    style="margin: 0;padding: 2rem 1.5rem;box-sizing: border-box;background-color: #D7F7FF;border-radius: 0.5rem;z-index: 10;">
                                    <h3 class="grid__item__heading"
                                        style="margin: 0;padding: 0;box-sizing: border-box;color: var(--primary-blue);font-weight: 400;margin-bottom: 0.5rem;">
                                        Embassy Referral Services</h3>
                                    <p class="grid__item__para" style="margin: 0;padding: 0;box-sizing: border-box;">
                                        Provide contact information of consulates & embassies
                                    </p>
                                </div>
                                <div class="grid__item"
                                    style="margin: 0;padding: 2rem 1.5rem;box-sizing: border-box;background-color: #D7F7FF;border-radius: 0.5rem;z-index: 10;">
                                    <h3 class="grid__item__heading"
                                        style="margin: 0;padding: 0;box-sizing: border-box;color: var(--primary-blue);font-weight: 400;margin-bottom: 0.5rem;">
                                        Interpreter Referral Services</h3>
                                    <p class="grid__item__para" style="margin: 0;padding: 0;box-sizing: border-box;">
                                        Arrange interpreter for language barriers</p>
                                </div>

                                <div class="grid__item"
                                    style="margin: 0;padding: 2rem 1.5rem;box-sizing: border-box;background-color: #D7F7FF;border-radius: 0.5rem;z-index: 10;">
                                    <h3 class="grid__item__heading"
                                        style="margin: 0;padding: 0;box-sizing: border-box;color: var(--primary-blue);font-weight: 400;margin-bottom: 0.5rem;">
                                        Police Station Support</h3>
                                    <p class="grid__item__para" style="margin: 0;padding: 0;box-sizing: border-box;">
                                        Assistance in locating nearest police station</p>
                                </div>
                                <div class="grid__item"
                                    style="margin: 0;padding: 2rem 1.5rem;box-sizing: border-box;background-color: #D7F7FF;border-radius: 0.5rem;z-index: 10;">
                                    <h3 class="grid__item__heading"
                                        style="margin: 0;padding: 0;box-sizing: border-box;color: var(--primary-blue);font-weight: 400;margin-bottom: 0.5rem;">
                                        Emergency Cash Delivery</h3>
                                    <p class="grid__item__para" style="margin: 0;padding: 0;box-sizing: border-box;">
                                        Delivery of cash in local currency as per the prevailing
                                        laws and regulations</p>
                                </div>
                                <div class="grid__item"
                                    style="margin: 0;padding: 2rem 1.5rem;box-sizing: border-box;background-color: #D7F7FF;border-radius: 0.5rem;z-index: 10;">
                                    <h3 class="grid__item__heading"
                                        style="margin: 0;padding: 0;box-sizing: border-box;color: var(--primary-blue);font-weight: 400;margin-bottom: 0.5rem;">
                                        Minor Children Management</h3>
                                    <p class="grid__item__para" style="margin: 0;padding: 0;box-sizing: border-box;">
                                        Logistics for unattended minors owing to the customer's
                                        illness
                                    </p>
                                </div>
                                <div class="grid__item"
                                    style="margin: 0;padding: 2rem 1.5rem;box-sizing: border-box;background-color: #D7F7FF;border-radius: 0.5rem;z-index: 10;">
                                    <h3 class="grid__item__heading"
                                        style="margin: 0;padding: 0;box-sizing: border-box;color: var(--primary-blue);font-weight: 400;margin-bottom: 0.5rem;">
                                        Legal Referral Services</h3>
                                    <p class="grid__item__para" style="margin: 0;padding: 0;box-sizing: border-box;">
                                        Assistance in finding legal services</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <img class="container__image" src="https://static.technogramsolutions.com/insurance/coi/assets/man-standing.svg" alt="standing man"
                    style="margin: 0;padding: 0;box-sizing: border-box;position: absolute;bottom: 0;right: 3rem;scale: 2;margin-bottom: 5%;">
            </div>

            <div class="footer"
                style="margin: 0;padding: 3rem 6rem 3rem 4rem;box-sizing: border-box;background-color: var(--gray);border-radius: 2rem 2rem 0 0;">
                <p class="footer__text" style="margin: 0;padding: 0;box-sizing: border-box;color: #59595C;"><strong
                        style="margin: 0;padding: 0;box-sizing: border-box;">NOTE:</strong> All assistance services
                    shall be provided over a call or
                    digitally. The actual
                    service charges or cost for the service availed will be borne by the end-user or customer.
                    <br style="margin: 0;padding: 0;box-sizing: border-box;">
                    <br style="margin: 0;padding: 0;box-sizing: border-box;">
                    The final selection of the service provider is the responsibility of the customer & Across Assist
                    shall
                    not be liable
                    for any consequences arising out of or howsoever caused by the services provided by the medical
                    service
                    provider, or other provider, so referred. For detailed Terms and Conditions, <a
                        href="https://tripsafe.in/AAInternationalTravelAssistance.pdf"
                        style="margin: 0;padding: 0;box-sizing: border-box;">visit here</a> or paste the link
                    https://tripsafe.in/AAInternationalTravelAssistance.pdf on your browser.
                </p>
            </div>
        </div>
    </main>

</body>

</html>`

try {
    await htmlPDF.create(content);
} catch (error) {
    console.log("PuppeteerHTMLPDF error", error);
}