import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// const tokenAddress = "0xaDBA987955Eac146f1983062100046be46e632fA";
const tokenAddress = "0xAB35C28842fBCAef412af34d2242D29C187b8483"; // my token deployment address

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {

    const save = m.contract("SaveERC20", [tokenAddress]);

    return { save };
});

export default SaveERC20Module;

// Deployed SaveERC20: 0xD410219f5C87247d3F109695275A70Da7805f1b1
// My Deployed SaveERC20: 0x592f2256943EDCE4D5828CcFB31f6D2596bcD98d
