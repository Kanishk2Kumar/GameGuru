import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";

export const predictionMarketcontractAddress = "0x9121C691B5C394653Bed0d092d9D755b1ECA2f14";
export const tokenAddress = "0x23D5865d1572e045168730f3841BA5cF44D4Ab1E";

export const contract = getContract({
    client: client,
    chain: sepolia,
    address: predictionMarketcontractAddress
});

export const tokenContract = getContract({
    client: client,
    chain: sepolia,
    address: tokenAddress
});