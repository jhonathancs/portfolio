import { useState } from 'react';
import swal from 'sweetalert';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [resume, setResume] = useState('');

    function resetForm() {
    setName('');
    setEmail('');
    setResume('');
    setPhone('');
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
        void swal({
            title: "Obrigado! Seu email foi enviado com sucesso. 😊",
            text: "Em breve estarei entrando em contato.",
            icon: "success",
        });
        resetForm()
    } 

    return(
        <><h1>Contact</h1><div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>
                    Nome
                    <input
                        placeholder='Digite seu nome'
                        required
                        value={name}
                        onChange={({ target }) => setName(target.value)} />
                </label>
                <label>
                    E-mail
                    <input
                        placeholder='Digite seu email'
                        required
                        value={email}
                        onChange={({ target }) => setEmail(target.value)} />
                </label>
                <label>
                    Celular(opcional)
                    <input
                        placeholder='Digite o numero do seu celular'
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)} />
                </label>
                <label>
                    Mensagem
                    <textarea
                        placeholder='Digite sua mensagem...'
                        required
                        value={resume}
                        onChange={({ target }) => setResume(target.value)} />
                </label>
                <button>Enviar</button>
            </form>
        </div></>
    )
}

export default Contact;