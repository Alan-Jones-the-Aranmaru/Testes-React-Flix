import { useState } from 'react';

function useForm(valoresIniciais) {
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]: valor, //nome: 'valor'
        })
    }

    function handleChance(infosDoEvento) {
        //setNomeDaCategoria(infosDoEvento.target.value);
        //setValue('nome', infosDoEvento.target.value);
        /*const { getAttribute, value } = infosDoEvento.target;
        setValue(
            getAttribute('name'),
            value
        );*/

        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
    }

    function clearForm() {
        setValues(valoresIniciais);
    }

    return {
        values,
        handleChance,
        clearForm,
    };
    
}

export default useForm;