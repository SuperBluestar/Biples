import { createContext, useEffect, useState } from 'react';
// import { useSession, signIn, signOut } from "next-auth/react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

export const providerOptions = {
  walletlink: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: "99 NFTs", // Required
      infuraId: process.env.INFURA_KEY // Required unless you provide a JSON RPC url; see `rpc` below
    }
  },
  walletconnect: {
    package: WalletConnect, // required
    options: {
      infuraId: process.env.INFURA_KEY // required
    }
  }
};

export const Web3Context = createContext();

export function Web3Wrapper({ children }) {
    const [web3Modal, setWeb3Modal] = useState(null);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWeb3Modal(new Web3Modal({
                network: 'mainnet', // optional
                cacheProvider: true,
                providerOptions, // required
            }));
        }
    }, []);
    const [provider, setProvider] = useState();
    const [account, setAccount] = useState("");
    const [connecting, setConnecting] = useState(false);
    const [active, setActive] = useState(false);

    const connect = async () => {
        try {
            setConnecting(true);
            const provider = await web3Modal.connect();
            setProvider(provider);
            const library = new ethers.providers.Web3Provider(provider);
            const accounts = await library.listAccounts();
            if (accounts){
                setAccount(accounts[0]);
                // signIn('credentials', { redirect: false, wallet_address: accounts[0] })
                setActive(true);
            }
        } catch (error) {
            console.log(error)
        } finally {
            setConnecting(false);
        }
    };
    
    const refreshState = () => {
        setAccount();
    };
    
    const disconnect = async () => {
        await web3Modal.clearCachedProvider();
        // signOut({
        //     redirect: false
        // });
        refreshState();
        setActive(false);
    };

    return (
        <Web3Context.Provider value={{
            connect,
            disconnect,
            connecting,
            active,
            account,
        }}>
        {children}
        </Web3Context.Provider>
    );
}
