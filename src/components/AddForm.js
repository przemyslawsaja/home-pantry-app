import React from 'react';
import styled from 'styled-components'
import { useForm } from "react-hook-form";
import Button from "./Button";
import { theme } from "../theme/mainTheme";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`
const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const FormLabel = styled.label`
  font-size: ${theme.fontSize.m};
  margin: 15px 0;
`
const ErrorMessage = styled.p`
  margin: -5px 0 10px;
  color: ${theme.error};
`
const StyledInput = styled.input`
  height: 50px;
  text-align: center;
  background-color: ${theme.tertiary};
  border: none;
  font-size: ${theme.fontSize.m};
  color: white;
  
  &::placeholder{
    color: ${theme.lightPrimary};
    padding-left: 10px;
  }
`
const StyledSelect = styled.select`
    margin: 20px 0;
    height: 50px;
    background-color: ${theme.tertiary};
    border: none;
    font-size: ${theme.fontSize.m};
    color: white;
`
const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`
const units = [
    "pc",
    "kg",
    "g",
    "ml",
    "l"
]

const AddForm = ({toggleModal,addItem}) => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => addItem(data);

        return (
                    <FormWrapper>
                        <StyledForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                            <FormLabel>Product name</FormLabel>
                            {errors.name && (<ErrorMessage>invalid product name.</ErrorMessage>)}
                            <StyledInput
                                name="name"
                                placeholder="Eggs"
                                ref={register({
                                    required: true,
                                    maxLength: 20,
                                    minLength: 2,
                                    pattern: /^[A-Za-z]+$/i
                                })}
                            />

                            <FormLabel>Quantity</FormLabel>
                            {errors.quantity && (<ErrorMessage>invalid quantity value.</ErrorMessage>)}

                            <StyledInput
                                name="quantity"
                                type="number"
                                placeholder="7"
                                ref={register({ required: true, min: 0 })}

                            />

                            <FormLabel>Limit</FormLabel>
                            {errors.limit && (<ErrorMessage>invalid limit value.</ErrorMessage>)}
                            <StyledInput
                                name="limit"
                                type="number"
                                placeholder="12"
                                ref={register({ required: true, min: 0 })}

                            />
                            <SelectWrapper>
                                <FormLabel>Unit: </FormLabel>
                                <StyledSelect name="unit" ref={register({ required: true })}>
                                    {units.map( unit => {
                                        return(
                                            <option key={unit} value={unit}>{unit}</option>
                                        )
                                    })}
                                </StyledSelect>
                            </SelectWrapper>
                            <Button type="submit"> Add product</Button>
                        </StyledForm>
                        <Button secondary onClick={toggleModal} />
                    </FormWrapper>
        );
};

export default AddForm;
