import { useAccount, useBalance } from "wagmi";

export function useG3X24Balance() {
  const { address } = useAccount();
  const { data, isLoading } = useBalance({
    address,
    token: "0x65e47d9bd03c73021858ab2e1acb2cab38d9b039",
    watch: true,
  });

  return {
    balance: data?.formatted || "0",
    loading: isLoading,
  };
}
