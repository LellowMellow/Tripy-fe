const getTitle = (nftid) => {
  let title;
  switch (nftid) {
    case 1: {
      title = "정석도서관";
      break;
    }
    case 2: {
      title = "인하대";
      break;
    }
    case 3: {
      title = "겨울의 인경호";
      break;
    }
    case 4: {
      title = "가을의 인경호";
      break;
    }
    case 4: {
      title = "인하대";
      break;
    }
    default: {
      title = "정석오거리";
      break;
    }
  }
  return title;
};

const Title = ({ nftid }) => {
  let result = getTitle(parseInt(nftid));

  return result;
};

export default Title;
