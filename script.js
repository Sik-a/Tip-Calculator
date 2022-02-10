const btn_calcular = document.getElementById( 'btn-calcular' );

btn_calcular.addEventListener( 'click', function(){
  let cuenta = parseInt( document.querySelector( '#cuenta' ).value );
  let propina = parseInt( document.querySelector( '#propina' ).value );
  let personas = parseInt( document.querySelector( '#personas' ).value );
  let span_totCuenta = document.querySelector( '#tot-cuenta' );
  let span_totPropina = document.querySelector( '#tot-propina' );
  let span_propPersona = document.querySelector( '#prop-persona' );
  let span_totPersona = document.querySelector( '#tot-persona' );
  
  //Calculamos el total de la propina
  let totPropina = ( cuenta * propina ) / 100;
  //Calculamos el total de la cuenta
  let totCuenta = cuenta + totPropina;
  //Calculamos la propina por persona
  let propPersona = totPropina / personas;
  //Calculamos el total de la cuenta por persona
  let totPersona = totCuenta / personas;
  
  //Mostramos la información en pantalla
  span_totCuenta.innerHTML = totCuenta;
  span_totPropina.innerHTML = totPropina;
  span_propPersona.innerHTML = propPersona;
  span_totPersona.innerHTML = totPersona;
} );