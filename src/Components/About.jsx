import styled from "styled-components";

const AboutWrapper = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   justify-content: space-around;
   padding: 5rem;
   & p {
    width: 666px;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
    color: #000000;
   }
   & h3 {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 40px;
    color: #000000;
   }
   @media (max-width: 900px) {
    flex-direction: column;
    padding: 1rem;
    & p {
        width: auto;
    }
   }
`;

const About = () => {
    return (
        <AboutWrapper>
            <h3>Vehicles made for the planet</h3>
            <p>Whether it’s taking families on new adventures or helping fleets electrify at scale,our vehicles all share a common goal —
                preserving the natural world for generations to come.
            </p>
        </AboutWrapper>
    );
}

export default About;