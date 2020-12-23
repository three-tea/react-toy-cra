import React, { useMemo } from 'react'

const ChartHook = ({ dateRange, margins }) => {
  const data = useMemo(() => getDataWithinRange(dateRange), [dateRange])
  const dimensions = useMemo(() => getDimensions(), [margins])
  const xScale = useMemo(() => getXScale(), [data, dimensions])
  const yScale = useMemo(() => getYScale(), [data, dimensions])

  return <svg className="Chart" />
}

export default ChartHook
