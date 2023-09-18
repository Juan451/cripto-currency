import { html } from 'lit';
import '../src/cripto-currency.js';

export default {
  title: 'CriptoCurrency',
  component: 'cripto-currency',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <cripto-currency
      style="--cripto-currency-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </cripto-currency>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
