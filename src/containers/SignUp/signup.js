import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Logo from "./logo.png";
import { Wrapper } from "./SignupStyled";
import { LoginStyled } from "./SignupStyled";
import { PageTitle } from "./SignupStyled";
import { FormStyled } from "./SignupStyled";
import { StyledTextField } from "./SignupStyled";
import { StyledBtn } from "../Button/Button";


export class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
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
        const { email, password, nome, cpf } = this.state;
        return (
            <Wrapper>
                <LoginStyled>
                    <img src={Logo} alt="" />
                    <PageTitle>SignUp</PageTitle>
                    <FormStyled onSubmit={this.onClickLogin}>
                        <StyledTextField
                            onChange={this.handleFieldChange}
                            variant="outlined"
                            name="nome"
                            type="text"
                            label="Nome"
                            placeholder="Nome e sobrenome"
                            value={nome}
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
                            name="cpf"
                            type="text"
                            label="CPF"
                            placeholder="xxx.xxx.xxx.xx"
                            value={cpf}
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
                    </FormStyled>
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