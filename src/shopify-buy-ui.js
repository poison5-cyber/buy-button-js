import ShopifyBuy from 'shopify-buy';
import UI from './ui';

ShopifyBuy.UI = {
  init(client) {
    return new UI(client);
  },
};

window.ShopifyBuy = ShopifyBuy;
export default ShopifyBuy;
