import { BrowserRouter, Routes, Route } from "react-router-dom";




import './App.css';

import HomeLayout from "./components/HomeLayout/HomeLayout";
import Us from "./pages/us/Us";
import Terms from "./pages/terms/Terms";

import DashboardLayout from "./components/DashboardLayout/DashboardLayout";
import PriceList from "./pages/dashboard/PriceList";
import Invoice from "./pages/dashboard/Invoice";
import Customers from "./pages/dashboard/Customers ";
import MyBuisness from "./pages/dashboard/MyBuisness";
import InvoiveJournal from "./pages/dashboard/InvoiveJournal";
import MultipleInvoice from "./pages/dashboard/MultipleInvoice";
import UnpaidInvoice from "./pages/dashboard/UnpaidInvoice ";
import Offer from "./pages/dashboard/Offer";
import InventoryControl from "./pages/dashboard/InventoryControl";
import MemberInvoicing from "./pages/dashboard/MemberInvoicing";
import ImportExport from "./pages/dashboard/ImportExport ";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout/>}>
          <Route path="us" element={<Us />} />
          <Route path="terms" element={<Terms />} />
        </Route>
     
        <Route path="/dashboard" element={<DashboardLayout/>}>
          <Route path="invoice" element={<Invoice />} />
          <Route path="customers" element={<Customers />} />
          <Route path="my-buisness" element={<MyBuisness />} />
          <Route path="invoive-journal" element={<InvoiveJournal />} />
          <Route path="pricelist" element={<PriceList />} />
          <Route path="multiple-invoice" element={<MultipleInvoice />} />
          <Route path="unpaid-invoice" element={<UnpaidInvoice />} />
          <Route path="offer" element={<Offer />} />
          <Route path="inventory-control" element={<InventoryControl />} />
          <Route path="member-invoicing" element={<MemberInvoicing />} />
          <Route path="import-export" element={<ImportExport />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
