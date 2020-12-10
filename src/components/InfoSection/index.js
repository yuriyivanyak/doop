import React from 'react'
import { Button } from '../ButtonEmelents'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper,
Topline, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoElements'


const InfoSection = ({lightText,
    id,
    topLine, 
    headLine, 
    darkText, 
    description, 
    buttonLabel, 
    img, 
    alt, 
    lightBg, 
    primary, 
    dark, 
    dark2,
    imgStart}) => {
    return(
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <Topline> {topLine} </Topline>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to="home"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={({primary}) => (primary ? 'true' : 'false')}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                >
                                    {buttonLabel} </Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>  
        </>
    )
}

export default InfoSection