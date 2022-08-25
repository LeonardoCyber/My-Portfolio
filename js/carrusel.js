// 'use strict'
// const grande = document.querySelector('.grande')
// const punto =  document.querySelectorAll('.punto')

// punto.forEach((cadaPunto , i) => {
//     punto[i].addEventListener('click',()=>{
//         let posicion = i
//         let operacion = posicion * -50
//         grande.style.transform = `translateX(${operacion}%)`
        
//         punto.forEach( (cadaPunto , i)=>{
//          punto[i].classList.remove('activo')
//         })
//         punto[i].classList.add('activo')

//     })
// })
// @media screen and (max-width:1700px){
//     #nav.responsive{
//       display: block;
//       background-color: rgba(0,0,0,.7);
//       width: 100%;
//       position: absolute;
//       top: 61px;
//       left: 0;
//       padding: 10px 0;
//     }
//     #nav.responsive ul{
//       display: block !important;
//       text-align: center;
//    }
//    #nav.responsive ul li{
//       margin: 5px 0;
//    }
//    #inicio .contenido .presentacion h2{
//       font-size: 35px;
//    }
  
//    #sobremi{
//       padding: 50px 0;
//       display: flex;
//    }
//    #sobremi .contenedor-foto{
//       max-width: 400px;
//       margin: auto;
//    }
//    #sobremi .contenedor-foto img{
//       padding: 8px;
//    }
//    #sobremi .sobremi .titulo-seccion{
//       text-align: center;
//       padding: 15px;
//    }
//    #sobremi .sobremi h2{
//       font-size: 25px;
//       text-align: left;
//    }
//    #servicios{
//       padding: 50px 15px;
//    }
//    #servicios .fila{
//       display: flex;
//    }
//    #servicios .fila .servicio{
//       margin: 15px auto;
//    }
//    .contenedor-skills{
//       padding: 50px 20px;
//    }
//    #portfolio{
//       padding: 50px 15px;
//    }
//    #portfolio .fila{
//       display: block;
//    }
//    #portfolio .fila .proyecto{
//       margin:  10px auto;
//    }
//    #contacto{
//       padding: 50px 15px;
//    }
//    #contacto .contenedor-form .mitad{
//       margin-bottom: 15px;
//       display: block;
//    }
//    #contacto .contenedor-form .mitad input{
//       width: 100%;
//       margin-bottom: 15px;
//    }
//    #descripcionProj{
//       width: 340px;
//       height: 700px;
//       padding: auto;
//    }
//    #descripcionProj p{
//       font-size: 16px;
//    }
//    #seccionV .videoCG{
//       max-width: 368px;
//       width: 100%;
//       height: 200px;
//    }
//    #seccionV .contvideo{
//       display: flex;
//       margin: 0;
//    }
//    #navProj{
//       display: block;
//       width: 100%;
//       top: 61px;
//       left: 0;
//       padding: 10px 0;
      
//    }
//   }
//   @media screen and (max-width:971px){  
//       #nav.responsive{
//       display: block;
//       background-color: rgba(0,0,0,.7);
//       width: 100%;
//       position: absolute;
//       top: 61px;
//       left: 0;
//       padding: 10px 0;
//     }
//     nav.responsive ul{
//       display: block !important;
//       text-align: center;
//    }
//    nav.responsive ul li{
//       margin: 5px 0;
//    }
//    #inicio .contenido .presentacion h2{
//       font-size: 35px;
//    }
  
//    #sobremi{
//       padding: 50px 0;
//       display: flex;
//    }
//    #sobremi .contenedor-foto{
//       max-width: 400px;
//       margin: auto;
//    }
//    #sobremi .contenedor-foto img{
//       padding: 8px;
//    }
//    #sobremi .sobremi .titulo-seccion{
//       text-align: center;
//       padding: 15px;
//    }
//    #sobremi .sobremi h2{
//       font-size: 25px;
//       text-align: left;
//    }
//    #servicios{
//       padding: 50px 15px;
//    }
//    #servicios .fila{
//       display: flex;
//    }
//    #servicios .fila .servicio{
//       margin: 15px auto;
//    }
//    .contenedor-skills{
//       padding: 50px 20px;
//    }
//    #portfolio{
//       padding: 50px 15px;
//    }
//    #portfolio .fila{
//       display: block;
//    }
//    #portfolio .fila .proyecto{
//       margin:  10px auto;
//    }
//    #contacto{
//       padding: 50px 15px;
//    }
//    #contacto .contenedor-form .mitad{
//       margin-bottom: 15px;
//       display: block;
//    }
//    #contacto .contenedor-form .mitad input{
//       width: 100%;
//       margin-bottom: 15px;
//    }
//    #descripcionProj{
//       width: 340px;
//       height: 700px;
//       padding: auto;
//    }
//    #descripcionProj p{
//       font-size: 16px;
//    }
//    #seccionV .videoCG{
//       max-width: 368px;
//       width: 100%;
//       height: 200px;
//    }
//    #seccionV .contvideo{
//       display: flex;
//       margin: 0;
//    }
//    #navProj{
//       display: block;
//       width: 100%;
//       top: 61px;
//       left: 0;
//       padding: 10px 0;
      
//    }
//   }