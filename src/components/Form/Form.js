import {Button, Input, Textarea, Wrapper, MyForm, FormGroup} from "./styles";

function Form() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const {firstName, lastName, email, opinion} = event.target.elements;
        fetch('http://localhost:4000/',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify( {
                firstName:firstName.value,
                lastName:lastName.value,
                email:email.value,
                opinion:opinion.value
            })
        }).then(res=>{
            console.log(res.status);
        })
    }
    return (
        <Wrapper>
            <MyForm
                onSubmit={handleSubmit}
            >
                <FormGroup>
                    <Input id="firstName" placeholder="Imię" required/>
                </FormGroup>
                <FormGroup>
                    <Input id="lastName" placeholder="Nazwisko" required/>
                </FormGroup>
                <FormGroup>
                    <Input id="email" type="email" placeholder="Adres email" required/>
                </FormGroup>
                <FormGroup>
                    <Textarea id="opinion" rows="8" placeholder="Opinia" required/>
                </FormGroup>
                <FormGroup>
                    <Button type="submit">Wyślij</Button>
                </FormGroup>
            </MyForm>
        </Wrapper>
    )
}

export default Form


