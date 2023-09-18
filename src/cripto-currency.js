/* eslint-disable class-methods-use-this */
import { LitElement, html, css } from 'lit';

class CriptoCurrency extends LitElement {

  static get properties() {
    return {
      cryptocurrencies: { type: Array },
      coin: { type: String },
      selectedCrypto: { type: String }
    };
  }

  constructor() {
    super();
    this.cryptocurrencies = []; // Lista de criptomonedas
    this.coin = '';
    this.selectedCrypto = '';
  }

  async connectedCallback() {
    super.connectedCallback();

    try {
      const response = await fetch('https://min-api.cryptocompare.com/data/all/coinlist');
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
      const data = await response.json();
      this.cryptocurrencies = Object.keys(data.Data);
    } catch (error) {
      console.error('Error al obtener la lista de criptomonedas:', error);
    }
  }



  static get styles() {
    return css`
      .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    .panel-results {
      margin-top: 1rem;
    }

    `;
  }

  render() {
    return html`
      <div class="container">
        <h1>Instantly quote</h1>
        <form id="form">
        <select id="coin" class="form-control" @change="${this.handleSelectChange}">
                <option value="" disabled selected>Pick your currency</option>
                <option value="USD">US Dollar</option>
                <option value="COP">Peso Colombiano</option>
                <option value="GBP">Pounds</option>
                <option value="EUR">Euros</option>
              </select>  
              <select id="criptocurrency" class="form-control" @change="${this.calcCripto}">
                <option value="" disabled selected>Pick CriptoCurrency</option>
                ${this.cryptocurrencies.map((crypto) => html`<option value="${crypto}">${crypto}</option>`)}
              </select>
              <button @click="${this.clcCripto}">Calculate</button>
        </form>
        <div class="panel-results">
          <!-- Agrega aquí el resultado del cálculo de criptomonedas -->
        </div>
      </div>
    `;
  }

  handleSelectChange(e) {
    this.coin = e.target.value;
  }

  calcCripto(e) {
    // Captura la criptomoneda seleccionada al cambiar el select
    this.selectedCrypto = e.target.value;
  }

  async clcCripto(e) {
    e.preventDefault();
    const criptoCurrencySelect = this.shadowRoot.getElementById('criptocurrency');
    console.log(criptoCurrencySelect.value);
    // eslint-disable-next-line prefer-destructuring
    const coin = this.coin;
    const criptoCurrency = criptoCurrencySelect.value;

    if (!coin || !criptoCurrency) {
      console.error('Por favor, seleccione una moneda y una criptomoneda válida.');
      return;
    }

    try {
      const response = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${criptoCurrency}&tsyms=${coin}`);
      
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
      
      const data = await response.json();
      console.log(`La tasa de cambio de 1 ${criptoCurrency} a ${coin} es: ${data[coin]}`);
      
      const panelResults = this.shadowRoot.querySelector('.panel-results');
      panelResults.innerHTML = `La tasa de cambio de 1 ${criptoCurrency} a ${coin} es: ${data[coin]}`;
    } catch (error) {
      console.error('Error al calcular la criptomoneda:', error);
    }
  }
}

customElements.define('cripto-currency', CriptoCurrency);
