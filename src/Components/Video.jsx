import styled from "styled-components";

const VideoWrapper = styled.div`
    width: 100%;
    height: 932px;
    background: #323533;
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    background-image: url('/Background2.png');
    background-repeat: no-repeat;
    background-size: cover;
`;

const VideoContainer = styled.div`
    width: 974px;
    height: 60%;
    background: white;
    margin-top: 12rem;
    & img{
        width: 100%;
    }
`;


const Video = () => {
    return ( 
        <VideoWrapper>
            <VideoContainer>
                <img src="/image 1.png" alt="image1" />
            </VideoContainer>
        </VideoWrapper>
     );
}
 
export default Video;