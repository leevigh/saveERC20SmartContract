import { ethers } from "hardhat";

async function main() {
    const web3CXITokenAddress = "0xAB35C28842fBCAef412af34d2242D29C187b8483";
    const web3CXI = await ethers.getContractAt("IERC20", web3CXITokenAddress);

    const saveERC20ContractAddress = "0x592f2256943EDCE4D5828CcFB31f6D2596bcD98d";
    const saveERC20 = await ethers.getContractAt("ISaveERC20", saveERC20ContractAddress);

    // Approve savings contract to spend token
    // const approvalAmount = ethers.parseUnits("1000", 18);

    // const approveTx = await web3CXI.approve(saveERC20, approvalAmount);
    // approveTx.wait();

    // const contractBalanceBeforeDeposit = await saveERC20.getContractBalance();
    // console.log("Contract balance before :::", contractBalanceBeforeDeposit);

    // const depositAmount = ethers.parseUnits("150", 18);
    // const depositTx = await saveERC20.deposit(depositAmount);

    // console.log(depositTx);

    // depositTx.wait();

    // const contractBalanceAfterDeposit = await saveERC20.getContractBalance();

    // console.log("Contract balance after :::", contractBalanceAfterDeposit);



    // Withdrawal Interaction
    // const contractBalanceBeforeWithdrawal = await saveERC20.getContractBalance();

    const contractBalanceBeforeWithdrawal = await saveERC20.getContractBalance();
    console.log("Contract balance before withdrawal :::", contractBalanceBeforeWithdrawal);

    const withdrawAmount = ethers.parseUnits("10", 18);
    const withdrawalTx = await saveERC20.withdraw(withdrawAmount);

    console.log(withdrawalTx);

    withdrawalTx.wait();

    const contractBalanceAfterWithdrawal = await saveERC20.getContractBalance();
    console.log("Contract balance after withdrawal :::", contractBalanceAfterWithdrawal);
    
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
