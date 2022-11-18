import styled from "styled-components";

const DescriptionWrapper = styled.p`
  width: 333px;
  word-wrap: break-word;
  white-space: normal;
  text-align: center;
`;

const getDescription = (nftid) => {
  let description;
  switch (nftid) {
    case 1: {
      description = "시험기간이 되면 열람실이 꽉찬다.";
      break;
    }
    case 2: {
      description = "인천 하와이 대학교.";
      break;
    }
    case 3: {
      description = "기계공학과에서 만든 오리가 살고있는 호수.";
      break;
    }
    case 4: {
      description = (
        <>
          <p>가능성이 무궁무진한 호수.</p>
          <p>신종 미생물이 발견되기도 하였다.</p>
        </>
      );
      break;
    }
    case 5: {
      description = (
        <>
          <p>낮과 다른 분위기를 느낄 수 있다.</p>
          <p>집에 가지 못한 이들이 출몰하기도 한다.</p>
        </>
      );
      break;
    }
    default: {
      description = "알수없음";
      break;
    }
  }
  return description;
};

const Description = ({ nftid }) => {
  let result = getDescription(parseInt(nftid));

  return <DescriptionWrapper>{result}</DescriptionWrapper>;
};

export default Description;
