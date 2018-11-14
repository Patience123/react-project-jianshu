import styled from 'styled-components';

export const LoginWrapper = styled.div`
    position: absolute;
    top: 56px;
    right: 0;
    bottom: 0;
    left: 0;
    background: #eee;
`

export const LoginBox = styled.div`
    width: 400px;
    height: 180px;
    background: #fff;
    padding-top: 20px;
    margin: 80px auto;
    box-shadow: 0 0 8px rgba(0, 0, 0, .1);
`

export const Input = styled.input`
    display: block;
    width: 200px;
    height: 30px;
    margin: 10px auto;
    line-height: 30px;
    color: #777;
    padding: 0 10px;
    border: 1px solid #c8c8c8;
    border-radius: 4px;
    background-color: hsla(0,0%,71%,.1);
`

export const Button = styled.div`
    width: 220px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    background: #3194d0;
    color: #fff;
    margin: 10px auto;
    text-align: center;
    cursor: pointer;
`