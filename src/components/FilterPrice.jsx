import React, { useState } from 'react';
import { Slider, InputNumber } from 'antd';

const FilterPrice = ({
  t,
  min = 0,
  max = 10000,
  step = 1,
  defaultValue = null,
}) => {
  const initialDefault = Array.isArray(defaultValue)
    ? [Math.max(min, defaultValue[0]), Math.min(max, defaultValue[1])]
    : [min, max];

  const [range, setRange] = useState(() => {
    const [a, b] = initialDefault;
    return [Math.max(min, a), Math.min(max, b)];
  });

  const onSliderChange = (val) => {
    if (!Array.isArray(val)) return;
    setRange([Math.max(min, val[0]), Math.min(max, val[1])]);
  };

  const onMinChange = (val) => {
    if (val === null) return;
    const n = Number(val);
    const newMin = Math.max(min, Math.min(n, range[1]));
    setRange([newMin, range[1]]);
  };

  const onMaxChange = (val) => {
    if (val === null) return;
    const n = Number(val);
    const newMax = Math.min(max, Math.max(n, range[0]));
    setRange([range[0], newMax]);
  };

  return (
    <div className="filter-price">
      {/* Yan-yana, birləşmiş inputlar */}
      <div className="inputs-wrapper">
        <InputNumber
          className="fp-input fp-input-left"
          size="small"
          min={min}
          max={max}
          step={step}
          value={range[0]}
          onChange={onMinChange}
        />
        <InputNumber
          className="fp-input fp-input-right"
          size="small"
          min={min}
          max={max}
          step={step}
          value={range[1]}
          onChange={onMaxChange}
        />
      </div>

      {/* Slider */}
      <div className="slider-wrapper">
        <Slider
          className="fp-slider"
          range
          draggableTrack
          min={min}
          max={max}
          step={step}
          value={range}
          onChange={onSliderChange}
          tooltipVisible={false} // Tooltip-u söndürür
        />
      </div>
      <button className='filterPriceBtn'>{t?.axtar}</button>
    </div>
  );
};

export default FilterPrice;
