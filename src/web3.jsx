import { configs } from './config'
const { NETWORK_ID, INFURA_APP_ID } = configs
const ethers = require('ethers')
window.ethers = ethers
const eth = new ethers.providers.InfuraProvider()
export default eth
