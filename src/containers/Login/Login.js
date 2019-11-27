import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Logo from "./logo.png";
import { LoginStyled } from "./LoginStyled";
import { Wrapper } from "./LoginStyled";
import { PageTitle } from "./LoginStyled";
import { FormStyled } from "./LoginStyled";
import { StyledBtn } from "../Button/Button";
import { StyledBtnCadastro } from "./LoginStyled";
import { StyledTextField } from "./LoginStyled";
import { login } from "../../actions/auth";

export class Login extends Component {
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

    onClickLogin = (event) => {
        event.preventDefault();
        const { email, password } = this.state
        this.props.doLogin(email, password)
        console.log("pegou as info do login")
      }

    render() {
        const { email, password } = this.state;
        return (
            <Wrapper>
                <LoginStyled>
                    <img src={Logo} alt="" />
                    <PageTitle>Entrar</PageTitle>
                    <FormStyled onSubmit={this.onClickLogin}>
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
                        <StyledBtn
                            variant="contained"
                            color="primary"
                            type='submit'
                        > Entrar
                        </StyledBtn>

                        <StyledBtnCadastro
                            onClick={this.props.goToCadastrar}
                            color="primary"
                        > Não possui cadastro? Clique aqui.
                        </StyledBtnCadastro>
                    </FormStyled>
                </LoginStyled>

            </Wrapper >

        );
    }
}


const mapDispatchToProps = dispatch => ({
    goToCadastrar: () => dispatch(push(routes.signup)),
    doLogin: (email, password) => dispatch(login(email, password)),
});

export default connect(null, mapDispatchToProps)(Login);