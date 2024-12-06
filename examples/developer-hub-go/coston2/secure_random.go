// THIS IS EXAMPLE CODE. DO NOT USE THIS CODE IN PRODUCTION.
package coston2

import (
	"context"
	"fmt"
	"math/big"

	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/ethclient"
)

type RandomV2Response struct {
	RandomNumber    *big.Int
	IsSecureRandom  bool
	RandomTimestamp *big.Int
}

func SecureRandom() *RandomV2Response {
	// RandomNumberV2 address where the secure RNG is served (Flare Testnet Coston2)
	// See https://dev.flare.network/network/solidity-reference
	address := common.HexToAddress("0x5CdF9eAF3EB8b44fB696984a1420B56A7575D250")
	rpcUrl := "https://coston2-api.flare.network/ext/C/rpc"
	// Connect to an RPC node
	client, _ := ethclient.Dial(rpcUrl)
	// Set up contract instance
	randomV2, _ := NewRandomNumberV2(address, client)
	// Fetch secure random number
	opts := &bind.CallOpts{Context: context.Background()}
	res, _ := randomV2.GetRandomNumber(opts)
	// Print results

	fmt.Println("Random number: ", res.RandomNumber)
	fmt.Println("Is secure random: ", res.IsSecureRandom)
	fmt.Println("Timestamp: ", res.RandomTimestamp)
	response := &RandomV2Response{
		RandomNumber:    res.RandomNumber,
		IsSecureRandom:  res.IsSecureRandom,
		RandomTimestamp: res.RandomTimestamp,
	}
	return response
}
