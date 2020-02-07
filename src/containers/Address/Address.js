import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { StyledBtn } from "../../components/Button/Button";
import { Wrapper } from "./AddressStyled";
import { LoginStyled } from "./AddressStyled";
import { PageTitle } from "./AddressStyled";
import { StyledTextField } from "./AddressStyled";
import { FormStyled } from "./AddressStyled";
import { cadastro } from "../../actions/auth";
import AppBar from "../../components/AppBar";

export class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logradouro: "",
            numero: "",
            complemento: "",
            bairro: "",
            cidade: "",
            estado: ""
        };
    }


    handleFieldChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onClickCreateAdress = (event) => {
        event.preventDefault();
        const { logradouro, numero, complemento, bairro, cidade, estado } = this.state
        this.props.cadastro(logradouro, numero, complemento, bairro, cidade, estado)
        console.log("pegou o adress:")
        console.log(logradouro, numero, complemento, bairro, cidade, estado)
    }

    render() {
        const { logradouro, numero, complemento, bairro, cidade, estado } = this.state;
        return (
            <Wrapper>

                <LoginStyled>
                    <AppBar
                        title={''}
                        onClickBackIcon={this.clickBackIcon}
                        ArrowBackVisible={true}
                    />
                    <PageTitle>Meu endereço</PageTitle>
                    <FormStyled onSubmit={this.onClickCreateAdress}>
                        <StyledTextField
                            onChange={this.handleFieldChange}
                            variant="outlined"
                            name="logradouro"
                            type="text"
                            label="logradouro"
                            placeholder="Rua / Av."
                            value={logradouro}
                            required={true}
                        />
                        <StyledTextField
                            onChange={this.handleFieldChange}
                            variant="outlined"
                            name="numero"
                            type="text"
                            label="Número"
                            placeholder="Número"
                            value={numero}
                            required={true}
                        />
                        <StyledTextField
                            onChange={this.handleFieldChange}
                            variant="outlined"
                            name="complemento"
                            type="text"
                            label="Complemento"
                            placeholder="Apto. / Bloco"
                            value={complemento}
                        />
                        <StyledTextField
                            onChange={this.handleFieldChange}
                            variant="outlined"
                            name="bairro"
                            type="text"
                            label="Bairro"
                            placeholder="Bairro"
                            value={bairro}
                            required={true}
                        />
                        <StyledTextField
                            onChange={this.handleFieldChange}
                            variant="outlined"
                            name="cidade"
                            type="text"
                            label="Cidade"
                            placeholder="Cidade"
                            value={cidade}
                            required={true}
                        />
                        <StyledTextField
                            onChange={this.handleFieldChange}
                            variant="outlined"
                            name="estado"
                            type="text"
                            label="Estado"
                            placeholder="Estado"
                            value={estado}
                            required={true}
                        />

                        <StyledBtn
                            variant="contained"
                            color="primary"
                            type='submit'
                        > Salvar
                	    </StyledBtn>
                    </FormStyled>
                </LoginStyled>

            </Wrapper >

        );
    }
}

const mapDispatchToProps = dispatch => ({
    cadastro: (logradouro, numero, complemento, bairro, cidade, estado) => dispatch(cadastro(logradouro, numero, complemento, bairro, cidade, estado))
});


export default connect(null, mapDispatchToProps)(Address);