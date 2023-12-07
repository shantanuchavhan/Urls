import invoiceIcon from "../../../../images/invoice.png";
import customericon from "../../../../images/customer.png";
import buisnessIcon from "../../../../images/buisness.png";
import invoicejournalIcon from '../../../../images/journal-book.png';
import PriceIcon from "../../../../images/price-tag.png";
import MultipleInvoiceIcon from '../../../../images/multipleInvoice.png';
import unpaidInvoiceIcon from "../../../../images/unpaidinvoice.png";
import offerIcon  from "../../../../images/offer.png";
import inventoryControlIcon from "../../../../images/inventoryControl.png";
import memberinvoicingIcon from "../../../../images/memberinvoicing.jpg";
import importexportIcon from "../../../../images/import.png";

const menuItems = [
  { route: 'invoice', icon: invoiceIcon, label: 'Invoice' },
  { route: 'customers', icon: customericon, label: 'Customers' },
  { route: 'my-buisness', icon: buisnessIcon, label: 'My Business' },
  { route: 'invoive-journal', icon: invoicejournalIcon, label: 'Invoice Journal' },
  { route: 'pricelist', icon: PriceIcon, label: 'Price List' },
  { route: 'multiple-invoice', icon: MultipleInvoiceIcon, label: 'Multiple Invoice' },
  { route: 'unpaid-invoice', icon: unpaidInvoiceIcon, label: 'Unpaid Invoice' },
  { route: 'offer', icon: offerIcon, label: 'Offer' },
  { route: 'inventory-control', icon: inventoryControlIcon, label: 'Inventory Control' },
  { route: 'member-invoicing', icon: memberinvoicingIcon, label: 'Member Invoicing' },
  { route: 'import-export', icon: importexportIcon, label: 'Import/Export' },
];

export default menuItems;
