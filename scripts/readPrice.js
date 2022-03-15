/* eslint-disable no-process-exit */
// yarn hardhat node
// yarn hardhat run scripts/readPrice.js --network localhost
const { ethers } = require("hardhat")

async function readPrice() {
  const priceConsumerV3 = await ethers.getContract("PriceConsumerV3")
  const price = await priceConsumerV3.getLatestPrice()
  const decimals = await priceConsumerV3.getDecimals()
  const address = await priceConsumerV3.getPriceFeed()
  console.log(price.toString(), decimals, address)
}

readPrice()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
