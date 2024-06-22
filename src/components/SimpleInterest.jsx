import React, { useState } from "react";

function SimpleInterest() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [si, setSi] = useState("");
  const [siValueDisplay, setSiValueDisplay] = useState(false);

  const handleSiCalculate = () => {
    const principalNumber = parseFloat(principal);
    const rateNumber = parseFloat(rate);
    const timeNumber = parseFloat(time);

    if (isNaN(principalNumber) || isNaN(rateNumber) || isNaN(timeNumber)) {
      alert("Please enter input in all fields.");
      return;
    }

    let siCalculated = (principalNumber * rateNumber * timeNumber) / 100;
    setSi(siCalculated.toFixed(2));
    setSiValueDisplay(true);
  };

  const handleResetValues = () => {
    setPrincipal("");
    setRate("");
    setTime("");
    setSi("");
    setSiValueDisplay(false);
  };

  return (
    <div className="hero min-h-[86vh]  bg-interest-img bg-cover">
      <div className="hero-overlay bg-slate-200 sm:bg-[#181818]"></div>
      <div className="sm:bg-[#dbdbdb] shadow-sm shadow-white text-black hero-content text-center sm:min-h-7/12 md:border md:p-16 md:rounded-lg md:w-5/12">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold">Simple Interest</h1>

          <input
            type="number"
            value={principal}
            required
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="Principal Amount (&#8377;)"
            className="m-2 input w-full max-w-xs text-white bg-[#181818]"
          />
          <input
            type="number"
            value={rate}
            required
            onChange={(e) => setRate(e.target.value)}
            placeholder="Rate of Interest (%)"
            className="m-2 input w-full max-w-xs text-white bg-[#181818]"
          />
          <input
            type="number"
            value={time}
            required
            onChange={(e) => setTime(e.target.value)}
            placeholder="Time (Years)"
            className="m-2 input w-full max-w-xs text-white bg-[#181818]"
          />
          <div className="xl:flex xl:flex-row xl:items-center xl:justify-center">
            <button
              onClick={handleSiCalculate}
              className="m-4 btn md:btn-md sm:btn-wide lg:btn-wide md:text-xl btn-outline bg-green-500 text-white hover:bg-green-600 hover:text-gray-100"
            >
              Calculate Interest
            </button>
            <button
              onClick={handleResetValues}
              className="m-4 btn sm:btn-wide md:btn-md  lg:btn-wide md:text-xl btn-outline bg-red-500 text-white hover:bg-red-600 hover:text-gray-100"
            >
              Reset Values
            </button>
          </div>
          <div className="si-display">
            {siValueDisplay ? (
              <h1 className="m-3 text-4xl font-bold">
                Simple Interest : &#8377; {si}
              </h1>
            ) : (
              <p>Calculate your interest now !!!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleInterest;
