import styled from 'styled-components';
import downloadPic from '../../static/download.png';

export const DetailWrapper = styled.div`
    position: relative;
    padding-top: 10px;
    margin-top: 56px;
    box-sizing: border-box;
`

export const AdContainer = styled.div`
    position: fixed;
    top: 80px;
    right: 50%;
    margin-right: -560px;
    width: 180px;
    box-sizing: border-box;
    .download {
        cursor: pointer;
        width: 100%;
        height: 260px;
        background-image: url(${downloadPic});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 50%;
        margin-bottom: 15px;
    }
`

export const Note = styled.div`
    width: 620px;
    margin: 0 auto;
    padding-bottom: 100px;
    padding-top: 20px;
`

export const Header = styled.div`
    margin: 20px 0 20px 0;
    line-height: 44px;
    font-size: 34px;
    font-weight: bold;
    color: #333;
`

export const Content = styled.div`
    color: #2f2f2f;
    img {
        width: 100%;
    }
    p {
        margin: 25px 0;
        font-size: 16px;
        line-height: 30px;
        b {
            font-weight: 700;
        }
    }
`