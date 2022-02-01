import React from 'react';
import hdwallet from '../../assets/hdwallet.png'
import multilevel from '../../assets/multilevel.png'
import nopayment from '../../assets/nopayment.png'
import unlimitedwith from '../../assets/unlimitedwith.png'
import transparency from '../../assets/transparency.png'
import multipleaccounts from '../../assets/multipleaccounts.png'
import multisignature from '../../assets/multisignature.png'
import accelerated from '../../assets/accelerated.png'
import immutable from '../../assets/immutable.png'
import Card from '../Card';


const WhyChooseUs = () => {
    const whyChooseUs = [
        {
            id: 1,
            logo:hdwallet,
            cardHeading:'Non-custodial (HD Wallet)',
            cardText: 'Private keys of the crypto wallets are held solely by the users, making it more secure and private to use.'
        },
        {
            id: 2,
            logo:multilevel,
            cardHeading:'Multi-level earnings',
            cardText: 'Worlds first board system on blockchain network that allows you to earn four levels of earnings.'
        },
        {
            id: 3,
            logo:nopayment,
            cardHeading:' No payment holding',
            cardText: 'All the payments are channelled instantly to each members wallet address as each criteria is met.'
        },
        {
            id: 4,
            logo:unlimitedwith,
            cardHeading:' Unlimited withdrawal',
            cardText: 'There is no withdrawal limit for the user. One can withdraw as little or as much as they want at any given time.'
        },
        {
            id: 5,
            logo:transparency,
            cardHeading:' Transparency',
            cardText: 'Distribution ledgers are viewable in the smart contract, which are easily accessible to everyone online.'
        },
        {
            id: 6,
            logo:multipleaccounts,
            cardHeading:' 1 profile -Multiple accounts',
            cardText: 'A new account will be automatically reborn each time the Starter and Advance boards are completed.'
        },
        {
            id: 7,
            logo:multisignature,
            cardHeading:'Multi-Signature',
            cardText: '(Multi-Sig) Multi-signature addresses provide an added layer of security by requiring more than one key to authorize a transaction.'
        },
        {
            id: 8,
            logo:accelerated,
            cardHeading:'Accelerated transactions',
            cardText: 'Blockchain brings automation through a smart contract, which eliminates the need for human-driven operations.'
        },
        {
            id: 8,
            logo:immutable,
            cardHeading:'Immutable smart contract',
            cardText: 'Any changes to the system cannot be made once the contract is defined and deployed, which ensures the programs security and transparency'
        },


    ]
  return <div className='whychooseus'>
      <Card cardData={whyChooseUs} heading='Why Choose Us?'/>
  </div>;
};

export default WhyChooseUs;
