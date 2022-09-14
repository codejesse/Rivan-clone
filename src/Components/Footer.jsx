import styled from "styled-components";

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    background: rgba(167, 62, 47, 0.9);
    width: 100%;
    margin-top: 6rem;
    height: 85vh;
    @media (max-width: 800px) {
        height: auto;
    }
`;

const FooterDetails = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    margin-top: 5rem;
    /* border: 1px solid white; */
    width: 95%;
    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

const LeftDetails = styled.div`
    display: flex;
    flex-direction: column;
    /* border: 1px solid yellow; */
    width: fit-content;
    color: white;
    margin-right: 10rem;
    & p{
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
    }
`;

const RightDetailsWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const RightDetails = styled.div`
    display: flex;
    flex-direction: column;
    /* border: 1px solid blue; */
    justify-content: right;
    margin-right: 10rem;
    & p {
        font-family: 'Roboto Mono';
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 26px;
        color: #FFFFFF;
    }
    /* @media (max-width: 800px) {
        flex-direction: row;
    } */
`;

const Footer = () => {
    //c'mon jesse you can do better you know you'll mao through data
    //work on LeftDetails to accomodate a particular source of data
    return (
        <FooterWrapper>
            <FooterDetails>
                <LeftDetails>
                    <p>R1S</p>
                    <p>R1T</p>
                    <p>Gear Shop</p>
                </LeftDetails>
                <LeftDetails>
                    <p>Fleet</p>
                    <p>Our Company</p>
                    <p>Stories</p>
                </LeftDetails>
                <RightDetailsWrapper>
                    <RightDetails>
                        <p>Purchasing</p>
                        <p>Charging</p>
                        <p>Membership</p>
                        <p>Insurance</p>
                        <p>Service</p>
                    </RightDetails>
                    <RightDetails>
                        <p>Venice Hub</p>
                        <p>Investors</p>
                        <p>Careers</p>
                        <p>Newsroom</p>
                        <p>Support</p>
                    </RightDetails>
                </RightDetailsWrapper>
            </FooterDetails>
        </FooterWrapper>
    );
}

export default Footer;