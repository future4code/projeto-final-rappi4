import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router";
import { Card } from "@material-ui/core";
// import { login } from "../../actions/auth";
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Logo from "./logo.png";


const Wrapper = styled.div`
  height:640px;
  width:100vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`
const LoginStyled = styled(Card)`
  width: 360px;
  height: 640px;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
`
const PageTitle = styled.p`
    font-weight: bold;
`
const FormSyled = styled.form`
    width: 360px;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`
const StyledBtn = styled(Button)`
    background-color: #e86e5a;
    font-weight: bold;
    color: black;
    width: 328px;
    height: 42px;
    border-radius: 2px;
    margin: 10px;
    :hover{
        background-color: #e86e5a;
    }
`
const StyledBtnCadastro = styled(Button)`
  font-weight: bold;
  color: black;
  margin: 10px;
  :hover{
      background: none;
  }
`
const StyledTextField = styled(TextField)`
    padding: 1px;
    width: 328px;
    height: 56px;
    border-radius: 2px;
    margin: 10px;
`


export class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            showPassword: false,
        };
    }


    handleFieldChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };



    render() {
        const { email, password } = this.state;
        return (
            <Wrapper>

                <LoginStyled>
                    <img src={Logo} alt="" />
                    <PageTitle>SignUp</PageTitle>
                    <FormSyled onSubmit={this.onClickLogin}>
                        <StyledTextField
                            onChange={this.handleFieldChange}
                            variant="outlined"
                            name="email"
                            type="email"
                            label="Nome"
                            placeholder="Nome e sobrenome"
                            value={email}
                            required={true}
                            inputProps={{ pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" }}
                        />
                        <StyledTextField
                            onChange={this.handleFieldChange}
                            variant="outlined"
                            name="email"
                            type="email"
                            label="E-mail"
                            placeholder="email@email.com"
                            value={email}
                            required={true}
                            inputProps={{ pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" }}
                        />
                        <StyledTextField
                            onChange={this.handleFieldChange}
                            variant="outlined"
                            name="email"
                            type="email"
                            label="CPF"
                            placeholder="xxx.xxx.xxx.xx"
                            value={email}
                            required={true}
                            inputProps={{ pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" }}
                        />
                        <StyledTextField
                            onChange={this.handleFieldChange}
                            variant="outlined"
                            name="password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            label="Senha"
                            placeholder="Mínimo 6 caracteres"
                            value={password}
                            required={true}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                        >
                                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <StyledTextField
                            onChange={this.handleFieldChange}
                            variant="outlined"
                            name="password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            label="Confirme a senha anterior"
                            placeholder="Mínimo 6 caracteres"
                            value={password}
                            required={true}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                        >
                                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <StyledBtn
                            variant="contained"
                            color="primary"
                            type='submit'
                        > Criar
                	    </StyledBtn>

                    </FormSyled>
                </LoginStyled>

            </Wrapper >

        );
    }
}



// const mapDispatchToProps = dispatch => ({
//   goToCadastrar: () => dispatch(push(routes.cadastrar)),
// });

// export default connect(null, mapDispatchToProps)(Login);

export default SignUp;