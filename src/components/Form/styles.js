import styled from "styled-components";

export const Wrapper=styled.div`
background-color: #fffffe;
padding:24px;
width: 400px;
border-radius: 10px;
box-shadow: 0 4px 6px 0 hsla(0,0%,0%,0.2);
`

export const Textarea = styled.textarea`
  border:1px solid #dadcdd;
  background-color:  #fffffe;
  border-radius:3px;
  padding: 10px 12px;
  margin-bottom:15px;
  box-shadow: inset 0 2px 4px 0 hsla(0,0%,0%,0.08);
  resize: none;
  :focus{
    outline-style: none;
    border-color:#6246ea;
  }
`

export const Button = styled.button`
    padding:10px 20px;
    border:0;
    border-radius:5px;
    font-size: 2rem;
    font-family:'Lora',serif;
    font-weight:400;
    color:#fffffe;
    background-color: #6246ea;
    :hover{
      background-color: #583fd3;
      cursor:pointer;
    }
    :focus{
    outline-style: none;
    }
`

export const Input = styled.input`
    border:1px solid #dadcdd;
    background-color:  #fffffe;
    border-radius:3px;
    padding: 10px 12px;
    height:50px;
    margin-bottom:15px;
    box-shadow: inset 0 2px 4px 0 hsla(0,0%,0%,0.08);
    :focus{
        outline-style: none;
        border-color:#6246ea;
    }
`
export const MyForm =styled.form`
  display:flex;
  flex-direction: column;
  align-items:stretch;
`
export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
`
