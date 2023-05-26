import React, { useState } from 'react';
import MultiStep from 'react-multistep';

import { UserForm, UserData } from '../components/UserForm';
import { AccountForm, AccountData } from '../components/AccountForm';
import { AddressForm, AddressData } from '../components/AddressForm';

const Users: React.FC = () => {
    const [userData, setUserData] = useState<UserData>({ firstName: '', lastName: '', age: '' });
    const [accountData, setAccountData] = useState<AccountData>({ email: '', password: '' });
    const [addressData, setAddressData] = useState<AddressData>({ street: '', city: '', state: '', zip: '' });

    const steps = [
        <UserForm key="userForm" {...userData} updateFields={setUserData} />,
        <AccountForm key="accountForm" {...accountData} updateFields={setAccountData} />,
        <AddressForm key="addressForm" {...addressData} updateFields={setAddressData} />
    ];

    return (
        <div>
            <MultiStep activeStep={0}>
                {steps}
            </MultiStep>
        </div>
    );
};

export default Users;
