import React from 'react';
import { Fade } from 'react-awesome-reveal';

import Heading3 from '../../Components/Heading/Heading3';
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";

export default function Roadmap() {
    return <div className='roadmap'>
        <div className="container">
            <Fade triggerOnce delay={300}>
                <div className="heading-wraper">
                    <Heading3 title="Roadmap" back="true" backcolor="bg_pink" headclass="blue_heading" />
                </div>
            </Fade>

            <Fade triggerOnce delay={300}>
                <div className="roadmap_box">
                    <Tabs
                        defaultTab="one"
                        onChange={(tabId) => { console.log(tabId) }}
                    >
                        <TabList>
                            <Tab tabFor="one" className="custom-dot">01.2022</Tab>
                            <TabPanel tabId="one">
                                <div className="ver_history">
                                    <div className="ver">
                                        <h4>v0.5</h4>
                                    </div>
                                    <div className="var_desc">
                                        <ul className='paragraph_sm text'>
                                            <li>Discord</li>
                                            <li>Twitter</li>
                                            <li>Whitepaper</li>
                                            <li>Website</li>
                                        </ul>
                                    </div>
                                </div>
                            </TabPanel>
                            <Tab tabFor="two" className="custom-dot">02.2022</Tab>
                            <TabPanel tabId="two">
                                <div className="ver_history">
                                    <div className="ver">
                                        <h4>v1.0</h4>
                                    </div>
                                    <div className="var_desc">
                                        <ul className='paragraph_sm text'>
                                            <li>Token IDO</li>
                                            <li>Staking of tokens to earn rewards</li>
                                            <li>Airdrop ARCADE tokens to Community</li>
                                        </ul>
                                    </div>
                                </div>
                            </TabPanel>
                            <Tab tabFor="three" className="custom-dot">04.2022</Tab>
                            <TabPanel tabId="three">
                            <div className="ver_history">
                                <div className="ver">
                                    <h4>v1.5</h4>
                                </div>
                                <div className="var_desc">
                                    <ul className='paragraph_sm text'>
                                        <li>Release IGO Launch Platform</li>
                                        <li>Security Audit</li>
                                    </ul>
                                </div>
                            </div>
                        </TabPanel>
                            <Tab tabFor="four" className="custom-dot">07.2022</Tab>
                            <TabPanel tabId="four">
                            <div className="ver_history">
                                <div className="ver">
                                    <h4>v2.0</h4>
                                </div>
                                <div className="var_desc">
                                    <ul className='paragraph_sm text'>
                                        <li>Auto-compounding vaults</li>
                                        <li>GameFi investment vaults</li>

                                    </ul>
                                </div>
                            </div>
                        </TabPanel>
                            <Tab tabFor="five" className="custom-dot">09.2022</Tab>
                            <TabPanel tabId="five">
                            <div className="ver_history">
                                <div className="ver">
                                    <h4>v2.5</h4>
                                </div>
                                <div className="var_desc">
                                    <ul className='paragraph_sm text'>
                                        <li>Marketplace for Harmony GameFi Assets</li>
                                        <li>Trading and selling of gameassets via ARCADE marketplace for select blockchain games</li>
                                    </ul>
                                </div>
                            </div>
                        </TabPanel>
                            <Tab tabFor="six" className="custom-dot">11.2022</Tab>
                            <TabPanel tabId="six">
                            <div className="ver_history">
                                <div className="ver">
                                    <h4>v3.0</h4>
                                </div>
                                <div className="var_desc">
                                    <ul className='paragraph_sm text'>
                                        <li>DAO Governance</li>
                                        <li>Community driven development initiatives, grants and bounties</li>

                                    </ul>
                                </div>
                            </div>
                        </TabPanel>
                            <Tab tabFor="seven" className="custom-dot">02.2023</Tab>
                            <TabPanel tabId="seven">
                            <div className="ver_history">
                                <div className="ver">
                                    <h4>v3.5</h4>
                                </div>
                                <div className="var_desc">
                                    <ul className='paragraph_sm text'>
                                        <li>Cross-chain NFT functionality in EVM [Ethereum Virtual Machine] compatible networks</li>


                                    </ul>
                                </div>
                            </div>
                        </TabPanel>
                            <Tab tabFor="eight" className="custom-dot">05.2023</Tab>
                            <TabPanel tabId="eight">
                            <div className="ver_history">
                                <div className="ver">
                                    <h4>v4.0</h4>
                                </div>
                                <div className="var_desc">
                                    <ul className='paragraph_sm text'>
                                        <li>Release of automation platform for ARCADE users</li>

                                    </ul>
                                </div>
                            </div>
                        </TabPanel>
                            <Tab tabFor="nine" className="custom-dot">09.2023</Tab>
                            <TabPanel tabId="nine">
                            <div className="ver_history">
                                <div className="ver">
                                    <h4>v4.5</h4>
                                </div>
                                <div className="var_desc">
                                    <ul className='paragraph_sm text'>
                                        <li>Fiat Gateway</li>
                                        <li>iOS App</li>
                                        <li>Android App</li>

                                    </ul>
                                </div>
                            </div>
                        </TabPanel>
                            <Tab tabFor="ten" className="custom-dot">10.2023</Tab>
                            <TabPanel tabId="ten">
                            <div className="ver_history">
                                <div className="ver">
                                    <h4>v4.5</h4>
                                </div>
                                <div className="var_desc">
                                    <ul className='paragraph_sm text'>
                                        <li>Cross-chain functionality in non EVM networks</li>

                                    </ul>
                                </div>
                            </div>
                        </TabPanel>
                        </TabList>
                    </Tabs>
                </div>
            </Fade>
        </div>
    </div>;
}