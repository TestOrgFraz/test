# THIS IS EXAMPLE CODE. DO NOT USE THIS CODE IN PRODUCTION.
import asyncio
import os

from web3 import AsyncHTTPProvider, AsyncWeb3

from utils import load_contract_interface


async def main() -> None:
    account, private_key = os.getenv("ACCOUNT"), os.getenv("ACCOUNT_PRIVATE_KEY")
    contract_interface = load_contract_interface("FtsoV2FeedConsumer")

    w3 = AsyncWeb3(AsyncHTTPProvider("https://flare-api.flare.network/ext/C/rpc"))
    ftso_v2_feed_consumer = w3.eth.contract(
        abi=contract_interface["abi"],
        bytecode=contract_interface["evm"]["bytecode"]["object"],
    )
    account = w3.to_checksum_address(account)
    tx = await ftso_v2_feed_consumer.constructor().build_transaction(
        {
            "from": account,
            "nonce": await w3.eth.get_transaction_count(account),
            "gasPrice": await w3.eth.gas_price,
        }
    )
    signed_tx = w3.eth.account.sign_transaction(tx, private_key=private_key)

    print("Deploying Contract...")
    tx_hash = await w3.eth.send_raw_transaction(signed_tx.raw_transaction)
    tx_receipt = await w3.eth.wait_for_transaction_receipt(tx_hash)
    print(f"Contract deployed at {tx_receipt['contractAddress']}")


if __name__ == "__main__":
    asyncio.run(main())
