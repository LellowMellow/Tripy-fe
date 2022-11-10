const getTitle = (nftid) => {
    let title;
    switch(nftid){
        case 1:{
            title = "인하대"
            break;
        }
        case 2:{
            title = "비행기"
            break;
        }
        default:{
            title = "알수없음"
            break;
        }
    }
    return title;
}

const Title = ({nftid}) => {
    let result = getTitle(parseInt(nftid));

    return(result)
}

export default Title;