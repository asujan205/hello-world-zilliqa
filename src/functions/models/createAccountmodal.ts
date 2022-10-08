import React, { useEffect, useState } from 'react';
import ContextContainer from '../contextCreater';
import createUserTransition from '../createUserTransactions';

type props={
    showSigned:boolean,
    setShowSignUp(visible: boolean): void;
}
const CreateAccountModal = (props) => {
    const {showSigned,setShowSignUp} = props;
    const [name,setName]=useState<string| undefined>(undefined);
    const [userRole,setUserRole]=useState<string| undefined>(undefined);
    const {zilPay,contract} = ContextContainer.useContainer();
    const createUser=async()=>{
       const role = userRole === 'host' ? '1' : '0';
       createUserTransition(zilPay,contract,name,role);
    }
    const connectZilPay=async()=>{
        await zilPay.wallet.connect();
        window.location.reload();
    }
    useEffect(()=>{
        setName(undefined);
        setUserRole('host');
    },[setShowSignUp]);
    return()


}
export default CreateAccountModal;