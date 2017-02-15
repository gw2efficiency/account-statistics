/* eslint-env node, mocha */
import { expect } from 'chai'
import commerceStatistics from '../src/statistics/commerce'

describe('statistics > commerce', () => {
  it('can calculate buy order count', () => {
    expect(commerceStatistics({}).buyOrderCount).to.equal(null)
    expect(commerceStatistics({commerce: {}}).buyOrderCount).to.equal(null)
    expect(commerceStatistics({commerce: {sells: []}}).buyOrderCount).to.equal(null)
    expect(commerceStatistics({commerce: {buys: []}}).buyOrderCount).to.equal(0)
    expect(commerceStatistics({commerce: {buys: ['1', '2']}}).buyOrderCount).to.equal(2)
  })

  it('can calculate sell order count', () => {
    expect(commerceStatistics({}).sellOrderCount).to.equal(null)
    expect(commerceStatistics({commerce: {}}).sellOrderCount).to.equal(null)
    expect(commerceStatistics({commerce: {buys: []}}).sellOrderCount).to.equal(null)
    expect(commerceStatistics({commerce: {sells: []}}).sellOrderCount).to.equal(0)
    expect(commerceStatistics({commerce: {sells: ['1', '2']}}).sellOrderCount).to.equal(2)
  })
})
