import path from 'path'
import fs from 'fs'
import { farms, bills, pools, jungleFarms, tokens, vaults } from './constants'

const listMap: [any, string][] = [
  [farms, 'farms'],
  [bills, 'bills'],
  [pools, 'pools'],
  [jungleFarms, 'jungleFarms'],
  [vaults, 'vaults'],
]

const buildList = (list: any, listName: string) => {
  const tokenListPath = `${path.resolve()}/config/${listName}.json`
  const stringifiedList = JSON.stringify(list, null, 2)
  fs.writeFileSync(tokenListPath, stringifiedList)
  console.info(`✅  ${listName} complete`)
}

const buildTokens = () => {
  const filterActiveTokens = Object.values(tokens).filter((token) => token.active)
  const tokenListPath = `${path.resolve()}/config/tokens.json`
  const stringifiedList = JSON.stringify(filterActiveTokens, null, 2)
  fs.writeFileSync(tokenListPath, stringifiedList)
  console.info(`✅  tokens complete`)
}

listMap.map((curList) => {
  const [list, listName] = curList
  buildList(list, listName)
})

buildTokens()