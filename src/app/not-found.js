import Link from "next/link";

export default function NotFound() {
  return (
    <div class="flex justify-center items-center">
      <div class="flex flex-col space-y-10">
        <h1 class="w-[399px] h-[50px] font-semibold text-[32px] text-right text-[#282828] leading-[56px] m-20px">صفحه مورد نظر یافت نشد!</h1>
        <Link class="w-[361px] h-[75px] rounded-[16px] p-[8px] bg-[#D8FFE1] front-semibold text-[28px] leading-[44px] text-center text-[#28A745] border-none" href="/">بازگشت به صفحه اصلی</Link>
      </div>
      <img class="w-[555px] h-[555px]" src="images/error-tv.svg" alt="error 404" />
    </div>
  );
}
