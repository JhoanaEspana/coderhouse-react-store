import React, {useState} from 'react';
import "./Form.css"
import { db } from "../../firebase/firebase"
import {collection, addDoc, serverTimestamp, doc, updateDoc} from 'firebase/firestore';

const Form = ({cart, total, clear, tomarId}) => {

    const [userName, setUserName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('')
    const [failed, setFailed] = useState(false)
    
    const actualizarStock = () => {
      cart.forEach(item => {
      const updateStock = doc(db, "productos", item.id )
      updateDoc(updateStock,{stock: item.stock - item.cantidad}) 
      });
    }

    let  nombre= /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos.
    let correo= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    let tel= /^\d{7,14}$/; // 7 a 14 numeros.

    const finalizarCompra = (event) => {
        event.preventDefault();
        if(!nombre.test(userName)){
          setFailed(true)
          setError('lo siento, el campo Nombre solo acepta letras')
          return
        }
        if(!correo.test(mail)){
          setFailed(true)
          setError('lo siento, intruduce un email correcto')
          return
        }
        if(!tel.test(phone)){
          setFailed(true)
          setError('lo siento, intruduce un teléfono correcto de 7 a 14 números')
          return
        }

        actualizarStock();
        const venta = {
            comprador:{userName:userName, phone:phone, mail:mail},
            items: cart,
            total: total,
            date: serverTimestamp(),
        };

        const ventasCollection = collection(db, 'ventas');

        addDoc(ventasCollection, venta).then((res) => {
            tomarId(res.id);
            clear();
        })
    };

    const capturarNombre = (event) => {
        setUserName(event.target.value);
    };

    const capturarEmail = (event) => {
        setMail(event.target.value);
    }

    const capturarTelefono = (event) => {
        setPhone(event.target.value);
    };

  return (
    <form className='form' action='' onSubmit={finalizarCompra}>
        <label className='form__title'>Nombre*</label>
        <input type="text" 
                name="name" 
                value={userName} onChange={capturarNombre} required>
        </input>
        <label className='form__title'>Email*</label>
        <input type="mail"
                name="mail"
                value={mail} onChange={capturarEmail} required>
        </input>
        <label className='form__title'>Teléfono*</label>
        <input type="tel"
                name="phone" 
                value={phone} onChange={capturarTelefono} required>
        </input>
        <button>FINALIZAR COMPRA</button>
        {
          failed?(<span>{error}</span>)
                :(<span></span>)
        }
    </form>
  )
}

export default Form;