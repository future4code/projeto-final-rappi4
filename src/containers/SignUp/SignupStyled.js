import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Card } from "@material-ui/core";

export const Wrapper = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`
export const LoginStyled = styled(Card)`
  width: 100vh;
  height: 100vh;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
`
export const PageTitle = styled.p`
    font-weight: bold;
`
export const FormStyled = styled.form`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`
export const StyledTextField = styled(TextField)`
    padding: 1px;
    width: 100%;
    height: 56px;
    border-radius: 2px;
    margin: 10px;
`
