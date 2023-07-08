import './App.scss';

import { Route, Routes } from 'react-router-dom';

import AddOn from './components/add-ons/add-ons.component';
import FormLayout from './components/form-layout/form-layout.component';
import OrderSummary from './components/order-summary/order-summary.component';
import PersonalInfo from './components/personal-info/personal-info.component';
import ThanksCard from './components/thanks/thanks.component';
import UserPlans from './components/user-plans/user-plans.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormLayout />}>
        <Route index element={<PersonalInfo />} />
        <Route path="/user-plans" element={<UserPlans />} />
        <Route path="/add-ons" element={<AddOn />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/thank-you-for-your-order" element={<ThanksCard />} />
      </Route>
    </Routes>
  );
}

export default App;
