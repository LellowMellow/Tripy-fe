import styled from "styled-components";

const DescriptionWrapper = styled.p`
    width: 333px;
    word-wrap: break-word;
    white-space: normal;
`;

const getDescription = (nftid) => {
    let description;
    switch(nftid){
        case 1:{
            description ="인하대학교 하이테크, 밤마다 불이 꺼지지 않는다.인하대학교 하이테크, 밤마다 불이 꺼지지 않는다.인하대학교 하이테크, 밤마다 불이 꺼지지 않는다.인하대학교 하이테크, 밤마다 불이 꺼지지 않는다.인하대학교 하이테크, 밤마다 불이 꺼지지 않는다.인하대학교 하이테크, 밤마다 불이 꺼지지 않는다.인하대학교 하이테크, 밤마다 불이 꺼지지 않는다.";
            break;
        }
        case 2:{
            description = "인하대에서 가을의 향취를 느낄 수 있는 곳."
            break;
        }
        default:{
            description = "알수없음"
            break;
        }
    }
    return description;
}



const Description = ({nftid}) => {
    let result = getDescription(parseInt(nftid));

    return <DescriptionWrapper>{result}</DescriptionWrapper>;
}

export default Description;