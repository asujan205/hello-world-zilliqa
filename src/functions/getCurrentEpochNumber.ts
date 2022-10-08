const getCurrentEpochNumber = async (zilPay: any) => {
    const data = await zilPay.blockchain.getCurrentMiniEpoch();
    return await data.result;
  };
  
  export default getCurrentEpochNumber;