import React from 'react'
import emailjs from 'emailjs-com'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_afy6plq', 'template_3pkvubc', e.target, 'user_kIYjGSUks3OqhjV5bAmrH')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    e.target.reset()
}

const index = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <div className="container">
                    <form onSubmit={sendEmail}>
                        <div className="row pt-5 mx-auto">
                            <div className="col-8 form-group mx-auto">
                                <input type="text" className="form-control" placeholder="Severidad" name="Severidad" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" placeholder="Hostname" name="Hostname" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="number" className="form-control" placeholder="Intentos" name="Intentos" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" placeholder="Firma" name="Firma" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" placeholder="Origen" name="Origen" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" placeholder="Destino" name="Destino" />
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="date" className="form-control" placeholder="fecha" name="fecha" />
                            </div>


                            <div className="col-8 form-group pt-2 mx-auto">
                                <textarea className="form-control" id="" cols="30" rows="8" placeholder="log" name="log"></textarea>
                            </div>

                            <div className="col-8 pt-3 mx-auto">
                                <input type="submit" className="btn btn-info" value="Send Message"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </Container>
        </React.Fragment >
    )
}

export default index