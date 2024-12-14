"use client";

import { useState } from "react";
import { useSendOTP } from "@/core/services/mutations";
import { toast } from "react-hot-toast";
import { isValidMobile } from "@/core/utils/validation";
import OtpInput from 'react18-input-otp';

function AuthForm() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  return (
    <div>
      {step === 1 && <SendOTPForm mobile={mobile} setMobile={setMobile} setStep={setStep} />}
      {step === 2 && <CheckOTPForm mobile={mobile} setStep={setStep} />}
    </div>
  );
}
export default AuthForm;

// ----------------------------------[step 1]------------------------------------------------------

function SendOTPForm({ mobile, setMobile, setStep }) {
  const [error, setError] = useState("");
  const { isPending, mutate } = useSendOTP();

  const sendOTPHandler = (event) => {
    event.preventDefault();

    if(isPending) return;

    if (!isValidMobile(mobile)) return setError("شماره معتبر را وارد کنید!");
    setError("");

    mutate(
      { mobile },
      { onSuccess: (data) => { 
        toast.success(data?.data?.message);
        toast(data?.data?.code);
        // setStep(2)
    }
      },
      {
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <div className="flex flex-col w-[561px] h-[362px] rounded-[20px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] background-color: rgb(229 231 235) p-[25px]">
      <h4 className="text-xl font-bold text-center">ورود به تورینو</h4>
      <form
        className="flex flex-col gap-10 justify-end flex-1"
        onSubmit={sendOTPHandler}
      >
        <label className="text-center">شماره موبایل خود را وارد کنید</label>
        <input
          type="text"
          placeholder="0912333***"
          className="h-[54px] rounded-[6px] border border-[#00000040] text-center "
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        {!!error && <p className="text-red-500">َ{error}</p>}
        <button
          className="bg-[#28A745] h-[54px] text-white rounded-[6px]"
          type="submit"
        >
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

// ----------------------------------[step 2]------------------------------------------------------


function CheckOTPForm({ mobile, setStep }) {
    const [code, setCode] = useState("");

    // const { isPending, mutate } = useSendOTP();
  
    const checkOTPHandler = (event) => {
    //   event.preventDefault();
  
    //   if(isPending) return;
  
    //   if (!isValidMobile(mobile)) return setError("شماره معتبر را وارد کنید!");
    //   setError("");
  
    //   mutate(
    //     { mobile },
    //     { onSuccess: (data) => { 
    //       toast.success(data?.data?.message);
    //       toast(data?.data?.code);
    //       setStep(2)
    //   }
    //     },
    //     {
    //       onError: (error) => {
    //         console.log(error);
    //       },
    //     }
    //   );
    };
  
    return (
      <div className="flex flex-col w-[561px] h-[362px] rounded-[20px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] background-color: rgb(229 231 235) p-[25px]">
        <h4 className="text-xl font-bold text-center">.کد تایید را وارد کنید</h4>
        <form
          className="flex flex-col gap-10 justify-end flex-1"
          onSubmit={checkOTPHandler}
        >
          <label className="text-center">کد تایید به شماره {mobile} ارسال شد.</label>
          <input
            type="text"
            placeholder="0912333***"
            className="h-[54px] rounded-[6px] border border-[#00000040] text-center "
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          
          <OtpInput value={this.state.otp} onChange={this.handleChange} numInputs={6} separator={<span>-</span>} />;
          
          <button
            className="bg-[#28A745] h-[54px] text-white rounded-[6px]"
            type="submit"
          >
            ورود به تورینو
          </button>
        </form>
      </div>
    );
  }
