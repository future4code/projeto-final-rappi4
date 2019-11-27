import React, { Component } from "react";
import { StyledBtn } from "../Button/Button";
import { Wrapper} from "./AddressStyled";
import { LoginStyled } from "./AddressStyled";
import { PageTitle } from "./AddressStyled";
import { StyledTextField } from "./AddressStyled";
import { FormStyled } from "./AddressStyled";

export class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            email: "",
            password: "",
        };
    }


    handleFieldChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        const { logradouro, numero, complemento, bairro, cidade, estado } = this.state;
        return (
            <Wrapper>
                <LoginStyled>
                    <PageTitle>Meu endereço</PageTitle>
                    <FormStyled onSubmit={this.onClickLogin}>
                        <StyledTextField
                            onChange={this.handleFieldChange}
                            variant="outlined"
                            name="Logradouro"
                            type="text"
                            label="Logradouro"
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



export default Address;