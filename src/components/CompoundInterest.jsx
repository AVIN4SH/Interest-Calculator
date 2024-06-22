import React, { useState } from "react";

function CompoundInterest() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [ci, setCi] = useState("");
  const [ciValueDisplay, setCiValueDisplay] = useState(false);
  const [frequency, setFrequency] = useState("yearly");

  const handleCiCalculate = () => {
    const principalNumber = parseFloat(principal);
    const rateNumber = parseFloat(rate) / 100; // for percentage to decimal
    const timeNumber = parseFloat(time);

    if (isNaN(principalNumber) || isNaN(rateNumber) || isNaN(timeNumber)) {
      alert("Please enter input in all fields.");
      return;
    }
    let compoundFrequency;
    if (frequency === "yearly") compoundFrequency = 1;
    else if (frequency === "halfYearly") compoundFrequency = 2;
    else if (frequency === "quarterly") compoundFrequency = 4;

    let ciCalculated = (principalNumber * ((1 + (rateNumber / compoundFrequency)) ** (compoundFrequency * timeNumber))) - principalNumber;
    setCi(ciCalculated.toFixed(2));
    setCiValueDisplay(true);
  };

  const handleResetValues = () => {
    setPrincipal("");
    setRate("");
    setTime("");
    setCi("");
    setCiValueDisplay(false);
  };

  return (
    <div className="hero min-h-[86vh]  bg-interest-img bg-cover">
      <div className="hero-overlay bg-slate-200 sm:bg-[#181818]"></div>
      <div className="sm:bg-[#dbdbdb] shadow-sm shadow-white text-black hero-content text-center md:border md:p-16 md:rounded-lg md:w-5/12">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold">Compound Interest</h1>

          <input
            required
            value={principal}
            type="number"
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="Initial Amount (&#8377;)"
            className="m-2 input w-full max-w-xs text-white bg-[#181818]"
          />
          <input
            required
            value={rate}
            type="number"
            onChange={(e) => setRate(e.target.value)}
            placeholder="Rate of Interest (%)"
            className="m-2 input w-full max-w-xs text-white bg-[#181818]"
          />
          <input
            required
            value={time}
            type="number"
            onChange={(e) => setTime(e.target.value)}
            placeholder="Time (Years)"
            className="m-2 input w-full max-w-xs text-white bg-[#181818]"
          />
          <div className="flex flex-wrap lg:flex-nowrap lg:space-x-4">
            <div className="flex items-center m-2 lg:m-0">
              Compound Frequency:
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <label
                htmlFor="yearly"
                className="flex items-center m-2 hover:cursor-pointer"
              >
                <input onChange={(e) => {setFrequency(e.target.value)}} value={"yearly"}
                  type="radio"
                  id="yearly"
                  name="radio-1"
                  className="radio w-5 h-5 bg-white border-black text-white mr-2"
                  defaultChecked
                />
                Yearly
              </label>
              <label
                htmlFor="halfYearly"
                className="flex items-center m-2 hover:cursor-pointer"
              >
                <input onChange={(e) => {setFrequency(e.target.value)}} value={"halfYearly"}
                  type="radio"
                  id="halfYearly"
                  name="radio-1"
                  className="radio w-5 h-5 bg-white border-black text-white mr-2"
                />
                Half Yearly
              </label>
              <label
                htmlFor="quarterly"
                className="flex items-center m-2 hover:cursor-pointer"
              >
                <input onChange={(e) => {setFrequency(e.target.value)}} value={"quarterly"}
                  type="radio"
                  id="quarterly"
                  name="radio-1"
                  className="radio w-5 h-5 bg-white border-black text-white mr-2"
                />
                Quarterly
              </label>
            </div>
          </div>

          <div className="xl:flex xl:flex-row xl:items-center xl:justify-center">
            <button
              onClick={handleCiCalculate}
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
          <div className="ci-display">
            {ciValueDisplay ? (
              <h1 className="m-3 text-3xl font-bold">
                Compound Interest : &#8377; {ci}
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

export default CompoundInterest;