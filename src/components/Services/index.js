import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-4.svg'
import Icon3 from '../../images/svg-5.svg'
import {ServicesContainer, ServicesH1, ServicesWrap, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrap>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </ServicesP>
                </ServicesCard>
            </ServicesWrap>
        </ServicesContainer>
    )
}

export default Services